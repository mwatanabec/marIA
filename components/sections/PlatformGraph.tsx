"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { platformGraph, type GraphNode, type GraphNodeType } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./PlatformGraph.module.css";

// Evita o warning de useLayoutEffect no SSR do Next.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const typeClass: Record<GraphNodeType, string> = {
  core: styles.typeCore,
  method: styles.typeMethod,
  service: styles.typeService,
  case: styles.typeCase,
  differential: styles.typeDifferential,
};

function radiusFor(node: GraphNode): number {
  if (node.type === "core") return 16;
  return node.primary ? 11 : 7;
}

export function PlatformGraph() {
  const { nodes, edges, typeLabels, defaultId } = platformGraph;
  const reduced = useReducedMotion();

  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const active = hovered ?? selected;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const nodeRefs = useRef<Record<string, SVGGElement | null>>({});
  const edgeRefs = useRef<(SVGLineElement | null)[]>([]);
  const basePos = useRef(nodes.map((n) => ({ x: n.x, y: n.y })));
  const dragging = useRef<number | null>(null);
  const staticApply = useRef<() => void>(() => {});

  const idToIndex = useMemo(() => {
    const map: Record<string, number> = {};
    nodes.forEach((n, i) => (map[n.id] = i));
    return map;
  }, [nodes]);

  const nodeById = useMemo(() => {
    const map: Record<string, GraphNode> = {};
    nodes.forEach((n) => (map[n.id] = n));
    return map;
  }, [nodes]);

  const adjacency = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    nodes.forEach((n) => (map[n.id] = new Set()));
    edges.forEach(([s, t]) => {
      map[s]?.add(t);
      map[t]?.add(s);
    });
    return map;
  }, [nodes, edges]);

  const highlight = useMemo(() => {
    if (!active) return null;
    const set = new Set<string>([active]);
    adjacency[active]?.forEach((id) => set.add(id));
    return set;
  }, [active, adjacency]);

  // Posicionamento imperativo: drift suave + arrastar, sem re-render por frame.
  useIsomorphicLayoutEffect(() => {
    const applyPositions = (getPos: (i: number) => { x: number; y: number }) => {
      nodes.forEach((n, i) => {
        const p = getPos(i);
        const g = nodeRefs.current[n.id];
        if (g) g.setAttribute("transform", `translate(${p.x.toFixed(2)},${p.y.toFixed(2)})`);
      });
      edges.forEach(([s, t], i) => {
        const line = edgeRefs.current[i];
        if (!line) return;
        const ps = getPos(idToIndex[s]);
        const pt = getPos(idToIndex[t]);
        line.setAttribute("x1", ps.x.toFixed(2));
        line.setAttribute("y1", ps.y.toFixed(2));
        line.setAttribute("x2", pt.x.toFixed(2));
        line.setAttribute("y2", pt.y.toFixed(2));
      });
    };

    const staticPos = (i: number) => basePos.current[i];
    staticApply.current = () => applyPositions(staticPos);

    // Estado inicial (antes do paint).
    applyPositions(staticPos);

    if (reduced) {
      // Sem drift: só reposiciona durante o arrastar (via handler).
      return;
    }

    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const t = now - start;
      applyPositions((i) => {
        const b = basePos.current[i];
        if (dragging.current === i) return b;
        const phase = i * 1.7;
        return {
          x: b.x + Math.sin(t * 0.0006 + phase) * 6,
          y: b.y + Math.cos(t * 0.00054 + phase) * 6,
        };
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [nodes, edges, idToIndex, reduced]);

  const clientToSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    const p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  };

  const onNodePointerDown = (index: number, e: ReactPointerEvent<SVGGElement>) => {
    // Só arrasta com mouse/caneta — no toque preservamos o scroll da página.
    if (e.pointerType === "touch") return;
    e.preventDefault();
    dragging.current = index;
    svgRef.current?.setPointerCapture(e.pointerId);
  };

  const onSvgPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (dragging.current === null) return;
    const p = clientToSvg(e.clientX, e.clientY);
    if (!p) return;
    basePos.current[dragging.current] = p;
    if (reduced) staticApply.current();
  };

  const endDrag = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (dragging.current === null) return;
    try {
      svgRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer já liberado */
    }
    dragging.current = null;
  };

  const toggleSelect = (id: string) =>
    setSelected((prev) => (prev === id ? null : id));

  const onNodeKeyDown = (id: string, e: ReactKeyboardEvent<SVGGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSelect(id);
    }
  };

  const info = nodeById[active ?? selected ?? defaultId] ?? nodeById[defaultId];
  const neighbors = useMemo(
    () => Array.from(adjacency[info.id] ?? []).map((id) => nodeById[id]),
    [adjacency, info.id, nodeById]
  );

  return (
    <section id="cases" className="section" aria-labelledby="graph-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{platformGraph.eyebrow}</Eyebrow>
            <h2 id="graph-heading">{platformGraph.title}</h2>
          </div>
          <p>{platformGraph.intro}</p>
        </SectionReveal>

        <SectionReveal className={styles.wrap}>
          <div className={styles.graphCard}>
            <svg
              ref={svgRef}
              className={styles.svg}
              viewBox="0 0 1000 620"
              role="group"
              aria-label="Mapa interativo da plataforma MarIA. Use Tab para navegar entre os nós e Enter para ver os detalhes."
              onPointerMove={onSvgPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              onPointerCancel={endDrag}
            >
              <g className={styles.edges}>
                {edges.map(([s, t], i) => {
                  const lit = active !== null && (s === active || t === active);
                  const dim = active !== null && !lit;
                  const cls = [
                    styles.edge,
                    lit ? styles.edgeLit : "",
                    dim ? styles.edgeDim : "",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <line
                      key={`${s}-${t}`}
                      ref={(el) => {
                        edgeRefs.current[i] = el;
                      }}
                      className={cls}
                    />
                  );
                })}
              </g>

              <g className={styles.nodes}>
                {nodes.map((n, index) => {
                  const r = radiusFor(n);
                  const isActive = n.id === active;
                  const inSet = highlight?.has(n.id) ?? false;
                  const dim = highlight !== null && !inSet;
                  const labelShown = n.primary || inSet;
                  const cls = [
                    styles.node,
                    typeClass[n.type],
                    n.primary ? styles.primary : styles.secondary,
                    isActive ? styles.isActive : "",
                    dim ? styles.isDim : "",
                    selected === n.id ? styles.isSelected : "",
                  ]
                    .filter(Boolean)
                    .join(" ");
                  return (
                    <g
                      key={n.id}
                      ref={(el) => {
                        nodeRefs.current[n.id] = el;
                      }}
                      className={cls}
                      role="button"
                      tabIndex={0}
                      aria-label={`${typeLabels[n.type]}: ${n.detailTitle ?? n.label}`}
                      aria-pressed={selected === n.id}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(n.id)}
                      onBlur={() => setHovered(null)}
                      onClick={() => toggleSelect(n.id)}
                      onKeyDown={(e) => onNodeKeyDown(n.id, e)}
                      onPointerDown={(e) => onNodePointerDown(index, e)}
                    >
                      <circle className={styles.hit} r={30} />
                      <circle className={styles.halo} r={r + 5} />
                      <circle className={styles.dot} r={r} />
                      <text
                        className={[
                          styles.label,
                          n.primary ? styles.labelPrimary : styles.labelSecondary,
                          labelShown ? styles.labelShown : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        y={r + 17}
                      >
                        {n.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          <aside className={styles.panel} aria-live="polite">
            <span className={`${styles.tag} ${typeClass[info.type]}`}>
              {typeLabels[info.type]}
            </span>
            <h3 className={styles.panelTitle}>{info.detailTitle ?? info.label}</h3>
            <p className={styles.panelText}>{info.description}</p>

            {neighbors.length > 0 ? (
              <div className={styles.connections}>
                <span className={styles.connLabel}>Conecta-se a</span>
                <div className={styles.chips}>
                  {neighbors.map((nb) => (
                    <button
                      key={nb.id}
                      type="button"
                      className={styles.chip}
                      onClick={() => setSelected(nb.id)}
                      onMouseEnter={() => setHovered(nb.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {nb.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <p className={styles.hint}>{platformGraph.hint}</p>
          </aside>
        </SectionReveal>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "@/hooks/useInView";

type AnimatedNetworkProps = {
  variant: "orbit" | "map";
  className?: string;
};

const pulseDelays = ["0s", "0.6s", "1.1s", "0.3s", "0.9s", "1.4s", "0.2s"];

export function AnimatedNetwork({ variant, className }: AnimatedNetworkProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const wrapperClass = [inView ? "is-visible" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (variant === "orbit") {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden="true">
        <svg viewBox="0 0 640 640" fill="none">
          <path
            className="draw-line"
            pathLength={1}
            d="M68 148C174 40 358 38 482 130C605 222 640 404 542 520"
            stroke="#B79AC8"
            strokeWidth="1.8"
          />
          <path
            className="draw-line"
            pathLength={1}
            d="M132 252C230 160 380 158 484 242"
            stroke="#5B3A5E"
            strokeWidth="1.5"
            opacity=".5"
          />
          <path
            className="draw-line"
            pathLength={1}
            d="M138 248L238 168L384 172L486 242L532 414"
            stroke="#5B3A5E"
            strokeWidth="1.5"
            opacity=".5"
          />
          <circle className="node-pulse" style={{ animationDelay: pulseDelays[0] }} cx="138" cy="248" r="7" fill="#5B3A5E" />
          <circle className="node-pulse" style={{ animationDelay: pulseDelays[1] }} cx="238" cy="168" r="5" fill="#B79AC8" />
          <circle className="node-pulse" style={{ animationDelay: pulseDelays[2] }} cx="384" cy="172" r="6" fill="#D9B8C3" />
          <circle className="node-pulse" style={{ animationDelay: pulseDelays[3] }} cx="486" cy="242" r="8" fill="#5B3A5E" />
          <circle className="node-pulse" style={{ animationDelay: pulseDelays[4] }} cx="532" cy="414" r="5" fill="#B79AC8" />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className={wrapperClass} aria-hidden="true">
      <svg viewBox="0 0 520 260" fill="none">
        <path
          className="draw-line"
          pathLength={1}
          d="M60 182L156 72L260 132L358 60L458 156"
          stroke="rgba(255,255,255,.36)"
          strokeWidth="1.5"
        />
        <path
          className="draw-line"
          pathLength={1}
          d="M88 90L260 132L400 204"
          stroke="rgba(243,215,207,.30)"
          strokeWidth="1"
        />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[0] }} cx="60" cy="182" r="8" fill="#F3D7CF" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[1] }} cx="156" cy="72" r="10" fill="#B79AC8" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[2] }} cx="260" cy="132" r="14" fill="#FFFFFF" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[3] }} cx="358" cy="60" r="8" fill="#D9B8C3" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[4] }} cx="458" cy="156" r="10" fill="#B79AC8" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[5] }} cx="88" cy="90" r="6" fill="#D9B8C3" />
        <circle className="node-pulse" style={{ animationDelay: pulseDelays[6] }} cx="400" cy="204" r="7" fill="#F3D7CF" />
      </svg>
    </div>
  );
}

"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type SectionRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SectionReveal({ children, className, ...rest }: SectionRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const classes = ["reveal", inView ? "is-visible" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
}

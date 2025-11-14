"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, ElementType, ReactNode, Ref } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
} & React.HTMLAttributes<HTMLElement>;

export function ScrollReveal({
  as,
  children,
  className,
  delay = 0,
  threshold = 0.25,
  style,
  ...rest
}: ScrollRevealProps) {
  const ComponentTag = (as ?? "div") as ElementType;
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const styleFromProps = style as CSSProperties | undefined;

  return (
    <ComponentTag
      ref={elementRef as Ref<HTMLElement>}
      {...rest}
      className={cn("section-fade", isVisible && "visible", className)}
      style={{
        ...(styleFromProps ?? {}),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </ComponentTag>
  );
}

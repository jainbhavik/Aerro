"use client";

import {
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type MagneticResult = {
  ref: React.RefObject<HTMLElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
};

export function useMagnetic(strength = 0.28): MagneticResult {
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    mx.set(dx * strength);
    my.set(dy * strength);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}

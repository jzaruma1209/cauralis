"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startCounting?: boolean;
  separator?: string;
  decimal?: string;
  decimals?: number;
  onEnd?: () => void;
  onStart?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startCounting = true,
  separator = "",
  decimal = ".",
  decimals = 0,
  onEnd,
  onStart,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView && startCounting) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, startCounting, delay, direction, from, to, motionValue, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const options = {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          Number(latest.toFixed(decimals))
        );

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
        
        if (latest === (direction === "down" ? from : to) && typeof onEnd === "function") {
          onEnd();
        }
      }
    });
    return () => unsubscribe();
  }, [springValue, decimals, separator, direction, from, to, onEnd]);

  return <span className={className} ref={ref} />;
}

"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  const [randomValues, setRandomValues] = useState<{ delay: string; duration: string }[]>([]);

  useEffect(() => {
    const values = Array.from({ length: meteorCount }, () => ({
      delay: Math.random() * 5 + "s",
      duration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
    }));
    setRandomValues(values);
  }, [meteorCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: meteorCount }).map((_, idx) => {
        const position = idx * (800 / meteorCount) - 400;
        const random = randomValues[idx] || { delay: "0s", duration: "8s" }; // fallback

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: random.delay,
              animationDuration: random.duration,
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};

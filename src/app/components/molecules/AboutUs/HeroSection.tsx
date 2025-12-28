"use client";
import { LayoutTextFlip } from "@/app/components/atom/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipHeroSection() {
  return (
    <div>
      <motion.div className="relative mx-4 my-15 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row lg:xl:py-10">
        <LayoutTextFlip
          text="Welcome to Vsay"
          words={["Mission", "Vision", "About The Company", "Know About Leaders", "Our Values"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400 ">
        Experience the power of Vsay Group that bring your ideas to life.
      </p>
    </div>
  );
}

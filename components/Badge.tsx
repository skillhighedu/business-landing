"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { ReactNode } from "react";

type BadgeProps = {
  badgeText: string;
  icon?: ReactNode;
  color?: string; // tailwind color like "blue", "green", "purple"
};

export default function Badge({ badgeText, icon, color = "blue" }: BadgeProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="mb-6 flex justify-center"
    >
      <span
        className={`
          inline-flex items-center gap-2 px-4 py-2
          rounded-full
          border border-${color}-400/40
          bg-${color}-100/20 dark:bg-${color}-400/20
          text-${color}-800 dark:text-${color}-100
          font-medium text-sm
          shadow-sm hover:shadow-md
          transition-all duration-300
          backdrop-blur-sm
          cursor-default
        `}
      >
        {icon && <span className="flex">{icon}</span>}
        {badgeText}
      </span>
    </motion.div>
  );
}

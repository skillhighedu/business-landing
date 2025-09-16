"use client";
import Badge from "./Badge";
import HeaderSection from "./HeaderSection";
import { HugeIcon } from "@/utils/hugeicons";
import { easeOut, motion } from "framer-motion"; // Added for animations

import type { HugeIconName } from "@/utils/hugeicons";

const benefits: {
  title: string;
  description: string;
  icon: HugeIconName;
  color: string;
}[] = [
  {
    title: "Boost Admissions & Revenue",
    description:
      "Scale enrollments with an integrated CRM that automates lead capture, follow-ups, and conversions — no more manual busywork.",
    icon: "analytics",
    color: "from-primary/100 to-primary/80 text-white",
  },
  {
    title: "All-in-One Admin Control",
    description:
      "Run operations seamlessly with a unified dashboard to manage students, teachers, and courses — backed by role-based access and real-time analytics.",
    icon: "users",
    color: "from-primary/100 to-primary/80 text-white",
  },
  {
    title: "Engaged Learning Experience",
    description:
      "Offer students personalized dashboards with progress tracking, assignments, and communication tools — designed to boost retention and satisfaction.",
    icon: "mortarboard",
    color: "from-primary/100 to-primary/80 text-white",
  },
];

// Animation variants for smooth transitions
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

export default function Benefits() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/80 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl ">
        <Badge badgeText="Our Value" />
        <HeaderSection
          title="Why Choose Us?"
          description="Empowering edtechs with the tools to grow, manage, and scale seamlessly."
        />

        {/* Bento Grid */}
        <div className="mt-8 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)]">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              className={`group relative rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-md hover:shadow-xl transition-all bg-gradient-to-br ${benefit.color} overflow-hidden
              ${
                idx === 0
                  ? "lg:row-span-2"
                  : idx === 1
                  ? "lg:col-span-2"
                  : idx === 2
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              }`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              role="article" // Improved accessibility
              aria-labelledby={`benefit-title-${idx}`}
            >
              {/* Subtle background overlay for hover effect */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/30 text-inherit mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                <HugeIcon
                  name={benefit.icon}
                  size={28}
                  aria-hidden="true"
                  className="text-neutral-900"
                />
              </div>
              
              {/* Title */}
              <h3
                id={`benefit-title-${idx}`}
                className="text-lg md:text-xl font-semibold tracking-tight"
              >
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-sm md:text-base leading-relaxed max-w-md font-sans text-white/90">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import CalButton from "./CalButton";
import Balancer from "react-wrap-balancer";
import { fadeInUp, staggerChildren } from "@/utils/animations";
import Badge from "./Badge";
import { HugeIcon } from "@/utils/hugeicons";

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white m-4 "
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {/* Background Image */}
      <div className="absolute inset-0 rounded-2xl">
        <img
          src="/images/forest.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        <Badge badgeText="🎓 For EdTech Innovators" />

        {/* Headline */}
        <motion.div variants={fadeInUp}>
          <Balancer>
            <h1 className="text-5xl sm:text-7xl font-extrabold max-w-4xl leading-tight font-serif">
              Upgrade Your Business with SkillHigh Tools
            </h1>
          </Balancer>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={fadeInUp} className="mt-6 max-w-4xl mx-auto">
          <Balancer>
            <p className="text-xl sm:text-2xl opacity-90">
              Powerful dashboards, high-converting landing pages, and smart CRMs
              — everything your business needs to grow, manage, and scale in one platform.
            </p>
          </Balancer>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <CalButton label="Schedule a Call" iconPosition="right"  icon={<HugeIcon name="callIcon" className="text-white"/>} />
        </motion.div>
      </div>
    </motion.section>
  );
}

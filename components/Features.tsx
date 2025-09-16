"use client";
import { motion } from "framer-motion";
import HeaderSection from "./HeaderSection";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/tools";
import Badge from "./Badge";
import Link from "next/link";

export default function ToolsShowcase() {
  return (
    <section id="tools" className="py-10 px-10  ">
      <div className="max-w-6xl mx-auto">
        <Badge badgeText="🚀 Our Services" />
        <HeaderSection
          title="Our Powerful Services"
          description="Everything you need to scale, manage, and grow your business in one simple platform."
        />

        {/* Categories */}
        <div className="flex flex-col gap-32">
          {categories.map((category, catIndex) => (
            <div key={category.name}>
              {/* Category heading */}
              <div className="mb-12 text-start">
                <h2 className="text-3xl font-bold text-primary mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-lg max-w-5xl">
                  {category.description}
                </p>
              </div>

              {/* Tools inside category */}
              <div className="flex flex-col gap-24">
                {category.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className={`flex flex-col md:flex-row items-center gap-12 ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + catIndex * 0.4,
                    }}
                  >
                    {/* Text */}
                    <motion.div
                      className="md:w-1/2"
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1 + index * 0.2 + catIndex * 0.4,
                      }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-3">
                        {tool.description}
                      </p>

                      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                        {tool.features?.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                    
                      <Button
  asChild
  className="bg-green-800 text-white text-base sm:text-md px-4 py-5 hover:bg-primary pixel-border shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none flex items-center gap-2 cursor-pointer"
>
  <Link href={`/tools/${tool.slug}`}>
    View Tool
  </Link>
</Button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      className="md:w-1/2 overflow-hidden rounded-2xl shadow-xl"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.2 + catIndex * 0.4,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={tool.image[0]}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { categories } from "@/data/tools";
import { motion } from "framer-motion";
import CalButton from "./CalButton";
import HeaderSection from "./HeaderSection";

export default function ToolsShowcase() {
  return (
    <section id="tools" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <HeaderSection
          title="Our Powerful Tools"
          description="Everything you need to scale, manage, and grow your business in one simple platform."
        />

        <div className="flex flex-col gap-32">
          {categories.map((category, catIndex) => (
            <div key={category.name}>
              <div className="mb-12 text-start">
                <h2 className="text-3xl font-bold text-primary mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-lg max-w-5xl ">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-col gap-24">
                {category.tools.map((tool, index) => (
                  <motion.div
                    key={tool.slug}
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
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-3">
                        {tool.description}
                      </p>

                      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                        {tool.features.slice(0, 2).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <Link href={`/tools/${tool.slug}`}>
                        <CalButton label="Learn More" />
                      </Link>
                    </div>

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
                        src={Array.isArray(tool.image) ? tool.image[0] : tool.image}
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

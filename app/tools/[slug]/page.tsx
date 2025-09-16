import { categories } from "@/data/tools";
import Balancer from "react-wrap-balancer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CallButton from "@/components/CalButton";

type Params = {
  slug: string;
};

interface ToolPageProps {
  params: Promise<Params>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ToolPage({ params, searchParams }: ToolPageProps) {
  const resolvedParams = await params;
  const allTools = categories.flatMap((c) =>
    c.tools.map((tool) => ({
      ...tool,
      image: Array.isArray(tool.image) ? tool.image[0] : tool.image,
    }))
  );
  const tool = allTools.find((t) => t.slug === resolvedParams.slug);

  if (!tool) notFound();

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Go Back Button */}
      <div className="mb-8">
        <Button
          variant="outline"
          className="cursor-pointer"
         
        >
          Back to Tools
        </Button>
      </div>

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <Balancer>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
              {tool.name}
            </h1>
          </Balancer>
          <Balancer>
            <p className="text-gray-700 text-lg leading-relaxed">
              {tool.extraInfo || tool.description}
            </p>
          </Balancer>

          <CallButton label={`Book a Demo for ${tool.name}`} />
        </div>

        <div>
          <Image
            src={tool.image}
            alt={tool.name}
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Key Features
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {tool.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const allTools = categories.flatMap((c) =>
    c.tools.map((tool) => ({
      ...tool,
      image: Array.isArray(tool.image) ? tool.image[0] : tool.image,
    }))
  );
  return allTools.map((tool) => ({ slug: tool.slug }));
}

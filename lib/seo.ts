import type { Metadata } from "next";

type SEOConfig = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
};

const defaultSEO = {
  title: "SaaS Landing | Convert More Customers",
  description:
    "Boost your conversions with this high-converting Next.js SaaS landing page template. SEO optimized, fast, and mobile-friendly.",
  image: "/images/og-image.png",
  url: "https://yourdomain.com",
  keywords: [
    "Next.js landing page",
    "SEO optimized website",
    "SaaS template",
    "marketing site",
    "high converting page",
  ],
};

export function getSEO(config: SEOConfig = {}): Metadata {
  const seo = { ...defaultSEO, ...config };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: "SaaS Landing",
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
      creator: "@yourhandle",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL("https://yourdomain.com"),
  };
}

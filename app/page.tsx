// app/page.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
// import { useLocomotiveScroll } from "@/hooks/useLocomotive";
// import { landingSections } from "@/lib/sections";
import "./globals.css";
import LeadForm from "@/components/LeadForm";


const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const Benefits = dynamic(() => import("@/components/Benifits"), { ssr: false });

const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });




export default function Page() {
  // const scrollRef = useLocomotiveScroll();

  return (
    <div>
     <Hero/>
      <Features/>
      <Benefits/>
      <FAQ/>
      <LeadForm/>
      <CTA/>

    </div>
  );
}
import React from "react";

interface HeaderSectionProps {
  title: string;
  description: string;
  center?: boolean; // optional prop to control text alignment
}

export default function HeaderSection({
  title,
  description,
  center = true,
}: HeaderSectionProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-16`}>
      <h2 className=" text-3xl sm:text-4xl font-extrabold text-primary">{title}</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

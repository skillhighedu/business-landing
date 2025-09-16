"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import HeaderSection from "./HeaderSection";
import Badge from "./Badge";

const faqs = [
  {
    q: "Can students track their progress?",
    a: "Yes, the student dashboard shows course progress, assignments, and performance insights in real time.",
  },
  {
    q: "Does the admin dashboard support multiple roles?",
    a: "Absolutely. Admins can manage students, instructors, and courses with role-based permissions.",
  },
  {
    q: "Is the CRM built for education?",
    a: "Yes. Our CRM is customized for edtech, helping you manage leads, track enrollments, and automate follow-ups.",
  },
  {
    q: "Can the platform handle large numbers of students?",
    a: "Yes, the system is designed to scale seamlessly as your student base grows.",
  },
  {
    q: "Can I integrate it with my existing LMS or tools?",
    a: "Definitely. Our dashboards and CRM can integrate with popular LMS platforms and third-party tools via APIs.",
  },
  {
    q: "Is it mobile-friendly?",
    a: "Yes, students, teachers, and admins can all access the dashboards and CRM from any device.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHeights(refs.current.map((ref) => ref?.scrollHeight || 0));
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative  bg-white py-10">
      <Badge badgeText="FAQs"/>
      <HeaderSection title=" Frequently Asked Questions" description="Everything you need to know about our dashboards, CRM, and features." />

      {/* FAQ Items */}
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((f, index) => (
          <div
            key={f.q}
            className="rounded-xl border border-gray-200 bg-gray-50/70 shadow-sm hover:shadow-md transition"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <h3 className="text-lg font-medium text-gray-900">{f.q}</h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              ref={(el) => {
                refs.current[index] = el;
              }}
              style={{
                maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
              }}
              className="overflow-hidden transition-all duration-300"
            >
              <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                {f.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import CalButton from "./CalButton";

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/70 via-primary to-primary/80 text-white overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
          Every day you delay,{" "}
          <span className="text-neutral-900">another student</span> chooses your
          competitor.
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-10">
          Get early access to our{" "}
          <span className="font-semibold text-white">student CRM + dashboards</span>  
          and stop losing enrollments.
        </p>

        <div className="flex justify-center">
          <CalButton label="🚀 Book a meet now" />
        </div>
      </div>
    </section>
  );
}

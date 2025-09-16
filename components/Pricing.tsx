const plans = [
  {
    title: "Starter",
    price: "$19/mo",
    features: ["Basic features", "Email support", "1 project"],
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: ["All Starter features", "Priority support", "10 projects"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["All Pro features", "Dedicated manager", "Unlimited projects"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">Choose Your Plan</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`p-8 border rounded-xl shadow ${
              plan.highlight ? "bg-blue-600 text-white scale-105" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="mt-4 text-3xl font-bold">{plan.price}</p>
            <ul className="mt-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>✅ {f}</li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 inline-block px-6 py-3 rounded-lg font-semibold ${
                plan.highlight
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

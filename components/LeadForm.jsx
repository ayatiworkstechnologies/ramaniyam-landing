import LeadFormComponent from "./Form";

export default function LeadSection() {
  return (
    <section
      id="lead"
      className="py-20 bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <span className="inline-block text-orange-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Enquire Now
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get Price Details & Brochure
          </h2>

          <p className="text-gray-300 mb-6 max-w-lg">
            Share your details and our property expert will contact you
            with complete pricing, floor plans, and site visit options.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>✔ Instant callback</li>
            <li>✔ Official price details</li>
            <li>✔ No spam, 100% privacy</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <LeadFormComponent />
      </div>
    </section>
  );
}

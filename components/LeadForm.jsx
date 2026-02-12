import LeadFormComponent from "./Form";

export default function LeadSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className=" p-10 lg:p-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* Accent Line */}
            <div
              className="absolute left-0 top-0 h-full w-1 rounded-full"
              style={{ backgroundColor: "var(--primary)" }}
            />

            <div className="pl-6">
              <span
                className="inline-block font-semibold uppercase tracking-widest text-sm mb-4"
                style={{ color: "var(--primary)" }}
              >
                Enquire Now
              </span>

              <h2 className="mb-6 leading-tight text-gray-900">
                Get Price Details & Brochure
              </h2>

              <p className="text-gray-600 mb-10 max-w-xl font-medium">
                Share your details and our property expert will connect with you
                to provide official pricing, floor plans, and site visit
                assistance for your preferred project.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div id="lead" className="">
            <LeadFormComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

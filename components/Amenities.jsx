import {
  Car,
  ShieldCheck,
  Zap,
  Building,
  Leaf,
  Compass
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    {
      icon: Building,
      title: "Lift Access",
      desc: "High-speed elevators",
    },
    {
      icon: Zap,
      title: "Power Backup",
      desc: "Uninterrupted living",
    },
    {
      icon: Car,
      title: "Covered Parking",
      desc: "Safe & secure parking",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      desc: "Complete peace of mind",
    },
    {
      icon: Compass,
      title: "Vaastu Compliant",
      desc: "Traditionally aligned homes",
    },
    {
      icon: Leaf,
      title: "Green Living",
      desc: "Eco-friendly spaces",
    },
  ];

  return (
    <section
      id="amenities"
      className="section bg-gray-50"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold uppercase tracking-widest text-sm mb-4"
            style={{ color: "var(--primary)" }}
          >
            Lifestyle Amenities
          </span>

          <h2 className="mb-6">
            Thoughtfully Designed for Modern Living
          </h2>

          <p className="text-gray-600 font-medium">
            Every Ramaniyam residence is crafted with a focus on comfort,
            safety, and sustainable living, ensuring a refined lifestyle
            for you and your family.
          </p>
        </div>

        {/* AMENITIES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {amenities.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-10 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "rgba(147, 34, 35, 0.08)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

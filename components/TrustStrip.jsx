import { ShieldCheck, Home, Users, MapPin } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Home,
      title: "35+ Years",
      desc: "Trusted Experience",
    },
    {
      icon: ShieldCheck,
      title: "RERA Approved",
      desc: "100% Compliance",
    },
    {
      icon: Users,
      title: "3000+ Families",
      desc: "Happy Homeowners",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Across Chennai",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group bg-gray-50 rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full"
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
              <h4 className="text-lg font-bold mb-1">
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
    </section>
  );
}

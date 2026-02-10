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
      icon: <Building className="w-7 h-7 text-orange-500" />,
      title: "Lift Access",
      desc: "High-speed elevators",
    },
    {
      icon: <Zap className="w-7 h-7 text-orange-500" />,
      title: "Power Backup",
      desc: "Uninterrupted living",
    },
    {
      icon: <Car className="w-7 h-7 text-orange-500" />,
      title: "Covered Parking",
      desc: "Safe & secure parking",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-orange-500" />,
      title: "24/7 Security",
      desc: "Complete peace of mind",
    },
    {
      icon: <Compass className="w-7 h-7 text-orange-500" />,
      title: "Vaastu Compliant",
      desc: "Traditionally aligned homes",
    },
    {
      icon: <Leaf className="w-7 h-7 text-orange-500" />,
      title: "Green Living",
      desc: "Eco-friendly spaces",
    },
  ];

  return (
    <section
      id="amenities"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-orange-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Lifestyle
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Thoughtfully Designed Amenities
          </h2>
          <p className="text-gray-600">
            Every Ramaniyam home is built with comfort, safety,
            and modern living in mind.
          </p>
        </div>

        {/* AMENITIES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

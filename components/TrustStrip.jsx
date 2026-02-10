import { ShieldCheck, Home, Users, MapPin } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: <Home className="w-7 h-7 text-orange-500" />,
      title: "35+ Years",
      desc: "Trusted Experience",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-orange-500" />,
      title: "RERA Approved",
      desc: "100% Compliance",
    },
    {
      icon: <Users className="w-7 h-7 text-orange-500" />,
      title: "3000+ Families",
      desc: "Happy Homeowners",
    },
    {
      icon: <MapPin className="w-7 h-7 text-orange-500" />,
      title: "Prime Locations",
      desc: "Across Chennai",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

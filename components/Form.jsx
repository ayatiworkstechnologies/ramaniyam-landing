"use client";

import { useState } from "react";
import { getUniqueLocations } from "@/utils/getLocations";

export default function LeadFormComponent() {
  const locations = getUniqueLocations();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
      <h3 className="text-2xl font-bold mb-1 text-center">
        Request a Call Back
      </h3>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Fill the form & we’ll reach you shortly
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Mobile Number"
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        {/* 🔥 Dynamic Locations */}
        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        >
          <option value="">Interested Location</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="3"
          placeholder="Message (Optional)"
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        {status === "success" && (
          <p className="text-green-600 text-sm">
            ✅ Thank you! Our team will contact you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white py-3 rounded-xl font-semibold text-lg transition"
        >
          {loading ? "Submitting..." : "Get Details Now"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        🔒 We respect your privacy. No spam calls.
      </p>
    </div>
  );
}

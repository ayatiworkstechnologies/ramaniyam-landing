"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BrochureModal({ project, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          project: project.name,
          location: project.location,
          lead_type: "brochure",
          message: `Brochure requested for ${project.name}`,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      reset();

      setTimeout(() => {
        window.open(project.brochure, "_blank");
        onClose();
      }, 800);

    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-2">
          Download Brochure
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          {project.location} – {project.name}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* NAME */}
          <div>
            <input
              {...register("name", { required: "Full name is required" })}
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              {...register("phone", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Enter valid mobile number",
                },
              })}
              placeholder="Mobile Number"
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-600 text-sm">
              ✅ Brochure downloading...
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              ❌ Something went wrong.
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold"
            style={{ backgroundColor: "var(--primary)" }}
          >
            {loading ? "Processing..." : "Download Now"}
          </button>

        </form>
      </div>
    </div>
  );
}

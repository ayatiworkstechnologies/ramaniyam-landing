"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import projects from "@/data/projects";

export default function LeadFormComponent() {
  const {
    register,
    handleSubmit,
    setValue,
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
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleProjectChange = (e) => {
    const value = e.target.value;

    const selected = projects.find(
      (p) => `${p.location} - ${p.name}` === value
    );

    setValue("project", selected?.name || "");
    setValue("location", selected?.location || "");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10">
      <h3 className="text-2xl font-bold text-center mb-6">
        Request a Call Back
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
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

        {/* SINGLE PROJECT + LOCATION DROPDOWN */}
        <div>
          <select
            {...register("projectSelect", {
              required: "Please select a project",
            })}
            onChange={handleProjectChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="">Select Project Locations</option>
            {projects.map((proj, i) => (
              <option
                key={i}
                value={`${proj.location} - ${proj.name}`}
              >
                {proj.location} - {proj.name}
              </option>
            ))}
          </select>
          {errors.projectSelect && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectSelect.message}
            </p>
          )}
        </div>

        {/* Hidden Fields Sent to API */}
        <input type="hidden" {...register("project")} />
        <input type="hidden" {...register("location")} />

        {/* MESSAGE */}
        <textarea
          {...register("message")}
          rows="3"
          placeholder="Message (Optional)"
          className="w-full border rounded-xl px-4 py-3"
        />

        {/* STATUS */}
        {status === "success" && (
          <p className="text-green-600 text-sm text-center">
            ✅ Thank you! We will contact you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
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
          {loading ? "Submitting..." : "Get Details Now"}
        </button>
      </form>
    </div>
  );
}

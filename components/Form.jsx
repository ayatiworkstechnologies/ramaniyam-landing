"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
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

  // ==========================
  // SUBMIT HANDLER
  // ==========================
  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://campaign-ramaniyam.ayatiworks.com/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      reset();

      // Redirect after success
      setTimeout(() => {
        window.location.href = "/thank-you?type=general";
      }, 1200);

    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // PROJECT SELECT HANDLER
  // ==========================
  const handleProjectChange = (e) => {
    const value = e.target.value;

    const selected = projects.find(
      (p) => `${p.location} - ${p.name}` === value
    );

    setValue("project", selected?.name || "");
    setValue("location", selected?.location || "");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-lg mx-auto transition-all duration-300">

      <h3 className="text-2xl font-bold text-center mb-8">
        Request a Call Back
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* NAME */}
        <div>
          <div className="relative">
            {/* <FiUser className="absolute left-4 top-4 text-gray-400" /> */}
            <input
              {...register("name", { required: "Full name is required" })}
              placeholder="Full Name"
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <FiAlertCircle size={14} />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <div className="relative">
            {/* <FiMail className="absolute left-4 top-4 text-gray-400" /> */}
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <FiAlertCircle size={14} />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <div className="relative">
            {/* <FiPhone className="absolute left-4 top-4 text-gray-400" /> */}
            <input
              {...register("phone", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Enter valid mobile number",
                },
              })}
              placeholder="Mobile Number"
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <FiAlertCircle size={14} />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* PROJECT DROPDOWN */}
        <div>
          <select
            {...register("projectSelect", {
              required: "Please select a project",
            })}
            onChange={handleProjectChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"
          >
            <option value="">Select Project Location</option>
            {projects.map((proj, i) => (
              <option key={i} value={`${proj.location} - ${proj.name}`}>
                {proj.location} - {proj.name}
              </option>
            ))}
          </select>

          {errors.projectSelect && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
              <FiAlertCircle size={14} />
              {errors.projectSelect.message}
            </p>
          )}
        </div>

        {/* Hidden Fields */}
        <input type="hidden" {...register("project")} />
        <input type="hidden" {...register("location")} />
        <input type="hidden" value="general" {...register("lead_type")} />

        {/* MESSAGE */}
        <textarea
          {...register("message")}
          rows="3"
          placeholder="Message (Optional)"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"
        />

        {/* STATUS */}
        {status === "success" && (
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-xl border border-green-200 animate-pulse">
            <FiCheckCircle />
            Redirecting to confirmation page...
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl border border-red-200">
            <FiAlertCircle />
            Submission failed. Please try again.
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: "var(--primary)" }}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </span>
          ) : (
            <>
              <FiSend />
              Get Details Now
            </>
          )}
        </button>

      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiX,
  FiDownload,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

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
      const res = await fetch("https://campaign-ramaniyam.ayatiworks.com/api/lead.php", {
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

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      reset();

      // Redirect to thank you page with brochure link
      setTimeout(() => {
        window.location.href = `/thank-you?type=brochure&file=${encodeURIComponent(
          project.brochure
        )}`;
      }, 1200);

    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn">

      <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black transition"
        >
          <FiX size={20} />
        </button>

        {/* TITLE */}
        <h3 className="text-2xl font-bold mb-2 text-center">
          Download Brochure
        </h3>

        <p className="text-sm text-gray-500 mb-8 text-center">
          {project.location} – {project.name}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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

          {/* STATUS */}
          {status === "success" && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-xl border border-green-200 animate-pulse">
              <FiCheckCircle />
              Redirecting to download...
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl border border-red-200">
              <FiAlertCircle />
              Something went wrong. Please try again.
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
                Processing...
              </span>
            ) : (
              <>
                <FiDownload />
                Download Now
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

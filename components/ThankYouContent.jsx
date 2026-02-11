"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiCheckCircle, FiDownload, FiHome } from "react-icons/fi";

export default function ThankYouContent() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const file = searchParams.get("file");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center">

        <FiCheckCircle
          size={60}
          className="mx-auto text-green-500 mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-8">
          {type === "brochure"
            ? "Your brochure is ready to download."
            : "Our team will contact you shortly."}
        </p>

        {type === "brochure" && file && (
          <a
            href={file}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold mb-6"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <FiDownload />
            Download Brochure
          </a>
        )}

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <FiHome />
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}

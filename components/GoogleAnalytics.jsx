"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-X9BL4WSL2H";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // Fire page_view on every client-side route change
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

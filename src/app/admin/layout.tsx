"use client";

import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hide the main site navbar and footer when on admin pages
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    if (main) {
      main.style.padding = "0";
      main.style.margin = "0";
    }
    return () => {
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      if (main) {
        main.style.padding = "";
        main.style.margin = "";
      }
    };
  }, []);

  return <>{children}</>;
}

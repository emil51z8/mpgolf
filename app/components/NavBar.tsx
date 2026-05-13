"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Forside" },
    { href: "/Results", label: "Resultater" },
    { href: "/Sponsor", label: "Sponsor" },
    { href: "/About", label: "Om mig" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md relative z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href={"/"}>
          <h1 className="text-xl font-bold tracking-wide text-gray-700">
            Magnus Rud Petersen
          </h1>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-lg">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition duration-200 ${
                    pathname === href ? "text-blue-400" : "text-gray-700 hover:text-blue-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Burger knap — kun mobil */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mørkt overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col pt-20 px-8 gap-6 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Luk knap */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Luk menu"
        >
          ✕
        </button>

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Navigation</p>

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`text-xl font-semibold transition duration-200 ${
              pathname === href ? "text-blue-400" : "text-gray-700 hover:text-blue-400"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default NavBar;
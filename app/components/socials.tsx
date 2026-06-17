"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import egr from "../images/egr-logo.png";
import wagr from "../images/WAGR.png";

type Social = {
  alt: string;
  href: string;
  // enten et react-icon eller et billede (til EGR/WAGR)
  Icon?: React.ComponentType<{ className?: string }>;
  img?: typeof egr;
  brand: string; // farve til hover-accent
};

const socials: Social[] = [
  {
    alt: "Instagram",
    href: "https://www.instagram.com/_magnusrud_/",
    Icon: FaInstagram,
    brand: "#E1306C",
  },
  {
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589616546193",
    Icon: FaFacebookF,
    brand: "#1877F2",
  },
  {
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/magnus-rud-petersen-golf-901756321/",
    Icon: FaLinkedinIn,
    brand: "#0A66C2",
  },
  {
    alt: "Mail",
    href: "mailto:magnusrudpetersen03@gmail.com",
    Icon: FaEnvelope,
    brand: "#EA4335",
  },
  {
    alt: "Telefon",
    href: "tel:+4561132199",
    Icon: FaPhone,
    brand: "#22C55E",
  },
  {
    alt: "EGR",
    href: "https://www.europeangolfrankings.com/players/31122",
    img: egr,
    brand: "#0F766E",
  },
  {
    alt: "WAGR",
    href: "https://www.wagr.com/playerprofile/magnus-rud-petersen-44010",
    img: wagr,
    brand: "#1E3A8A",
  },
];

function Socials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-8 md:mt-10 px-4">
      {/* Pile - vises kun når der reelt er noget at scrolle til */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll til venstre"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 hidden sm:block"
        >
          <FaChevronLeft className="h-4 w-4 text-gray-700" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll til højre"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 hidden sm:block"
        >
          <FaChevronRight className="h-4 w-4 text-gray-700" />
        </button>
      )}

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-4 sm:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:[&>*]:first:ml-auto sm:[&>*]:last:mr-auto"
      >
        {socials.map(({ alt, href, Icon, img, brand }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--brand": brand } as React.CSSProperties}
            className="group relative flex h-40 sm:h-48 md:h-56 w-[calc((100vw-2rem-2rem)/2.5)] sm:w-44 md:w-48 flex-shrink-0 snap-start sm:snap-center flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-md ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[var(--brand)]"
          >
            <span className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gray-50 text-gray-700 transition-colors duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
              {Icon ? (
                <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              ) : img ? (
                <Image
                  src={img}
                  alt={alt}
                  width={48}
                  height={48}
                  className="h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                />
              ) : null}
            </span>
            <span className="text-sm sm:text-lg font-medium text-gray-700 group-hover:text-[var(--brand)]">
              {alt}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
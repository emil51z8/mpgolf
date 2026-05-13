import Image from "next/image";
import MP5 from "./images/MP5.jpeg";
import Socials from "./components/socials";
import Link from "next/link";
import SponsorBtn from "./components/sponsorBtn";

const packages = [
  {
    name: "Bronze",
    price: "2.500 kr.",
    color: "from-amber-700 to-amber-500",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    name: "Sølv",
    price: "6.000 kr.",
    color: "from-slate-500 to-slate-400",
    badge: "bg-slate-100 text-slate-700",
    highlight: true,
  },
  {
    name: "Guld",
    price: "12.000 kr.",
    color: "from-yellow-500 to-yellow-400",
    badge: "bg-yellow-100 text-yellow-800",
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero — kortere på mobil */}
      <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px]">
        <Image
          src={MP5}
          alt="Magnus billede 1"
          fill
          className="object-cover object-[center_46%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
            Magnus Rud Petersen
          </h1>
          <h2 className="text-white text-base sm:text-lg md:text-2xl mt-3 drop-shadow-md max-w-sm sm:max-w-none">
            Ung talentfuld golfspiller med store ambitioner
          </h2>
        </div>
      </div>

      {/* Socials — wrap på mobil */}
      <Socials />

      {/* Mini sponsorsektion */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Bliv sponsor
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed px-2">
            Støt min vej mod professionel golf og få din virksomhed eksponeret på baner i hele Danmark.
          </p>
        </div>

        {/* Mini pakkekort — 1 kolonne mobil, 3 på desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-gray-50 rounded-2xl shadow-lg overflow-hidden border-2 ${
                pkg.highlight ? "border-slate-400" : "border-transparent"
              }`}
            >
              <div className={`bg-gradient-to-r ${pkg.color} px-5 py-4 flex items-center justify-between`}>
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${pkg.badge}`}>
                  {pkg.name}
                </span>
                {pkg.highlight && (
                  <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Mest populær
                  </span>
                )}
              </div>
              <div className="px-5 py-4">
                <p className="text-xl sm:text-2xl font-bold text-gray-800">{pkg.price}</p>
                <p className="text-xs text-gray-400 mt-0.5">per år</p>
              </div>
            </div>
          ))}
        </div>

        <SponsorBtn />
      </div>

    </div>
  );
}

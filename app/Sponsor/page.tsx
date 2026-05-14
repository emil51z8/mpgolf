import Image from "next/image";
import MP4 from "../images/MP4.jpeg";

export default function Sponsors() {
  const packages = [
    {
      name: "Bronze",
      price: "5.000 kr.",
      period: "/ år",
      color: "from-amber-700 to-amber-500",
      border: "border-amber-400",
      badge: "bg-amber-100 text-amber-800",
      features: [
        "Fremhævet eksponering på mine facebook opslag - og på min hjemmeside",
      ],
      highlight: false,
    },
    {
      name: "Sølv",
      price: "10.000 kr.",
      period: "/ år",
      color: "from-slate-500 to-slate-400",
      border: "border-slate-400",
      badge: "bg-slate-100 text-slate-700",
      features: [
        "Invitation til årligt sponsorarrangement - 18 huller, mad & drikke (1-3 pers.)",
        "Fremhævet eksponering på mine facebook opslag - og på min hjemmeside",
      ],
      highlight: true,
    },
    {
      name: "Guld",
      price: "20.000 kr.",
      period: "/ år",
      color: "from-yellow-500 to-yellow-400",
      border: "border-yellow-400",
      badge: "bg-yellow-100 text-yellow-800",
      features: [
        "Logo på cap eller venstre ærme",
        "Én årlig konsultation vedrørende hvordan jeg kan hjælpe med ekstra branding af din virksomhed",
        "Invitation til årligt sponsorarrangement - 18 huller, mad & drikke (1-4 pers.)",
        "Fremhævet eksponering på mine facebook opslag - og på min hjemmeside",
      ],
      highlight: false,
    },
    {
      name: "🎉 Hovedsponsor 🎉",
      price: "50.000 kr.",
      period: "/ år",
      color: "from-blue-900 to-blue-700",
      border: "border-blue-400",
      badge: "bg-blue-100 text-blue-900",
      features: [
        "Logo på højre ærme",
        "Én årlig golfrunde\n med mig på Great Northern - mad & drikke efter runden samt tips og tricks undervejs (1-3 pers.)",
        "Én årlig konsultation vedrørende hvordan jeg kan hjælpe med ekstra branding af din virksomhed",
        "Invitation til årligt sponsorarrangement - 18 huller, mad & drikke (1-4 pers.)",
        "Fremhævet eksponering på mine facebook opslag - og på min hjemmeside",
        "Yderligere fordele kan aftales"
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro sektion: tekst + billede side om side */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Tekst */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bliv sponsor
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Støt min vej mod professionel golf og få din virksomhed eksponeret
              på baner i hele Danmark – og forhåbentlig snart internationalt.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Som sponsor kan du få eksponering på tøj og sociale medier, og du
              bliver en del af min rejse mod toppen af dansk og international
              golf.
            </p>
            <a
              href="mailto:magnusrudpetersen03@gmail.com"
              className="inline-block mt-6 bg-gray-800 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition"
            >
              Kontakt mig
            </a>
          </div>

          {/* Billede */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={MP4}
                alt="Magnus svinger golf"
                width={827}
                height={550}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Pakker */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Sponsorpakker
          </h2>

          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-gray-50 rounded-2xl shadow-xl flex flex-col overflow-hidden border-2 ${
                  pkg.highlight ? pkg.border : "border-transparent"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Mest populær
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${pkg.color} p-6`}>
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${pkg.badge}`}
                  >
                    {pkg.name}
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-white/80 mb-1 text-sm">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <ul className="space-y-4 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="leading-snug whitespace-pre-line">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-md px-8 py-6 text-center max-w-xl mx-auto">
            <p className="text-gray-500 text-sm mb-1">
              Ønsker du en skræddersyet aftale?
            </p>
            <p className="text-gray-800 font-semibold text-base mb-4">
              Kontakt mig direkte - så finder vi en løsning der passer til dig.
            </p>
            <div className="grid md:grid-cols-1 gap-4">
              <a
                href="mailto:magnusrudpetersen03@gmail.com"
                className="inline-block bg-blue-400 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition"
              >
                magnusrudpetersen03@gmail.com
              </a>
              <a
                href="tel:+4561132199"
                className="inline-block bg-blue-400 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition"
              >
                +45 61 13 21 99
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

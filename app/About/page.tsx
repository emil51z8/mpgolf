"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MP11 from "../images/MP11.jpeg";
import MP10 from "../images/MP10.jpeg";
import MP8 from "../images/MP8.jpeg";
import MP7 from "../images/MP7.jpeg";
import MP6 from "../images/MP6.jpeg";
import MP5 from "../images/MP5.jpeg";
import SponsorBtn from "../components/sponsorBtn";

const images = [MP8, MP6, MP10, MP7, MP11, MP5];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      setNext(nextIndex);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setAnimating(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Tekst boks */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Om mig
          </h1>

          <p className="text-gray-600 leading-relaxed space-y-4">
            Hej, jeg hedder Magnus Rud Petersen og er en 22-årig
            amatørgolfspiller fra Danmark med store drømme og ambitioner om at
            nå verdenstoppen inden for golfsporten.
            <br />
            <br />
            Til dagligt konkurrerer jeg på de danske amatørrangliste-turneringer
            og deltager løbende i udvalgte turneringer på Ecco Touren, hvor jeg
            måler mig med nogle af de bedste spillere i Skandinavien. Hver
            eneste dag bruger jeg timer på at finpudse mit spil - både teknisk
            og mentalt - fordi jeg ved at vejen til toppen kræver dedikation og
            disciplin uden kompromiser.
            <br />
            <br />
            Mit langsigtede mål er klart - at opnå kategori til DP World Tour
            inden 2030. Det er en ambition jeg tager seriøst, og som driver mig
            fremad hver dag. Jeg tror fuldt og fast på at jeg med den rette
            støtte og de rette rammer kan nå derhen.
            <br />
            <br />
            Som sponsor bliver du en del af den rejse. Du får ikke blot
            eksponering - du investerer i en spiller der arbejder hårdt hver dag
            for at nå sit mål, og som ønsker at tage sine sponsorer med hele
            vejen.
          </p>
        </div>

        {/* Slideshow container */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden">

          {/* Nuværende billede — står stille */}
          <Image
            src={images[current]}
            alt={`Magnus billede ${current + 1}`}
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className="object-cover"
            priority
          />

          {/* Næste billede — glider ind fra højre ovenpå */}
          {next !== null && (
            <Image
              src={images[next]}
              alt={`Magnus billede ${next + 1}`}
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              className="object-cover"
              style={{
                animation: animating ? "slideIn 0.7s ease-in-out forwards" : undefined,
              }}
            />
          )}

          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to   { transform: translateX(0%); }
            }
          `}</style>
        </div>
      </div>

      <div className="mt-8">
        <SponsorBtn />
      </div>
    </div>
  );
}
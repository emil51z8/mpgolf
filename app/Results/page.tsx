"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SponsorBtn from "../components/sponsorBtn";
import MP9 from "../images/MP9.jpeg";

const stats = [
  { label: "Best Rank", value: "2104" },
  { label: "Wins", value: "1" },
  { label: "Top 10 Finishes", value: "4" },
  { label: "Divisor", value: "7" },
  { label: "Applied Divisor", value: "8" },
  { label: "Counting Events", value: "7" },
];

const events = [
  { week: "15/2026", event: "Lubker Championship by Titleist",                        finish: 15, type: "All Ages", power: "48.8185", format: "S/P", divisor: 1, ptsAvg: "3.3478" },
  { week: "38/2025", event: "DGU Elite Tour Finale Herrer & Drenge",                  finish: 18, type: "All Ages", power: "55.9823", format: "S/P", divisor: 1, ptsAvg: "3.1594" },
  { week: "37/2025", event: "Esbjerg Open by Freja",                                  finish: 80, type: "Pro",      power: "216.9124", format: "S/P", divisor: 1, ptsAvg: "2.4322" },
  { week: "36/2025", event: "DM slagspil (Danish National Stroke Play Championship)", finish: 8,  type: "All Ages", power: "58.1890", format: "S/P", divisor: 1, ptsAvg: "4.1458" },
  { week: "33/2025", event: "DGU Elite Tour III Herrer – KGC Masters",                finish: 3,  type: "All Ages", power: "52.7422", format: "S/P", divisor: 1, ptsAvg: "5.5272" },
  { week: "28/2025", event: "Kronborg Masters",                                       finish: 4,  type: "All Ages", power: "18.0032", format: "S/P", divisor: 1, ptsAvg: "3.7950" },
  { week: "24/2025", event: "Dormy Elite Tour II Herrer – Wiibroe Cup",               finish: 1,  type: "All Ages", power: "34.5022", format: "S/P", divisor: 1, ptsAvg: "7.7405" },
];

function finishColor(finish: number) {
  if (finish === 1) return "text-yellow-500 font-semibold";
  if (finish <= 3) return "text-gray-700 font-semibold";
  if (finish <= 10) return "text-green-600 font-medium";
  return "text-gray-500";
}

export default function Results() {
  return (
    <section className="bg-white min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Intro: tekst + billede */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Resultater
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Her finder du mine turneringsresultater og WAGR-ranking. 
              Jeg deltager løbende i elite- og amatørturneringer i Danmark 
              og arbejder målrettet på at forbedre min verdensrangliste-placering.
            </p>
            <Link
              href="https://www.wagr.com/playerprofile/magnus-rud-petersen-44010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-gray-800 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition"
            >
              Se WAGR profil <ExternalLink size={14} />
            </Link>
          </div>

          <div className="relative w-full h-[400px] md:h-[460px] rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src={MP9}
              alt="Magnus med pokal"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">Statistics</h2>
            <span className="text-xs text-gray-400">Last 104 weeks</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-6 px-2 gap-1">
                <span className="text-2xl font-bold text-gray-800">{s.value}</span>
                <span className="text-[11px] text-gray-400 text-center leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Events tabel */}
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">Events</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full font-medium">
                Counting
              </span>
              <span className="text-xs text-gray-400">2025–2026</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-widest text-gray-400 border-b border-gray-200">
                  <th className="text-left px-6 py-3 font-normal">Week</th>
                  <th className="text-left px-4 py-3 font-normal hidden sm:table-cell">Ctry</th>
                  <th className="text-left px-4 py-3 font-normal">Event</th>
                  <th className="text-right px-4 py-3 font-normal">Finish</th>
                  <th className="text-left px-4 py-3 font-normal hidden md:table-cell">Event Type</th>
                  <th className="text-right px-4 py-3 font-normal hidden lg:table-cell">Power</th>
                  <th className="text-center px-4 py-3 font-normal hidden lg:table-cell">Format</th>
                  <th className="text-center px-4 py-3 font-normal hidden lg:table-cell">Divisor</th>
                  <th className="text-right px-6 py-3 font-normal">Pts Avg</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-100 transition"
                  >
                    <td className="px-6 py-3.5 text-gray-400 text-xs whitespace-nowrap">{e.week}</td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">🇩🇰</td>
                    <td className="px-4 py-3.5 text-gray-700 max-w-[200px] truncate">{e.event}</td>
                    <td className={`px-4 py-3.5 text-right ${finishColor(e.finish)}`}>{e.finish}</td>
                    <td className="px-4 py-3.5 text-gray-400 text-xs hidden md:table-cell">{e.type}</td>
                    <td className="px-4 py-3.5 text-right text-gray-400 text-xs hidden lg:table-cell font-mono">{e.power}</td>
                    <td className="px-4 py-3.5 text-center text-gray-400 text-xs hidden lg:table-cell">{e.format}</td>
                    <td className="px-4 py-3.5 text-center text-gray-400 hidden lg:table-cell">{e.divisor}</td>
                    <td className="px-6 py-3.5 text-right text-gray-600 font-mono text-xs">{e.ptsAvg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400">
            Displaying 1–{events.length} of {events.length}
          </div>
        </div>

        {/* Farveforklaring */}
        <div className="flex items-center gap-6 text-xs text-gray-400 px-1">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" /> 1. plads</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-600 inline-block" /> Top 3</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Top 10</span>
        </div>

        <SponsorBtn />
      </div>
    </section>
  );
}

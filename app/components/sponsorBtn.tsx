import Link from "next/link";

function SponsorBtn() {
    return (
      <div className="flex justify-center mt-10 mb-16 px-4">
        <Link
          href="/Sponsor"
          className="bg-gray-800 text-white text-xl font-semibold px-12 py-5 rounded-2xl shadow-xl hover:bg-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Se sponsorpakker
        </Link>
      </div>
    )
}

export default SponsorBtn;
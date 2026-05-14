import Image from "next/image";
import MP8 from "../images/MP8.jpeg"
import SponsorBtn from "../components/sponsorBtn";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-12">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Tekst boks */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Om mig
          </h1>

          <p className="text-gray-600 leading-relaxed space-y-4">
            Hej! Jeg er en golfamateur med store ambitioner inden for golfsporten. 
            Jeg har dedikeret mig til at udvikle mine færdigheder og håber på at kunne konkurrere på højeste niveau.

            <br /><br />

            Mit mål er at blive en professionel golfspiller og repræsentere Danmark internationalt. 
            Jeg træner intensivt flere gange ugentligt og deltager regelmæssigt i turneringer for at forbedre min teknik og mentale styrke.

            <br /><br />

            Mit handicap er konstant faldende, og jeg har allerede opnået flere gode placeringer i nationale og regionale turneringer. 
            Jeg søger nu sponsorbindinger, der kan støtte min karriere og give mig mulighed for at fokusere fuldt ud på golfsporten.

            <br /><br />

            Med den rette sponsorstøtte tror jeg, at jeg kan nå internationale forventninger og skabe en succesfuld professionel karriere.
          </p>
        </div>

        {/* Billede */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={MP8}
            alt="Magnus billede"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            className="object-cover rounded-2xl shadow-2xl"
            loading="eager"
          />
        </div>

      </div>
      <div className="mt-8">
        <SponsorBtn />
      </div>
    </div>
  );
}
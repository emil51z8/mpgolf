import Image from "next/image";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import egr from "../images/egr-logo.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import wagr from "../images/WAGR.png";

const socials = [
  { src: instagram, alt: "Instagram", href: "https://www.instagram.com/_magnusrud_/" },
  { src: facebook,  alt: "Facebook",  href: "https://www.facebook.com/profile.php?id=61589616546193" },
  { src: egr,       alt: "EGR",       href: "https://www.europeangolfrankings.com/players/31122" },
  { src: linkedin,  alt: "LinkedIn",  href: "https://www.linkedin.com/in/magnus-rud-petersen-golf-901756321/" },
  { src: mail,      alt: "Mail",      href: "mailto:magnusrudpetersen03@gmail.com" },
  { src: phone,     alt: "Telefon",   href: "tel:+4561132199" },
  { src: wagr,      alt: "WAGR",      href: "https://www.wagr.com/playerprofile/magnus-rud-petersen-44010" },
];

function Socials() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center mt-8 md:mt-10 px-4">
      {socials.map(({ src, alt, href }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 sm:p-3 rounded-full shadow-lg ring-2 ring-gray-200 hover:scale-110 hover:shadow-xl transition duration-300"
        >
          <Image
            src={src}
            alt={alt}
            width={120}
            height={120}
            className="rounded-full object-contain w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
        </a>
      ))}
    </div>
  );
}

export default Socials;

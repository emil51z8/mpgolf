function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Navn / Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Magnus Rud Petersen</h2>
          <p className="text-sm text-gray-500">
            Ambitiøs golfspiller med fokus på udvikling og resultater
          </p>
        </div>

        {/* Klub */}
        <div>
          <h3 className="font-semibold mb-2">Klub</h3>
          <p className="text-gray-600">Næstved Golfklub</p>
          {/*https://www.naestvedgolf.dk/klubben/ */}
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-semibold mb-2">Kontakt</h3>
          <a
            href="mailto:magnusrudpetersen03@gmail.com"
            className="block text-gray-600 hover:text-gray-900 transition"
          >
            magnusrudpetersen03@gmail.com
          </a>
          <a
            href="tel:+4561132199"
            className="block text-gray-600 hover:text-gray-900 transition"
          >
            +45 61 13 21 99
          </a>
        </div>
      </div>

      {/* Bund linje */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} – Alle rettigheder forbeholdes
      </div>
    </footer>
  );
}

export default Footer;

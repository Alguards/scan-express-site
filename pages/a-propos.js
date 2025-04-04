// pages/a-propos.js
import Header from "../components/Header";
import Head from "next/head";

export default function APropos() {
  return (
    <>
      <Head>
        <title>À Propos - Altguards Security</title>
      </Head>
      <div className="min-h-screen bg-white text-gray-800">
        <Header />

        <section className="px-4 md:px-6 py-12 md:py-20 text-center bg-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de nous</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
            Altguards Security est spécialisé dans la protection et l'audit de votre identité numérique.
          </p>
        </section>

        <section className="px-4 md:px-6 py-12 md:py-20 bg-white">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-gray-600">
              Nous offrons des solutions pratiques et efficaces adaptées aux besoins spécifiques des PME et particuliers, avec une approche axée sur la transparence, la discrétion et l'efficacité.
            </p>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">
          © 2025 Altguards Security. Tous droits réservés. — contact@altguards.io
        </footer>
      </div>
    </>
  );
}

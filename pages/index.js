// pages/index.js
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800"
    >
      {/* Header */}
      <header className="relative px-6 py-6 bg-black text-white">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
	<img src={`${prefix}/altguards_logo.png`} alt="Altguards Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold">Altguards Security</h1>
          </div>
          <nav className="space-x-4">
            <a href="#offres" className="hover:underline">Offres</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link href="/a-propos">
              <span className="hover:underline cursor-pointer">À propos</span>
            </Link>
          </nav>
        </div>
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url('${prefix}/altguards_logo.png')` }}
        ></div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="px-6 py-20 text-center bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-4">Votre identité numérique est exposée</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Scan Express vous permet de découvrir ce que le web dit de vous (ou d’un tiers) et d’agir
          immédiatement. Rapide, discret et efficace.
        </p>
        <a
          href="#offres"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-900 transition"
        >
          Obtenez votre audit
        </a>
      </motion.section>

      {/* Offres */}
      <section id="offres" className="px-6 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Nos Offres</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: '🔍',
              title: 'Basique',
              desc: 'Scan simple : nom, email, réseaux sociaux',
              price: '150€'
            },
            {
              icon: '📋',
              title: 'Standard',
              desc: 'Scan + recommandations personnalisées',
              price: '220€'
            },
            {
              icon: '🛡️',
              title: 'Premium',
              desc: 'Scan + actions de remédiation incluses',
              price: '320€+'
            }
          ].map((offer, idx) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.4 }}
              className="border rounded-2xl p-6 bg-gray-50 shadow text-center"
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{offer.title}</h4>
              <p className="mb-4 text-gray-600">{offer.desc}</p>
              <p className="text-2xl font-bold mb-4">{offer.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded-xl w-full">Commander</button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`${prefix}/rapport-exemple.pdf`}
            className="inline-block text-sm underline text-gray-600 hover:text-black"
            download
          >
            📄 Télécharger un exemple de rapport
          </a>
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-6 py-20 bg-gray-100"
      >
        <h3 className="text-3xl font-bold text-center mb-10">Contact</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl p-3 w-full"
          />
          <textarea
            placeholder="Votre message..."
            rows="5"
            className="border rounded-xl p-3 w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900"
          >
            Envoyer
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Altguards Security. Tous droits réservés. — contact@altguards.io
      </footer>
    </motion.div>
  );
}

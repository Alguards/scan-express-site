// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-800"
    >
      {/* Header */}
      <header className="relative px-4 md:px-6 py-6 bg-black text-white">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-4">
          <div className="flex items-center space-x-4">
            <Image
              src={`${prefix}/altguards_logo.png`}
              alt="Altguards Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold">Altguards Security</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <a href="#offres" className="hover:underline">Offres</a>
            <Link href="/pme" className="hover:underline">PME</Link>
            <Link href="/particuliers" className="hover:underline">Particuliers</Link>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link href="/a-propos" className="hover:underline">À propos</Link>
          </nav>
        </div>
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url('${prefix}/altguards_logo.png')` }}
        ></div>
      </header>

      {/* Hero */}
      <motion.section
        className="px-6 py-20 text-center bg-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Votre identité numérique est exposée</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Scan Express vous permet de découvrir ce que le web dit de vous (ou d’un tiers) et d’agir immédiatement. Rapide, discret et efficace.
        </p>
        <a
          href="#offres"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-900 transition"
        >
          Obtenez votre audit
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Altguards Security. Tous droits réservés — contact@altguards.io
      </footer>
    </motion.div>
  )
}


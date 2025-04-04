// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
            <Image
              src={`${prefix}/altguards_logo.png`}
              alt="Altguards Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold">Altguards Security</h1>
          </div>
          <nav className="space-x-4">
            <Link href="#offres" className="hover:underline">
              Offres
            </Link>
            <Link href="/pme" className="hover:underline">
              PME
            </Link>
            <Link href="/particuliers" className="hover:underline">
              Particuliers
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/a-propos" className="hover:underline">
              À propos
            </Link>
          </nav>
        </div>
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url('${prefix}/altguards_logo.png')` }}
        ></div>
      </header>

      {/* Hero */}
      <motion.section>
        {/* Le contenu du Hero continuera ici */}
      </motion.section>
    </motion.div>
  );
}

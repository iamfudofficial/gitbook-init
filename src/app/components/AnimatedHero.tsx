"use client";
import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[600px] py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/ChatGPT Image 29. Apr. 2025, 12_15_31.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#223a5e]/70" aria-hidden="true"></div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_4px_24px_rgba(20,20,40,0.85)]"
        >
          Arbeiten, wo du gebraucht wirst.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-lg md:text-2xl text-white/90 font-medium"
        >
          Finde schnell deinen neuen Job – einfach bewerben, schnell starten.
        </motion.p>
        <motion.a
          href="/jobs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.07, boxShadow: "0 0 32px #e1006e66" }}
          className="inline-block bg-[#e1006e] text-white font-bold px-10 py-4 rounded-full shadow-xl border-2 border-[#e1006e] transition text-lg md:text-2xl hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-[#e1006e]/40 relative overflow-hidden"
        >
          <span className="relative z-10">Jetzt bewerben</span>
          <span className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-full shimmer"></span>
        </motion.a>
      </div>
      <style jsx>{`
        .shimmer {
          background: linear-gradient(120deg, transparent 30%, #fff6 50%, transparent 70%);
          opacity: 0.7;
          transform: translateX(-100%);
          animation: shimmer-move 2.5s infinite;
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

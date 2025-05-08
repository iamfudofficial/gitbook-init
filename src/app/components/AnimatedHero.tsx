"use client";
import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[480px] md:min-h-[700px] py-24 px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/ChatGPT Image 29. Apr. 2025, 12_15_31.png')"
      }}
    >
      {/* Layered Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply" />
        <div className="noise-bg" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] rounded-full blur-3xl opacity-50 animated-gradient" style={{zIndex:2}} />
      </div>
      {/* Glassmorphismus Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center glass px-8 py-12 md:px-16 md:py-16 shadow-magenta"
        style={{maxWidth:'650px'}}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-secondary drop-shadow-[0_4px_24px_rgba(20,20,40,0.85)] mb-3 tracking-tight"
          style={{fontFamily:'var(--font-geist-sans), Inter, Arial'}}
        >
          Arbeiten, wo du gebraucht wirst.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-xl md:text-2xl text-dark/90 font-medium"
        >
          Finde schnell deinen neuen Job – einfach bewerben, schnell starten.
        </motion.p>
        <motion.a
          href="/jobs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.7, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.09, boxShadow: "0 0 32px #e1006e99", backgroundColor: "#e1006e", color: "#fff" }}
          className="inline-block bg-magenta text-white font-bold px-12 py-4 rounded-full shadow-magenta border-2 border-magenta transition text-lg md:text-2xl hover:scale-105 hover:shadow-magenta focus:outline-none focus:ring-4 focus:ring-magenta/40 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg width='26' height='26' viewBox='0 0 24 24' fill='none' className='inline-block -ml-2'><path d='M5 12h14M13 6l6 6-6 6' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/></svg>
            Jetzt bewerben
          </span>
          <span className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-full shimmer group-hover:opacity-100" />
        </motion.a>
      </motion.div>
      <style jsx>{`
        .shimmer {
          background: linear-gradient(120deg, transparent 30%, #fff6 50%, transparent 70%);
          opacity: 0.7;
          transform: translateX(-100%);
          animation: shimmer-move 2.5s infinite;
          transition: opacity .3s;
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

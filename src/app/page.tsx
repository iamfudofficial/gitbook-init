"use client";
import Image from "next/image";
import AnimatedHero from "./components/AnimatedHero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans">

      {/* HERO SECTION */}
      {/* HEADER */}
      <header className="w-full bg-white flex justify-between items-center py-3 px-2 sm:py-4 sm:px-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-2 sm:gap-3">
  <Image src="/logo3.png" alt="Fibertexx Logo" width={80} height={80} className="h-14 w-auto sm:h-20" />
          <Image src="/logo3.png" alt="Fibertexx Logo" width={110} height={110} className="h-20 w-auto" />
        </div>
        <nav className="hidden md:flex gap-6 sm:gap-8 text-[#223a5e] font-medium text-sm sm:text-base">
          <a href="/jobs" className="hover:text-[#e1006e] transition">Unsere Jobangebote</a>
          <a href="#about" className="hover:text-[#e1006e] transition">Über uns</a>
          <a href="#kontakt" className="hover:text-[#e1006e] transition">Kontakt</a>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden">
          {/* Simple mobile menu: show/hide on click (expandable for real menu if gewünscht) */}
          <details>
            <summary className="cursor-pointer text-[#223a5e] font-bold">Menü</summary>
            <div className="flex flex-col bg-white rounded shadow mt-2 p-4 absolute left-0 right-0 mx-2 min-w-[90vw] border border-gray-200 z-30">
              <a href="#jobs" className="py-2 px-3 hover:text-[#e1006e]">Unsere Jobangebote</a>
              <a href="#about" className="py-2 px-3 hover:text-[#e1006e]">Über uns</a>
              <a href="#kontakt" className="py-2 px-3 hover:text-[#e1006e]">Kontakt</a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO SECTION */}
      <AnimatedHero />

      {/* FEATURES SECTION */}
      <motion.section id="jobs" className="py-8 sm:py-12 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
        >
        <motion.h2
          className="text-2xl font-bold mb-8 text-[#e1006e]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Was uns besonders macht</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[{
            icon: "€", text: "Faire Bezahlung"
          }, {
            icon: "⏱️", text: "Schneller Start\nin 7 Tagen"
          }, {
            icon: "🔄", text: "Flexible Einsätze"
          }, {
            icon: "👤", text: "Persönliche Betreuung"
          }].map((item, i) => (
            <motion.div
              key={item.text}
              className="flex flex-col items-center w-full sm:w-40 text-[#223a5e]"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <span className="text-[#e1006e] text-4xl mb-2">{item.icon}</span>
              <span className="font-semibold whitespace-pre-line text-base sm:text-lg">{item.text}</span>
              <span className="font-semibold whitespace-pre-line">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-8 sm:py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8 text-[#e1006e]">So einfach geht’s</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-[#223a5e]">
          <div className="flex flex-col items-center">
            <span className="text-[#e1006e] text-3xl mb-2">1</span>
            <span>Bewerben</span>
          </div>
          <span className="text-gray-400 text-2xl">→</span>
          <div className="flex flex-col items-center">
            <span className="text-[#e1006e] text-3xl mb-2">2</span>
            <span>Kennenlernen</span>
          </div>
          <span className="text-gray-400 text-2xl">→</span>
          <div className="flex flex-col items-center">
            <span className="text-[#e1006e] text-3xl mb-2">3</span>
            <span>Job starten</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-4">
          <div className="bg-gray-100 rounded-lg p-4 text-left text-[#223a5e]">
            <span className="font-bold">Staplerfahrer (m/w/d)</span><br />Musterstadt
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-left text-[#223a5e]">
            <span className="font-bold">Produktionshelfer</span><br />Musterstadt
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-left text-[#223a5e]">
            <span className="font-bold">Lagerlogistik (m/w/d)</span><br />Musterstadt
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-left text-[#223a5e]">
            <span className="font-bold">Maschinenbediener</span><br />Musterstadt
          </div>
        </div>
        <a href="/jobs" className="inline-block mt-4 bg-[#e1006e] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-pink-700 border-2 border-[#e1006e] transition">Mehr Jobs</a>
      </section>

      {/* TESTIMONIAL SECTION */}
      <motion.section className="py-8 sm:py-12 bg-[#e1006e] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center gap-4 max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <Image src="/istockphoto-1045886560-612x612.jpg" alt="Mitarbeiter Testimonial" width={96} height={96} className="rounded-full border-4 border-white mx-auto hover:scale-105 transition-transform duration-300" />
          </motion.div>
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >Unsere Mitarbeiter sagen</motion.h3>
          <motion.blockquote
            className="italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dank Fibertexx habe ich endlich einen Job gefunden, der zu mir passt.&quot;<br />
            <motion.span
              className="not-italic font-semibold block mt-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{
                background: "linear-gradient(90deg,#fff 60%,#f7d8e6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >Maximilian, 24</motion.span>
          </motion.blockquote>
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section id="about" className="py-10 sm:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
          {/* Bild links */}
          <motion.div
            className="flex-1 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <img src="/ChatGPT Image 29. Apr. 2025, 12_42_55.png" alt="Fibertexx Teamfoto" className="w-72 h-96 object-cover rounded-2xl shadow-lg bg-gray-50" />
          </motion.div>
          {/* Text rechts */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.2 }}
          >
            <motion.div
              className="bg-gray-50 rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#e1006e] mb-3 sm:mb-4">Wir stellen uns kurz vor</h2>
              <p className="text-base sm:text-lg text-[#223a5e] mb-2 sm:mb-3">Die Fibertexx Personalmanagement GmbH wurde im Jahr 2008 gegründet und ist nicht nur im Besitz der von der Regionaldirektion Nürnberg erteilten unbefristeten Arbeitnehmerüberlassung, sondern verfügt auch über ein Team, welches mehr als 15 Jahre Erfahrung vorzuweisen hat.</p>
              <p className="text-base sm:text-lg text-[#223a5e]">Nachdem im Jahr 2013 die Niederlassung in Augsburg eröffnet wurde, folgte im Jahr 2015 eine weitere Niederlassung in Dillingen an der Donau.</p>
            </motion.div>
            <motion.div className="mb-4 sm:mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#223a5e] mb-3 sm:mb-4">Fibertexx – unsere Ansprüche</h3>
              <ol className="space-y-6">
                {[1,2,3,4,5,6].map((num, idx) => (
                  <motion.li
                    key={num}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">{num}</span>
                    <span className="text-[#223a5e] text-base">
                      {[
                        "Ihre Geschäftsbedürfnisse analysieren, verstehen und motivierte Mitarbeiter/-innen mit dem richtigen Know-how zusammenbringen",
                        "Ein strategischer Partner an Ihrer Seite zu sein, mit einer auf Sie abgestimmten und einzigartigen Konzeptlösung",
                        "Erhaltung und Steigerung Ihrer Wettbewerbsfähigkeit durch Organisation und Koordination Ihrer Mitarbeiter",
                        "Vermittlung motivierter Mitarbeiter, die vollen Einsatz und Leistung für Ihr Unternehmen bringen",
                        "Hohe Übereinstimmung zwischen Ihrer Stellenanforderung und dem Qualifikationsprofil",
                        "Ein fairer und ehrlicher Arbeitgeber für unsere Mitarbeiter und Mitarbeiterinnen sein"
                      ][idx]}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* BENEFITS SECTION */}
      <motion.section className="py-8 sm:py-12 bg-gray-50 max-w-5xl mx-auto px-2 sm:px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Vorteile für Kunden */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-start border-t-4 border-[#e1006e]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#e1006e] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Ihre Vorteile als unser Kunde
            </h2>
            <ul className="space-y-3 text-[#223a5e]">
              {[
                "Ein Team mit mehr als 15-jähriger Erfahrung im Bereich Arbeitnehmerüberlassung",
                "Professionelles Arbeiten mit kompetenten Ansprechpartnern vor Ort",
                "24 Stunden Rufbereitschaft ermöglichen eine optimale und qualifizierte Betreuung",
                "Flächendeckende und niederlassungsübergreifende Zusammenarbeit",
                "Unbefristete Arbeitnehmerüberlassung erteilt durch die Regionaldirektion Nürnberg",
                "Schnelle und qualifizierte Lösungen für die Abdeckung von Personalanforderungen",
                "Geringe Einarbeitungszeit durch erfahrene und hochqualifizierte Mitarbeiter",
                "Faire und transparente Preisgestaltung",
                "Spezifische Auswahl unserer Mitarbeiter/innen in Abstimmung auf Ihr Unternehmen"
              ].map((text, idx) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.07 }}
                >
                  <span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vorteile für Mitarbeiter */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-start border-t-4 border-[#223a5e]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-[#223a5e] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Ihre Vorteile als Mitarbeiter von Fibertexx
            </h2>
            <ul className="space-y-3 text-[#223a5e]">
              {[
                "Unbefristete Arbeitsverträge",
                "Umfassende, faire und ehrliche Betreuung",
                "Hohe Übernahmequoten bei unseren Kundenbetrieben"
              ].map((text, idx) => (
                <motion.li
                  key={text}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.07 }}
                >
                  <span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* INDUSTRIES SECTION */}
      <section className="py-8 sm:py-12 bg-gray-50 max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-[#e1006e] mb-8 text-center">Fibertexx vermittelt hauptsächlich in folgenden Branchen</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* Flugzeug Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 12L3 9.5v-2l7.5 1.5V3.5a1.5 1.5 0 013 0v5.5L21 7.5v2l-7.5 2.5v6.5a1.5 1.5 0 01-3 0v-6.5z" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Luft und Raumfahrt</h4>
            <p className="text-xs text-gray-500">Fertigung, Entwicklung, Wartung, Qualitätssicherung</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* Zahnrad Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.573 1.01c.8-.522 1.846.282 1.523 1.15a1.724 1.724 0 001.01 2.573c.921.3.921 1.603 0 1.902a1.724 1.724 0 00-1.01 2.573c.323.868-.723 1.672-1.523 1.15a1.724 1.724 0 00-2.573 1.01c-.3.921-1.603.921-1.902 0a1.724 1.724 0 00-2.573-1.01c-.8.522-1.846-.282-1.523-1.15a1.724 1.724 0 00-1.01-2.573c-.921-.3-.921-1.603 0-1.902a1.724 1.724 0 001.01-2.573c-.323-.868.723-1.672 1.523-1.15a1.724 1.724 0 002.573-1.01z" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Industrie und Technik</h4>
            <p className="text-xs text-gray-500">Produktion, Maschinenbau, Instandhaltung</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* Euro Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9H9m8 6H9m6-9a9 9 0 11-6 16.32" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Finanzen und Büro</h4>
            <p className="text-xs text-gray-500">Buchhaltung, Verwaltung, Assistenz, Controlling</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* Herz Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Medizinischer Bereich</h4>
            <p className="text-xs text-gray-500">Pflege, Labor, Verwaltung, Praxisassistenz</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* LKW Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H6a1 1 0 00-1 1v10m8 0h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2m0 7h-2m0 0V6m0 10v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Lager und Logistik</h4>
            <p className="text-xs text-gray-500">Transport, Kommissionierung, Versand, Lagerleitung</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:shadow-2xl transition group">
            <span className="mb-3">
              {/* Werkzeug Icon */}
              <svg className="w-10 h-10 text-[#e1006e] group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 01-3.536 3.536L4.93 20.07a2 2 0 002.829 2.829l10.607-10.607a2.5 2.5 0 01-3.536-3.536z" /></svg>
            </span>
            <h4 className="font-semibold text-[#e1006e] text-lg mb-1">Handwerk</h4>
            <p className="text-xs text-gray-500">Bau, Montage, Elektrik, Sanitär, Maler, Schreiner</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontakt" className="bg-[#e1006e] text-white pt-8 sm:pt-12 pb-6 mt-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">Unsere Standorte & Kontakt</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 border-b border-[#ff5bb0] pb-8">
            {/* Dillingen */}
            <div className="bg-[#e1006e]/80 rounded-lg p-6 shadow-md flex flex-col gap-2 border border-[#ff5bb0]">
              <h3 className="font-semibold text-lg mb-1">Dillingen a. d. Donau <span className='text-xs'>(Zentrale)</span></h3>
              <div className="text-sm leading-relaxed">
                Rosenstraße 4<br />89407 Dillingen
              </div>
              <div className="mt-2">
                <span className="font-medium">Tel.:</span> <a href="tel:090717296630" className="underline hover:text-[#ff5bb0]">09071 729 66 30</a><br />
                <span className="font-medium">Fax.:</span> 09071 729 66 35
              </div>
              <div>
                <span className="font-medium">E-Mail:</span> <a href="mailto:dillingen@fibertexx.de" className="underline hover:text-[#ff5bb0]">dillingen@fibertexx.de</a>
              </div>
              <div className="mt-2 text-xs text-gray-100">Ansprechpartner: Michael Karmann</div>
            </div>
            {/* Augsburg */}
            <div className="bg-[#e1006e]/80 rounded-lg p-6 shadow-md flex flex-col gap-2 border border-[#ff5bb0]">
              <h3 className="font-semibold text-lg mb-1">Augsburg</h3>
              <div className="text-sm leading-relaxed">
                Ulmer Straße 160<br />86156 Augsburg
              </div>
              <div className="mt-2">
                <span className="font-medium">Tel.:</span> <a href="tel:082144427012" className="underline hover:text-[#ff5bb0]">0821 444 270 12</a><br />
                <span className="font-medium">Fax.:</span> 0821 444 270 10
              </div>
              <div>
                <span className="font-medium">E-Mail:</span> <a href="mailto:augsburg@fibertexx.de" className="underline hover:text-[#ff5bb0]">augsburg@fibertexx.de</a>
              </div>
              <div className="mt-2 text-xs text-gray-100">Ansprechpartner: Michael Karmann</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 pb-4 border-b border-[#ff5bb0] mt-2">
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-1 text-base">Öffnungszeiten</h3>
              <p className="text-sm">Montag-Donnerstag: 8-17 Uhr<br />Freitag: 8-14 Uhr</p>
            </div>
            <div className="mt-8 text-sm text-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                Handelsregister Augsburg HRB 23793<br />Umsatzsteuer-Identifikationsnummer DE 262908715
              </div>
              <div>
                <a href="/impressum" className="underline hover:text-[#ff5bb0]">Impressum</a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-100">
            copyright &copy; 2014 Fibertexx Personalmanagement GmbH. | <a href="#impressum" className="underline text-white hover:text-[#ff5bb0]">Impressum</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

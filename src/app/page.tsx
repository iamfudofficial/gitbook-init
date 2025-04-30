import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* HERO SECTION */}
      {/* HEADER */}
      <header className="w-full bg-white flex justify-between items-center py-4 px-4 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Image src="/logo3.png" alt="Fibertexx Logo" width={70} height={70} className="h-12 w-auto" />
          <span className="font-bold text-[#223a5e] text-lg tracking-wide">Fibertexx</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[#223a5e] font-medium text-base">
          <a href="/jobs" className="hover:text-[#e1006e] transition">Unsere Jobangebote</a>
          <a href="#about" className="hover:text-[#e1006e] transition">Über uns</a>
          <a href="#kontakt" className="hover:text-[#e1006e] transition">Kontakt</a>
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden">
          {/* Simple mobile menu: show/hide on click (expandable for real menu if gewünscht) */}
          <details>
            <summary className="cursor-pointer text-[#223a5e] font-bold">Menü</summary>
            <div className="flex flex-col bg-white rounded shadow mt-2 p-2 absolute right-4 top-16 min-w-[160px] border border-gray-200 z-30">
              <a href="#jobs" className="py-2 px-3 hover:text-[#e1006e]">Unsere Jobangebote</a>
              <a href="#about" className="py-2 px-3 hover:text-[#e1006e]">Über uns</a>
              <a href="#kontakt" className="py-2 px-3 hover:text-[#e1006e]">Kontakt</a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative text-white px-4 py-16 flex items-center justify-center min-h-[380px] md:min-h-[520px]"
        style={{
          backgroundImage: "url('/ChatGPT Image 29. Apr. 2025, 12_15_31.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-[#223a5e]/70" aria-hidden="true"></div>
        <div className="relative z-10 w-full max-w-xl text-center mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-xl">
            Arbeiten, wo du gebraucht wirst.<br />
            Starte jetzt mit <span className="text-white">Fibertexx!</span>
          </h1>
          <p className="mb-6 text-lg drop-shadow-xl">Finde schnell deinen neuen Job – einfach bewerben, schnell starten.</p>
          <a href="#bewerben" className="inline-block bg-[#e1006e] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-pink-700 border-2 border-[#e1006e] transition">Jetzt bewerben</a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="jobs" className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-8 text-[#e1006e]">Was uns besonders macht</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center w-40 text-[#223a5e]">
            <span className="text-[#e1006e] text-4xl mb-2">€</span>
            <span className="font-semibold">Faire Bezahlung</span>
          </div>
          <div className="flex flex-col items-center w-40 text-[#223a5e]">
            <span className="text-[#e1006e] text-4xl mb-2">⏱️</span>
            <span className="font-semibold">Schneller Start<br />in 7 Tagen</span>
          </div>
          <div className="flex flex-col items-center w-40 text-[#223a5e]">
            <span className="text-[#e1006e] text-4xl mb-2">🔄</span>
            <span className="font-semibold">Flexible Einsätze</span>
          </div>
          <div className="flex flex-col items-center w-40 text-[#223a5e]">
            <span className="text-[#e1006e] text-4xl mb-2">👤</span>
            <span className="font-semibold">Persönliche Betreuung</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8 text-[#e1006e]">So einfach geht’s</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 text-[#223a5e]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-4">
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
        <a href="#jobs" className="inline-block mt-4 bg-[#e1006e] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-pink-700 border-2 border-[#e1006e] transition">Mehr Jobs</a>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-12 bg-[#e1006e] text-white text-center">
        <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
          <Image src="/istockphoto-1045886560-612x612.jpg" alt="Mitarbeiter Testimonial" width={96} height={96} className="rounded-full border-4 border-white mx-auto" />
          <h3 className="text-xl font-bold mb-2">Unsere Mitarbeiter sagen</h3>
          <blockquote className="italic">Dank Fibertexx habe ich endlich einen Job gefunden, der zu mir passt.&quot;<br /><span className="not-italic font-semibold block mt-2">Maria, 24</span></blockquote>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          {/* Bild links */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src="/ChatGPT Image 29. Apr. 2025, 12_42_55.png" alt="Fibertexx Teamfoto" className="w-72 h-96 object-cover rounded-2xl shadow-lg bg-gray-50" />
          </div>
          {/* Text rechts */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#e1006e] mb-4">Wir stellen uns kurz vor</h2>
              <p className="text-lg text-[#223a5e] mb-3">Die Fibertexx Personalmanagement GmbH wurde im Jahr 2008 gegründet und ist nicht nur im Besitz der von der Regionaldirektion Nürnberg erteilten unbefristeten Arbeitnehmerüberlassung, sondern verfügt auch über ein Team, welches mehr als 15 Jahre Erfahrung vorzuweisen hat.</p>
              <p className="text-lg text-[#223a5e]">Nachdem im Jahr 2013 die Niederlassung in Augsburg eröffnet wurde, folgte im Jahr 2015 eine weitere Niederlassung in Dillingen an der Donau.</p>
            </div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-[#223a5e] mb-4">Fibertexx – unsere Ansprüche</h3>
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">1</span>
                  <span className="text-[#223a5e] text-base">Ihre Geschäftsbedürfnisse analysieren, verstehen und motivierte Mitarbeiter/-innen mit dem richtigen Know-how zusammenbringen</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">2</span>
                  <span className="text-[#223a5e] text-base">Ein strategischer Partner an Ihrer Seite zu sein, mit einer auf Sie abgestimmten und einzigartigen Konzeptlösung</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">3</span>
                  <span className="text-[#223a5e] text-base">Erhaltung und Steigerung Ihrer Wettbewerbsfähigkeit durch Organisation und Koordination Ihrer Mitarbeiter</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">4</span>
                  <span className="text-[#223a5e] text-base">Vermittlung motivierter Mitarbeiter, die vollen Einsatz und Leistung für Ihr Unternehmen bringen</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">5</span>
                  <span className="text-[#223a5e] text-base">Hohe Übereinstimmung zwischen Ihrer Stellenanforderung und dem Qualifikationsprofil</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e1006e] text-white flex items-center justify-center text-xl font-bold shadow">6</span>
                  <span className="text-[#223a5e] text-base">Ein fairer und ehrlicher Arbeitgeber für unsere Mitarbeiter und Mitarbeiterinnen sein</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-12 bg-gray-50 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vorteile für Kunden */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start border-t-4 border-[#e1006e]">
            <h2 className="text-xl font-bold text-[#e1006e] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Ihre Vorteile als unser Kunde
            </h2>
            <ul className="space-y-3 text-[#223a5e]">
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Ein Team mit mehr als 15-jähriger Erfahrung im Bereich Arbeitnehmerüberlassung</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Professionelles Arbeiten mit kompetenten Ansprechpartnern vor Ort</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>24 Stunden Rufbereitschaft ermöglichen eine optimale und qualifizierte Betreuung</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Flächendeckende und niederlassungsübergreifende Zusammenarbeit</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Unbefristete Arbeitnehmerüberlassung erteilt durch die Regionaldirektion Nürnberg</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Schnelle und qualifizierte Lösungen für die Abdeckung von Personalanforderungen</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Geringe Einarbeitungszeit durch erfahrene und hochqualifizierte Mitarbeiter</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Faire und transparente Preisgestaltung</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#e1006e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Spezifische Auswahl unserer Mitarbeiter/innen in Abstimmung auf Ihr Unternehmen</li>
            </ul>
          </div>

          {/* Vorteile für Mitarbeiter */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start border-t-4 border-[#223a5e]">
            <h2 className="text-xl font-bold text-[#223a5e] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Ihre Vorteile als Mitarbeiter von Fibertexx
            </h2>
            <ul className="space-y-3 text-[#223a5e]">
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Unbefristete Arbeitsverträge</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Umfassende, faire und ehrliche Betreuung</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Hohe Übernahmequoten bei unseren Kundenbetrieben</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Durchführung von qualifizierten Weiterbildungsmaßnahmen</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Kennenlernen verschiedener Unternehmen</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Erweiterung Ihrer fachlichen Kompetenzen</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Einstieg in neue Branchen für Quereinsteiger</li>
              <li className="flex items-start gap-2"><span className="mt-1"><svg className="w-5 h-5 text-[#223a5e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Weihnachts- und Urlaubsgeld</li>
            </ul>
          </div>
        </div>
      </section>



      {/* INDUSTRIES SECTION */}
      <section className="py-12 bg-gray-50 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#e1006e] mb-8 text-center">Fibertexx vermittelt hauptsächlich in folgenden Branchen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      <footer id="kontakt" className="bg-[#e1006e] text-white pt-12 pb-6 mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">Unsere Standorte & Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#ff5bb0] pb-8">
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

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 pt-8 pb-4 border-b border-[#ff5bb0] mt-2">
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
    </div>
  );
}

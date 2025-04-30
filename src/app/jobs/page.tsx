import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Produktionsmitarbeiter (m/w/d)",
    location: "Dillingen",
    short: "Für die Fertigung in Dillingen suchen wir Verstärkung im Schichtbetrieb.",
  },
  {
    id: 2,
    title: "Lagerlogistiker (m/w/d)",
    location: "Augsburg",
    short: "Kommissionierung und Versand in einem modernen Logistikzentrum.",
  },
  {
    id: 3,
    title: "Bürokraft (m/w/d)",
    location: "Dillingen",
    short: "Unterstützung im administrativen Bereich und Telefonzentrale.",
  },
];

export default function JobsPage() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen py-16">
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e1006e] mb-8 tracking-tight drop-shadow-lg text-center">Unsere aktuellen Jobangebote</h1>
          <div className="space-y-8">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-[#f0e6ef] hover:shadow-lg transition">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#223a5e] mb-1">{job.title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#e1006e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.location}
                  </div>
                  <div className="mb-2 text-[#223a5e] text-base">{job.short}</div>
                </div>
                <Link href={`/jobs/${job.id}/bewerben`} className="inline-block bg-[#e1006e] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#b80054] transition text-lg">Bewerben</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

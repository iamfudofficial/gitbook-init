"use client";
import { useState, useRef } from "react";

export default function BewerbenForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    tel: string;
    file: File | null;
    datenschutz: boolean;
  }>({
    name: "",
    email: "",
    tel: "",
    file: null,
    datenschutz: false,
  });
  const [fileName, setFileName] = useState("");
  const [submitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    setForm(f => ({ ...f, file }));
    setFileName(file ? file.name : "");
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setForm(f => ({ ...f, file }));
    setFileName(file ? file.name : "");
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center">
        <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-[#e1006e] mb-4">Vielen Dank für Ihre Bewerbung!</h2>
          <p className="text-black">Wir haben Ihre Unterlagen erhalten und melden uns zeitnah bei Ihnen.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto mt-8"
      name="bewerbung"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      ref={formRef}
    >
      {/* Netlify Honeypot und Formname */}
      <input type="hidden" name="form-name" value="bewerbung" />
      <p className="hidden">
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      </p>

      {/* Stepper */}
      <div className="flex justify-between mb-8">
        {[1,2,3].map(s => (
          <div key={s} className={`flex-1 flex flex-col items-center ${step === s ? 'font-bold text-[#e1006e]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 border-2 ${step === s ? 'border-[#e1006e] bg-[#e1006e] text-white' : 'border-gray-300 bg-white'}`}>{s}</div>
            <div className="text-xs">
              {s === 1 && "Daten"}
              {s === 2 && "Lebenslauf"}
              {s === 3 && "Bestätigung"}
            </div>
          </div>
        ))}
      </div>
      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-black">Name<span className="text-red-600">*</span></label>
            <input type="text" name="name" value={form.name} onChange={handleInput} required className="w-full border rounded px-3 py-2 text-black" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">E-Mail<span className="text-red-600">*</span></label>
            <input type="email" name="email" value={form.email} onChange={handleInput} required className="w-full border rounded px-3 py-2 text-black" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">Telefon</label>
            <input type="tel" name="tel" value={form.tel} onChange={handleInput} className="w-full border rounded px-3 py-2 text-black" />
          </div>
          <button type="button" className={`bg-[#e1006e] text-white px-6 py-2 rounded-lg mt-4 ${(!form.name || !form.email) ? 'opacity-60 cursor-not-allowed' : ''}`} onClick={() => (form.name && form.email) && setStep(2)} disabled={!form.name || !form.email}>Weiter</button>
        </div>
      )}
      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <label className="block mb-1 font-medium text-black">Lebenslauf hochladen<span className="text-red-600">*</span></label>
          <div
            className="w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="cv-upload" name="file" onChange={handleFile} required />
            <label htmlFor="cv-upload" className="cursor-pointer">
              {fileName ? (
                <span className="text-[#223a5e]">{fileName}</span>
              ) : (
                <span className="text-gray-400">Datei hier ablegen oder klicken</span>
              )}
            </label>
          </div>
          <div className="flex justify-between">
            <button type="button" className="bg-gray-200 text-[#223a5e] px-6 py-2 rounded-lg" onClick={() => setStep(1)}>Zurück</button>
            <button type="button" className="bg-[#e1006e] text-white px-6 py-2 rounded-lg" disabled={!form.file} onClick={() => form.file && setStep(3)}>
            Weiter
          </button>
          </div>
        </div>
      )}
      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="mb-2">
            <div className="font-medium">Name:</div>
            <input type="hidden" name="name" value={form.name} readOnly />
            <div>{form.name}</div>
          </div>
          <div className="mb-2">
            <div className="font-medium">E-Mail:</div>
            <input type="hidden" name="email" value={form.email} readOnly />
            <div>{form.email}</div>
          </div>
          {form.tel && (
            <div className="mb-2">
              <div className="font-medium">Telefon:</div>
              <input type="hidden" name="tel" value={form.tel} readOnly />
              <div>{form.tel}</div>
            </div>
          )}
          <div className="mb-2">
            <div className="font-medium">Lebenslauf:</div>
            <input type="hidden" name="fileName" value={fileName} readOnly />
            <div>{fileName}</div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="datenschutz" checked={form.datenschutz} onChange={handleInput} required />
            <span className="text-xs text-black">Ich akzeptiere die <a href="/impressum" className="underline text-[#e1006e]" target="_blank">Datenschutzbestimmungen</a>.</span>
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" className="bg-gray-200 text-[#223a5e] px-6 py-2 rounded-lg" onClick={() => setStep(2)}>Zurück</button>
            <button type="submit" className="bg-[#e1006e] text-white px-6 py-2 rounded-lg" disabled={!form.datenschutz}>Absenden</button>
          </div>
        </div>
      )}
    </form>
  );
}

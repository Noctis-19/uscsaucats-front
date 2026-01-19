"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnexionCoach() {
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");

    const res = await fetch("/api/connexion-coachs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifiant, motDePasse }),
    });

    if (!res.ok) {
      setErreur("Accès refusé");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify">
      <div className="max-w-md mx-auto mt-24 p-6 border-2 border-primary rounded-lg">
        <h2 className="text-4xl text-primary font-bold mb-6 text-center">Accès coachs</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Identifiant"
            value={identifiant}
            onChange={(e) => setIdentifiant(e.target.value)}
            required
            className="px-4 py-2 border border-primary rounded-lg shadow hover:shadow-lg hover:border-secondary transition overflow-hidden"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
            className="px-4 py-2 border border-primary rounded-lg shadow hover:shadow-lg hover:border-secondary transition overflow-hidden"
          />

          {erreur && (
            <p className="text-red-600 text-sm text-center">{erreur}</p>
          )}

          <button
            type="submit"
            className="py-2 bg-primary text-white text-center font-semibold rounded-full shadow hover:bg-secondary transition"
          >
            Entrer
          </button>
        </form>
      </div>
    </div>
    
  );
}

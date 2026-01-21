"use client"

import { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function NewMessageEvents({ type, parentId }: { type: string, parentId: string }) {
  const [nom, setNom] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");

    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        message: newMessage,
        type: type,
        parentId,
      }),
    });

    if (!res.ok) {
      setErreur("Accès refusé");
      return;
    }

    router.refresh();
  }
  
  return(
    <form onSubmit={handleSubmit} className="">
      <div className="mt-6 flex gap-4">
        <div className="w-11/12 border border-primary rounded-4xl overflow-hidden flex items-stretch">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="p-2 w-2/12 font-semibold text-white bg-primary flex items-center"
          />

          <input
            type="text"
            placeholder="Messsage"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
            className="p-2 w-full shadow hover:shadow-lg hover:border-secondary transition overflow-hidden"
          />
        </div>
        <button
            type="submit"
            className="flex justify-center border-2 border-primary rounded-full w-11 hover:border-secondary cursor-pointer"
          >
            <Image className="" src="/plus.svg" alt="Plus" width={40} height={40} />
        </button>

        {erreur && (
          <p className="text-red-600 text-sm text-center">{erreur}</p>
        )}

      </div>
    </form>
  );
}

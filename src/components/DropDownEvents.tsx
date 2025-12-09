"use client";

import { Evenement } from "@/lib/types";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DropDownEvents({ evenements }: { evenements: Evenement[] }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={wrapperRef}
      className="relative text-primary"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="font-semibold text-primary hover:text-secondary"
      >
        Évènements
      </button>

      <div
        // Affiche par ligne
        className={
          "absolute left-0 top-full mt-0 bg-white border shadow-lg rounded p-2 min-w-50 z-50 transition-opacity duration-150 " +
          (open ? "opacity-100 visible" : "opacity-0 invisible")
        }
        role="menu"
        aria-label="Sous menu évènements"
      >
        {evenements.length === 0 ? (
          <div className="text-sm text-gray-500 px-2 py-1">Aucun évènement</div>
        ) : (
          evenements.map((ev) => (
            <Link
              key={ev.id}
              href={`/evenements/${ev.documentId}`}
              className="block px-2 py-1 rounded hover:bg-gray-100"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {ev.nom + " - " + ev.annee}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

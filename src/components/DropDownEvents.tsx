"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DropDownEvents({ items, nom, page, onNavigate }: { items: any[], nom: string, page: string, onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={wrapperRef}
      className="border-b-2 md:border-0 relative text-primary"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="py-6 w-full text-left md:py-0 font-semibold text-primary hover:text-secondary"
      >
        {nom}
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
        {items.length === 0 ? (
          <div className="text-sm text-gray-500 px-2 py-1">Aucun élément</div>
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={`/${page}/${item.documentId}`}
              className="block px-2 py-3 md:py-1 rounded hover:bg-gray-100"
              role="menuitem"
              onClick={() => {
                setOpen(false); 
                onNavigate?.();
              }}
            >
              {item.nom + " - " + item.annee}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

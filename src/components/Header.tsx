"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import DropDownEvents from "@/components/DropDownEvents";
import { Evenement, Competition } from '@/lib/types';

interface HeaderProps {
  evenements: Evenement[];
  competitions: Competition[];
  isCoach?: boolean;
}

export default function Header({ evenements, competitions, isCoach = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky bg-white top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-8 md:px-4 flex items-center h-25 justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo du club" width={80} height={80} />
        </Link>

        {/* Burger menu mobile */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full bg-primary transform transition duration-300 
              ${menuOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full bg-primary transform transition duration-300
              ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full bg-primary transform transition duration-300
              ${menuOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1.5"}`}
          />
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/actualites" className="font-semibold text-primary hover:text-secondary">
            Actualités
          </Link>
          <Link href="/club" className="font-semibold text-primary hover:text-secondary">
            Club
          </Link>
          <Link href="/entrainements" className="font-semibold text-primary hover:text-secondary">
            Entraînements
          </Link>

          {isCoach ? (
            <>
              <DropDownEvents items={evenements} nom="Évènements (coachs)" page="espace-coachs/evenements" />
              <DropDownEvents items={competitions} nom="Compétitions (coachs)" page="espace-coachs/competitions" />
            </>
          ) : (
            <>
              <DropDownEvents items={evenements} nom="Évènements" page="evenements" />
              <DropDownEvents items={competitions} nom="Compétitions" page="competitions" />
            </>
          )}

          <Link href="/partenaires" className="font-semibold text-primary hover:text-secondary">
            Partenaires
          </Link>
          <Link href="/contact" className="font-semibold text-primary hover:text-secondary">
            Contact
          </Link>
        </nav>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden w-2/3 flex flex-col px-4 pb-4 bg-white shadow absolute right-0 z-40">
          <Link href="/actualites" onClick={() => closeMenu()} className="border-b-2 py-6 font-semibold text-primary">
            Actualités
          </Link>
          <Link href="/club" onClick={() => closeMenu()} className="border-b-2 py-6 font-semibold text-primary">
            Club
          </Link>
          <Link href="/entrainements" onClick={() => closeMenu()} className="border-b-2 py-6 font-semibold text-primary">
            Entraînements
          </Link>

          {isCoach ? (
            <>
              <DropDownEvents items={evenements} nom="Évènements (coachs)" page="espace-coachs/evenements" onNavigate={closeMenu} />
              <DropDownEvents items={competitions} nom="Compétitions (coachs)" page="espace-coachs/competitions" onNavigate={closeMenu} />
            </>
          ) : (
            <>
              <DropDownEvents items={evenements} nom="Évènements" page="evenements" onNavigate={closeMenu} />
              <DropDownEvents items={competitions} nom="Compétitions" page="competitions" onNavigate={closeMenu} />
            </>
          )}

          <Link href="/partenaires" onClick={() => closeMenu()} className="border-b-2 py-6 font-semibold text-primary hover:text-secondary">
            Partenaires
          </Link>
          <Link href="/contact" onClick={() => closeMenu()} className="border-b-2 py-6 font-semibold text-primary hover:text-secondary">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

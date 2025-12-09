import Link from 'next/link';
import Image from 'next/image';
import DropDownEvents from "@/components/DropDownEvents";
import { Evenement } from '@/lib/types';

export default async function Header({ evenements }: { evenements: Evenement[] }) {
  return (
    <header className="sticky bg-white top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-25">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo du club" width={80} height={80} />
        </Link>

        {/* Liens centrés */}
        <nav className="flex-1 flex justify-center space-x-8">
          <Link href="/actualites" className="font-semibold text-primary hover:text-secondary">
            Actualités
          </Link>
          <Link href="/club" className="font-semibold text-primary hover:text-secondary">
            Club
          </Link>
          <Link href="/entrainements" className="font-semibold text-primary hover:text-secondary">
            Entraînements
          </Link>
          <DropDownEvents evenements={evenements} />
          <Link href="/competitions" className="font-semibold text-primary hover:text-secondary">
            Compétitions
          </Link>
          <Link href="/partenaires" className="font-semibold text-primary hover:text-secondary">
            Partenaires
          </Link>
          <Link href="/contact" className="font-semibold text-primary hover:text-secondary">
            Contact
          </Link>
        </nav>

        <div className="w-20"></div>
      </div>
    </header>
  );
}

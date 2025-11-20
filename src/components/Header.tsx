import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-20">
        {/* Logo qui déborde */}
        {/* <Link href="/" className="relative -bottom-6">
          <Image src="/logo.png" alt="Logo du club" width={100} height={100} />
        </Link> */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo du club" width={80} height={80} />
        </Link>

        {/* Liens centrés */}
        <nav className="flex-1 flex justify-center space-x-8">
          <Link href="/actualites" className="text-gray-700 hover:text-gray-900">
            Actualités
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Vide à droite pour équilibrer */}
        <div className="w-20"></div>
      </div>
    </header>
  );
}


import Link from 'next/link';
import Image from 'next/image';
import { getFooter } from '@/lib/api';

export async function Footer() {
  const footer = await getFooter();

  return (
    <footer className="bg-primary text-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.jpg" alt="Logo du club" className="rounded-2xl" width={70} height={70} />
        </Link>
        
        {/* Coordonnées */}
        <div className="flex-1 flex justify-center space-x-8">
          <div className="mx-auto text-center">
            <h2 className="font-bold">Réseaux</h2>
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
              <Link href={footer.instagram} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
              </Link>
              <Link href={footer.facebook} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
              </Link>
            </div>
          </div>
          <div className="mx-auto text-center">
            <h2 className="font-bold mb-2">Email</h2>
            <p> {footer.email} </p>
          </div>
          <div className="mx-auto text-center">
            <h2 className="font-bold mb-2">Adresse</h2>
            <p> {footer.adresse} </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

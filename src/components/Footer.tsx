import Link from 'next/link';
import Image from 'next/image';
import { type Contact} from "@/lib/types";

export async function Footer({ contact }: { contact: Contact }) {
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
            <h5 className="font-bold">Réseaux</h5>
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
              <Link href={contact.instagram} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
              </Link>
              <Link href={contact.facebook} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
              </Link>
            </div>
          </div>
          <div className="mx-auto text-center">
            <h5 className="font-bold mb-2">Email</h5>
            <p> {contact.email} </p>
          </div>
          <div className="mx-auto text-center">
            <h5 className="font-bold mb-2">Adresse</h5>
            <p> {contact.adresse} </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { getContact  } from '@/lib/api';
import MapComponent from '@/components/Map';

export default async function ContactPage() {
  const contact = await getContact();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify cursor-default">
      <h2 className="text-4xl text-primary font-bold mb-6">Contact</h2>
      <div className="mb-6">
        <MapComponent url={contact.map} />
      </div>
      <div className="blockrenderer mb-4">
        <BlocksRenderer content={contact.contenu} />
      </div>

      <div className="mx-auto flex flex-row items-center">
        <Link href={contact.instagram} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href={contact.facebook} className="hover:bg-secondary p-1 rounded" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}

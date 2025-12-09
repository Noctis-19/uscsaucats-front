import React from "react";
import { getPartenaires  } from '@/lib/api';
import { Partenaire } from '@/lib/types';
import PartenaireComponent from '@/components/Partenaire';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function PartenairesPage() {
  const partenaires = await getPartenaires();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-justify cursor-default">
      <h2 className="text-4xl text-primary font-bold mb-6">Nos partenaires</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partenaires.map((partenaire: Partenaire) => (
          <PartenaireComponent partenaire={partenaire} key={partenaire.id} />
        ))}
      </div>
    </div>
  );
}

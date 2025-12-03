import React from "react";
import { getActualites  } from '@/lib/api';
import { Actualite } from '@/lib/types';
import ActualiteComponent from '@/components/Actualite';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function ActualitesPage() {
  const actualites = await getActualites();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl text-primary font-bold mb-4">Actualités</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actualites.map((actu: Actualite) => (
          <ActualiteComponent actu={actu} key={actu.id} />
        ))}
      </div>
    </div>
  );
}

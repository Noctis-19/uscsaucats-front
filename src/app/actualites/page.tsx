import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getActualites  } from '@/lib/api';
import { Actualite } from '@/lib/types';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function ActualitesPage() {
  const actualites = await getActualites();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Actualités</h1>

      {actualites.map((actu: Actualite) => (
        <div key={actu.id} className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-semibold">{actu.title}</h2>
          <BlocksRenderer content={actu.content} />
          <img 
            src={`${apiUrl}${actu.image.url}`}
            alt={actu.image.alternativeText || ''} 
            className="mt-2" 
          />
        </div>
      ))}
    </div>
  );
}

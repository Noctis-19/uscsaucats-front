import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getActualites  } from '@/lib/api';
import { Actualite } from '@/lib/types';

export default async function Home() {
  const actualites = await getActualites();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Actualités</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actualites.map((actu: Actualite) => (
          <a
            key={actu.id}
            href={`/actualites/${actu.documentId}`}
            className="border rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <h3 className="text-xl font-semibold">{actu.title}</h3>
            <BlocksRenderer content={actu.content} />
          </a>
        ))}
      </div>
    </div>
  );
}

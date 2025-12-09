import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { getActualiteById } from '@/lib/api';

export default async function ActualitePage({ params }: { params: { docId: string } }) {
  const { docId } = await params;

  const actu = await getActualiteById(docId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify">
      <h2 className="text-4xl text-primary text-center font-bold mb-6">{actu.titre}</h2>

      <div className="blockrenderer">
        <BlocksRenderer content={actu.contenu} />
      </div>

      {actu.image?.url && (
        <img
          src={process.env.NEXT_PUBLIC_API_URL + actu.image.url}
          alt={actu.image.alternativeText}
          className="mt-6"
        />
      )}
    </div>
  );
}

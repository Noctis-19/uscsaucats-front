import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { getActualiteById } from '@/lib/api';

export default async function ActualitePage({ params }: { params: { docId: string } }) {
  const { docId } = await params;

  const actu = await getActualiteById(docId);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{actu.title}</h1>

      <BlocksRenderer content={actu.content} />

      {actu.image?.url && (
        <img
          src={process.env.NEXT_PUBLIC_API_URL + actu.image.url}
          alt={actu.image.alternativeText}
          className="mt-4"
        />
      )}
    </div>
  );
}

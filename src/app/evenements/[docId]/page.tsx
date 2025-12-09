import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import CarouselComponent from "@/components/Carousel";
import { getEvenementById } from '@/lib/api';

export default async function EvenementPage({ params }: { params: { docId: string } }) {
  const { docId } = await params;
  const evenement = await getEvenementById(docId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify cursor-default">
      <h2 className="text-4xl text-primary text-center font-bold mb-8">{evenement.nom} - {evenement.annee}</h2>

      <div className="blockrenderer">
        <BlocksRenderer content={evenement.description} />
      </div>

      {evenement?.images && (
        <div className="mx-auto max-w-3/5 mt-8 border overflow-hidden rounded-2xl">
          <CarouselComponent images={evenement.images} />
        </div>
      )}      
    </div>
  );
}

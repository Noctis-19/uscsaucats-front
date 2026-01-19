import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import CarouselComponent from "@/components/Carousel";
import { getCompetitionById } from '@/lib/api';
import MapComponent from '@/components/Map';

export default async function CompetitionPage({ params }: { params: { docId: string } }) {
  const { docId } = await params;
  const competition = await getCompetitionById(docId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify cursor-default">
      <h2 className="text-4xl text-primary text-center font-bold mb-6">{competition.nom} - {competition.annee}</h2>

      {competition?.map && (
        <div className="mb-6">
          <MapComponent url={competition.map} />
        </div>
      )}

      <div className="blockrenderer">
        <BlocksRenderer content={competition.description} />
      </div>

      {competition?.images && (
        <div className="mx-auto max-w-3/5 mt-8 border overflow-hidden rounded-2xl">
          <CarouselComponent images={competition.images} />
        </div>
      )}      
    </div>
  );
}

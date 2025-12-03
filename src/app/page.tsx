import { getAccueil, getLienInscription, getActualites } from '@/lib/api';
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { type Actualite } from '@/lib/types';
import CarouselComponent from "@/components/Carousel";
import ActualiteComponent from '@/components/Actualite';

export default async function Home() {
  const accueil = await getAccueil();
  const actualites = await getActualites();
  const lienInscription = await getLienInscription();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="w-full flex flex-col md:flex-row items-center justify-between mt-4 mb-8">
        <div className="md:w-3/5 w-full flex  flex-col">
          <h1 className="text-7xl font-bold text-primary text-center">
            {accueil.titre}
          </h1>
          <p className="w-4/5 mt-4 self-center text-lg text-center font-semibold">
            {accueil.description}
          </p>
          <a
            href={lienInscription.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 w-1/5 self-center bg-primary text-white text-center font-semibold rounded-full shadow hover:bg-secondary transition"
          >
            Adhérer
          </a>
        </div>

        {/* Carrousel */}
        <div className="w-full flex flex-col md:flex-row md:w-2/5 h-130 ml-8 md:mt-0 border overflow-hidden rounded-2xl rounded-bl-[5rem]">
          <CarouselComponent images={accueil.carrousel} />
        </div>
      </section>

      {/* Présentation */}
      <section className="mb-8">
        <h2 className="text-3xl text-primary font-bold mb-4">Présentation</h2>
        <div className="text-lg">
          <BlocksRenderer content={accueil.presentation} />
        </div>
      </section>

      {/* Actualités */}
      <section className="mb-8">
        <h2 className="text-3xl text-primary font-bold mb-4">Actualités</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actualites.map((actu: Actualite) => (
            <ActualiteComponent actu={actu} key={actu.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { getActualites, getGalerieAccueil } from '@/lib/api';
import { type Actualite } from '@/lib/types';
import CarouselComponent from "@/components/Carousel";
import ActualiteComponent from '@/components/Actualite';

export default async function Home() {
  const actualites = await getActualites();
  const images = await getGalerieAccueil();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <section className="w-full flex flex-col md:flex-row items-center justify-between mt-5 mb-10">
        <div className="md:w-3/5 w-full flex  flex-col">
          <h1 className="text-7xl font-bold text-primary">
            Club d'athlétisme USCSaucats
          </h1>
          <section className="mt-4 text-lg w-3/4">
            <p className="font-semibold">
              Bienvenue sur le site de l'Union Sportive et Culturelle Saucataise section Athlétisme !!!
            </p>
          </section>
        </div>

        <div className="w-full flex flex-col md:flex-row md:w-2/5 h-100 ml-8 md:mt-0 border overflow-hidden rounded-2xl rounded-bl-[5rem]">
          <CarouselComponent images={images} />
        </div>
      </section>

      <h2 className="text-3xl text-primary font-bold mb-4">Actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actualites.map((actu: Actualite) => (
          <ActualiteComponent actu={actu} key={actu.id} />
        ))}
      </div>
    </div>
  );
}

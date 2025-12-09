import { type Partenaire } from '@/lib/types';

export default function Partenaire({ partenaire }: { partenaire: Partenaire }) {
  return (
    <div className="relative border-2 border-primary rounded-lg overflow-hidden flex flex-col">
      
      {/* Nom */}
      <div className="bg-primary text-white py-2 px-4">
        <h4 className="text-xl font-semibold text-center">{partenaire.nom}</h4>
      </div>

      {/* Image */}
      <div className="pt-3">
        <img
          src={process.env.NEXT_PUBLIC_API_URL + partenaire.image.url}
          alt={partenaire.image.alternativeText}
          className="mx-auto max-h-40 object-contain"
        />
      </div>

      {/* Description */}
      <div className="py-3 px-4 text-lg">
        {partenaire.description}
      </div>
    </div>
  );
}

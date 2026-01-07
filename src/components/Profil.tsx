import { type Profil } from '@/lib/types';

export default function Profil({ profil }: { profil: Profil }) {
  return (
    <div className="relative border-2 border-primary rounded-lg overflow-hidden flex flex-col">
      
      {/* Poste */}
      <div className="bg-primary text-white py-2 px-4">
        <h4 className="text-xl font-semibold text-center">{profil.poste}</h4>
      </div>

      {/* Image */}
      <div className="pt-3">
        <img
          src={profil?.image?.url ? process.env.NEXT_PUBLIC_API_URL + profil.image.url : "/avatar.svg"}
          alt={profil?.image?.alternativeText ? profil.image.alternativeText : "Avatar"}
          className="mx-auto max-h-40 object-contain"
        />
      </div>

      {/* Nom */}
      <div className="py-3 px-4 text-lg text-center">
        {profil.nom}
      </div>
    </div>
  );
}

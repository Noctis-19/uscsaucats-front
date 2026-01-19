import Image from 'next/image';

export default function EspaceCoachsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify">
      <h2 className="text-4xl text-primary font-bold mb-6">Espace coachs</h2>

      <p>Bienvenue dans l'espace à destination des coachs.</p>
      <p>Vous avez accès aux mêmes pages que les autres utilisateurs mais avec une messagerie uniquement visible pour les coachs dans les onglets évènements et compétitions.</p>

      <div className="flex justify-center my-8">
        <Image
          src="/nature.jpg"
          alt="Nature"
          width={900}
          height={600}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

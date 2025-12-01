import { type Actualite } from '@/lib/types';

export default function Actualite({ actu }: { actu: Actualite }) {
  return (
    <a
      href={`/actualites/${actu.documentId}`}
      className="relative border-2 border-primary rounded-lg shadow hover:shadow-lg hover:border-secondary transition overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL + actu.image?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "280px",
      }}
    >

      {/* Date en haut */}
      <div className="absolute top-4 left-4 bg-black/60 border text-white px-3 py-2 rounded-full">
        {new Date(actu.date).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </div>

      {/* Bande floutée */}
      <div className="absolute bottom-0 left-0 right-0 h-22 bg-black/40 backdrop-blur-md overflow-y-auto wrap-break-word">
        {/* Description */}
        <div className="py-2 px-4 text-white">
          <h3 className="text-xl font-semibold">{actu.titre}</h3>
          <div className="text-sm">{actu.description}</div>
        </div>
      </div>
    </a>
  );
}

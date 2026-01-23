import Image from 'next/image';
import { getEncadrants, getInfosClub, getOrganigramme } from '@/lib/api';
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import { Profil } from '@/lib/types';
import ProfilComponent from '@/components/Profil';

export default async function ClubPage() {
  const infosClub = await getInfosClub();
  const organigramme = await getOrganigramme();
  const encadrants = await getEncadrants();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify">
      <h2 className="text-4xl text-primary font-bold mb-6">Club</h2>

      <section className="mb-8">
        {infosClub.map((info: any) => (
          <div key={info.id} className="flex flex-row items-center justify-between mb-6">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-3xl text-primary font-bold mb-2">{info.titre}</h3>

              <div className="blockrenderer">
                <BlocksRenderer content={info.description} />
              </div>
            </div>
            <div className="hidden md:block w-1/3 rounded-lg pl-4">
              {info.image?.url && (
                <img
                  src={process.env.NEXT_PUBLIC_API_URL + info.image.url}
                  alt={info.image.alternativeText}
                  className="rounded-3xl"
                />
              )}
            </div>
          </div>
        ))}
      </section>
      
      <section className="mb-8">
        <h3 className="text-3xl text-primary font-bold mb-4">Organigramme</h3>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organigramme.map((profil: Profil) => (
            <ProfilComponent profil={profil} key={profil.id} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl text-primary font-bold mb-4">Encadrants</h3>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {encadrants.map((profil: Profil) => (
            <ProfilComponent profil={profil} key={profil.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

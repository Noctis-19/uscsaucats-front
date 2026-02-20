export default async function MentionsLegalesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-base md:text-lg text-justify cursor-default leading-relaxed">
      
      <h1 className="text-4xl text-primary font-bold mb-10 text-left">
        Mentions légales
      </h1>

      {/* Éditeur */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          1. Éditeur du site
        </h2>
        <p className="mb-2">
          Le présent site est la propriété de l'association UNION SPORTIVE CULTURELLE SAUCATAISE.
        </p>
        <p>
          <strong>UNION SPORTIVE CULTURELLE SAUCATAISE (USCS)</strong><br />
          Association déclarée loi 1901<br />
          Siège social : Mairie – 33650 SAUCATS – France<br />
          SIREN : 782 010 755<br />
          SIRET (siège social) : 782 010 755 00018<br />
          Code APE : 93.12Z – Activités de clubs de sports
        </p>
        <p>
          Directeur de la publication : Nicolas Pegain<br />
          Contact : uscsathletisme@gmail.com
        </p>
      </section>

      {/* Hébergement */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          2. Hébergement
        </h2>
        <p>
          Le site est hébergé par :<br />
          <strong>OVH SAS</strong><br />
          2 rue Kellermann<br />
          59100 Roubaix – France<br />
          Téléphone : 1007
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          3. Propriété intellectuelle
        </h2>
        <p>
          L’ensemble des contenus présents sur le site (textes, images, logos,
          éléments graphiques) est la propriété de l’UNION SPORTIVE CULTURELLE
          SAUCATAISE ou de leurs auteurs respectifs.
        </p>
        <p>
          Toute reproduction, représentation, modification ou publication,
          totale ou partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      {/* Politique de confidentialité */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          4. Données personnelles
        </h2>
        <p>
          Le site ne permet pas aux visiteurs de saisir ou transmettre des
          données personnelles.
        </p>
        <p>
          Certaines informations publiées sur le site (notamment noms,
          prénoms et fonctions des membres du club) sont communiquées par
          l’association dans le cadre de ses activités sportives.
        </p>
        <p>
          Ces données sont diffusées à des fins d’information institutionnelle uniquement.
        </p>
      </section>

      {/* Droits RGPD */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          5. Droits des personnes concernées
        </h2>
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD), toute personne dont
          les données figurent sur le site dispose d’un droit d’accès, de
          rectification et de suppression.
        </p>
        <p>
          Toute demande peut être adressée à : uscsathletisme@gmail.com
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">
          6. Cookies
        </h2>
        <p>
          Le site utilise uniquement des cookies techniques strictement
          nécessaires à son fonctionnement.
        </p>
        <p>
          Aucun cookie publicitaire ou de suivi statistique externe n’est utilisé.
        </p>
      </section>

      {/* Conception */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-left">
          7. Conception, création et réalisation 
        </h2>
        <p>
          Maxime Verger
        </p>
      </section>

    </div>
  );
}

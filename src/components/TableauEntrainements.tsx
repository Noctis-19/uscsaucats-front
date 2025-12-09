export default async function TableauEntrainements({ tableau }: { tableau: any }) {
  const systemFields = [
    "id",
    "documentId",
    "createdAt",
    "updatedAt",
    "publishedAt",
    "ordre",
  ];

  // On enlève les champs systèmes pour pouvoir tous les récupérer sans savoir combien il y en a
  const lignes = tableau.map((item: any) =>
    Object.fromEntries(
      Object.entries(item).filter(([key]) => !systemFields.includes(key))
    )
  );

  if (lignes.length === 0) return <p>Aucune donnée.</p>;

  // La première ligne = les noms de colonnes
  const header = Object.values(lignes[0]);

  // Les autres lignes = les données
  const data = lignes.slice(1);

  return (
    <div className="overflow-x-auto pt-2">
      <table className="min-w-full text-center">
        <thead className="bg-primary">
          <tr>
            {header.map((content: any, i: any) => (
              <th key={i} className="border border-primary text-white px-4 py-2">{content}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((ligne: any, i: number) => (
            <tr key={i} className="hover:bg-green-50">
              {Object.values(ligne).map((content: any, i: number) => (
                <td key={i} className="border border-primary px-4 py-2">{content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

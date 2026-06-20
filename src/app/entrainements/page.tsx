import React from "react";
import TableauEntrainements from '@/components/TableauEntrainements';
import { getLignesEntrainements, getSaison } from '@/lib/api';

export default async function EntrainementsPage() {
  const tableau = await getLignesEntrainements();
  const saison = await getSaison();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-lg text-justify cursor-default">
      <h2 className="text-4xl text-primary font-bold mb-6">Entraînements {saison.nom}</h2>
      <div className="overflow-auto">
        <TableauEntrainements tableau={tableau} />
      </div>
    </div>
  );
}

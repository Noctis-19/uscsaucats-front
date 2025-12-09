import React from "react";
import TableauEntrainements from '@/components/TableauEntrainements';
import { getLignesEntrainements } from '@/lib/api';

export default async function EntrainementsPage() {
  const tableau = await getLignesEntrainements();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-justify cursor-default">
      <h2 className="text-3xl text-primary font-bold mb-4">Entraînements</h2>
      <TableauEntrainements tableau={tableau} />
    </div>
  );
}

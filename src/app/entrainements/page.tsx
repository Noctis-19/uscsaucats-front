import React from "react";
import TableauEntrainements from '@/components/TableauEntrainements';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function EntrainementsPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl text-primary font-bold mb-4">Entraînements</h2>

      <TableauEntrainements />
    </div>
  );
}

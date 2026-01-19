import { fetchAPI } from "@/lib/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { identifiant, motDePasse } = await req.json();

  const data = await fetchAPI("/api/acces-interne");
  const acces = data.data;

  if (
    !acces ||
    acces.identifiant !== identifiant ||
    acces.motdepasse !== motDePasse ||
    !acces.actif
  ) {
    return NextResponse.json({ error: "Refusé" }, { status: 401 });
  }

  const cookieStore = await cookies();

  cookieStore.set("coach_auth", "ok", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  return NextResponse.json({ success: true });
}

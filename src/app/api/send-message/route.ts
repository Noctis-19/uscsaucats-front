import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, message, type, parentId } = await req.json();

    if (!nom || !message || !type || !parentId) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages-${type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
        body: JSON.stringify({
          data: {
            nom,
            message,
            [type]: parentId,
          },
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.log("Erreur Strapi:", res.status, text);
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erreur Strapi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

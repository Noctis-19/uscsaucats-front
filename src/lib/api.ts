export async function fetchAPI(path: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}${path}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}

// Specific
export async function getActualites() {
  return (await fetchAPI('/api/actualites?populate=image')).data;
}

export async function getActualiteById(docId: string) {
  return (await fetchAPI(`/api/actualites/${docId}?populate=image`)).data;
}

export async function getEvenements() {
  return (await fetchAPI('/api/evenements?populate=image')).data;
}

export async function getGalerieAccueil() {
  return (await fetchAPI('/api/galerie-accueil?populate=images')).data.images;
}

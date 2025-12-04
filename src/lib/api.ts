export async function fetchAPI(path: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}${path}`);

  if (!res.ok) {
    throw new Error(`Erreur API: ${res.status}`);
  }

  return res.json();
}

// Specific
export async function getAccueil() {
   return (await fetchAPI('/api/accueil?populate=carrousel')).data;
}

export async function getLienInscription() {
   return (await fetchAPI('/api/lien-inscription')).data;
}

export async function getFooter() {
   return (await fetchAPI('/api/footer')).data;
}

export async function getActualites() {
  return (await fetchAPI('/api/actualites?sort=date:desc&populate=image')).data;
}

export async function getActualiteById(docId: string) {
  return (await fetchAPI(`/api/actualites/${docId}?populate=image`)).data;
}

export async function getInfosClub() {
  return (await fetchAPI(`/api/infos-club?populate=image&sort=ordre`)).data;
}

export async function getEvenements() {
  return (await fetchAPI('/api/evenements?populate=image')).data;
}

export async function getGalerieAccueil() {
  return (await fetchAPI('/api/galerie-accueil?populate=images')).data.images;
}

export async function getLignesEntrainements() {
  return (await fetchAPI('/api/entrainements-lignes?sort=ordre')).data;
}

export async function getPartenaires() {
  return (await fetchAPI('/api/partenaires?sort=ordre&populate=image')).data;
}

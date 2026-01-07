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

export async function getContact() {
  return (await fetchAPI('/api/contact')).data;
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

export async function getLignesEntrainements() {
  return (await fetchAPI('/api/entrainements-lignes?sort=ordre')).data;
}

export async function getEvenements() {
  return (await fetchAPI('/api/evenements?sort=annee:desc&populate=images')).data;
}

export async function getEvenementById(docId: string) {
  return (await fetchAPI(`/api/evenements/${docId}?populate=images`)).data;
}

export async function getCompetitions() {
  return (await fetchAPI('/api/competitions?sort=annee:desc&populate=images')).data;
}

export async function getCompetitionById(docId: string) {
  return (await fetchAPI(`/api/competitions/${docId}?populate=images`)).data;
}

export async function getPartenaires() {
  return (await fetchAPI('/api/partenaires?sort=ordre&populate=image')).data;
}

export async function getOrganigramme() {
  return (await fetchAPI('/api/organigrammes?sort=ordre&populate=image')).data;
}

export async function getEncadrants() {
  return (await fetchAPI('/api/encadrants?sort=ordre&populate=image')).data;
}

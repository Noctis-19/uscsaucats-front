import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Contact = {
  id: number;
  instagram: string;
  facebook: string;
  email: string;
  adresse: string;
  contenu: BlocksContent;
  map: string;
}

export type Actualite = {
  id: number;
  documentId: string;
  titre: string;
  description: string;
  contenu: BlocksContent;
  image: CustomImage;
  date: Date;
};

export type CustomImage = {
  id: number;
  url: string;
  alternativeText: string;
};

export type Evenement = {
  id: number;
  documentId: string;
  annee: number;
  date: Date;
  nom: string;
  description: string;
  images: CustomImage[];
}

export type Competition = {
  id: number;
  documentId: string;
  annee: number;
  date: Date;
  nom: string;
  description: string;
  images: CustomImage[];
  map:string;
}

export type Partenaire = {
  id: number;
  nom: string;
  image: CustomImage;
  description: string;
}

export type Profil = {
  id: number;
  poste: string;
  nom: string;
  image: CustomImage;
}

export type Message = {
  id: number;
  documentId: string;
  titre: string;
  description: string;
  contenu: BlocksContent;
  image: CustomImage;
  date: Date;
};

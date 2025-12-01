import { BlocksContent } from '@strapi/blocks-react-renderer';

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

export type Colonne = {
  id: number;
  label: string;
};

export type Case = {
  id: number;
  contenu: string;
  colonne: Colonne;
};

export type Ligne = { 
  id: number;
  label: string;
  cases: Case[];
};

export type TableauProps = {
  lignes: Ligne[];
  colonnes: Colonne[];
};

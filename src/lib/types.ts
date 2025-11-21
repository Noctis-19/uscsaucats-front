import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Actualite = {
  id: number;
  documentId: string;
  title: string;
  content: BlocksContent;
  image: CustomImage;
  date: Date;
};

export type CustomImage = {
  id: number;
  url: string;
  alternativeText: string;
};

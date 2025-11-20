import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Actualite = {
  id: number;
  documentId: string;
  title: string;
  content: BlocksContent;
  image: Image;
};

export type Image = {
  url: string;
  alternativeText: string;
}

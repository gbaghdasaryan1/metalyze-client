import { StaticImageData } from 'next/image';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  material: string;
  length?: string;
  width?: string;
  sizes?: string[];
  dimensions?: string;
  features: string[];
};

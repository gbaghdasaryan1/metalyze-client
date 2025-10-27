import { StaticImageData } from 'next/image';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  images: string[] | StaticImageData[];
  description: string;
  category: string;
};

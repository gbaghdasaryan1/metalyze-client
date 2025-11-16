import { FC } from 'react';

import styles from './style.module.scss';
import { ProductType } from '@entities/product/model/types';
import Image from 'next/image';

type Props = {
  product: ProductType;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <>
      <div className={styles.productImage}>
        <img
          src={process.env.NEXT_PUBLIC_API_URL + product.images[0]}
          alt={product.name}
        />
      </div>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <div className={styles.productPrice}>
          ${product.price.toLocaleString()}
        </div>
      </div>
    </>
  );
};

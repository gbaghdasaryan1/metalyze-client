import { FC } from 'react';
import styles from './style.module.scss';
import { ProductType } from '@entities/product/model/types';
import { useSearchStore } from '@widgets/search/store';
import { ProductCard } from '../product-card';
import Link from 'next/link';

type Props = {
  filteredProducts: ProductType[];
};

export const ProductList: FC<Props> = ({ filteredProducts }) => {
  const { searchQuery } = useSearchStore();

  return (
    <div className={styles.productsGrid}>
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={`product/${product.id}`}
          className={styles.productCard}
        >
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
      {filteredProducts.length === 0 && (
        <div className={styles.noResults}>
          <p>No products found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

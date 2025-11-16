import { FC, useEffect } from 'react';
import styles from './style.module.scss';
import { Search } from '@widgets/search';
import { ProductFilter } from '@entities/product/ui/product-filter';
import { ProductList } from '@entities/product/ui/product-list';
import { useSearchStore } from '@widgets/search/store';
import { useProductsQuery } from '@entities/product/model/queries';
import { useLoading } from '@shared/lib/loading';

export const ProductsPage: FC = () => {
  const { searchQuery } = useSearchStore();
  const { showLoading, hideLoading } = useLoading();
  const { data, isLoading, error } = useProductsQuery({
    category: 'jewelry',
    page: 1,
    limit: 20,
  });

  useEffect(() => {
    if (isLoading) {
      showLoading('Loading products...');
    } else {
      hideLoading();
    }
  }, [isLoading, showLoading, hideLoading]);

  if (error) {
    return (
      <div className={styles.productsPage}>
        <h2>Error loading products.</h2>
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className={styles.productsPage}>
        <h2>Empty</h2>
      </div>
    );
  }

  return (
    <>
      <div className={styles.productsPage}>
        <div className={styles.header}>
          <h1>Our Collection</h1>
          <p>Explore our premium selection of men's jewelry</p>
          <Search />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <ProductFilter />
            <ProductList filteredProducts={data?.data || []} />
          </div>
        </div>
      </div>
    </>
  );
};

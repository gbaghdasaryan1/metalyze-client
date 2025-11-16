import { ChangeEvent, FC } from 'react';
import styles from './style.module.scss';

export const ProductFilter: FC = () => {
  const handleChangeCategoryFilter = (
    event: ChangeEvent<HTMLInputElement>
  ) => {};

  const handleChangeMaterialFilter = (
    event: ChangeEvent<HTMLInputElement>
  ) => {};

  const handleChangePriceRange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <aside className={styles.filters}>
      <h3>Filters</h3>

      <div className={styles.filterGroup}>
        <h4>Category</h4>
        <div className={styles.filterOptions}>
          <label id='rings'>
            <input
              type='checkbox'
              name='rings'
              onChange={handleChangeCategoryFilter}
            />
            <span>Rings</span>
          </label>
          <label id='chains'>
            <input
              type='checkbox'
              name='chains'
              onChange={handleChangeCategoryFilter}
            />
            <span>Chains</span>
          </label>
          <label id='bracelets'>
            <input
              type='checkbox'
              name='bracelets'
              onChange={handleChangeCategoryFilter}
            />
            <span>Bracelets</span>
          </label>
          <label id='cufflinks'>
            <input
              type='checkbox'
              name='cufflinks'
              onChange={handleChangeCategoryFilter}
            />
            <span>Cufflinks</span>
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h4>Material</h4>
        <div className={styles.filterOptions}>
          <label id='gold'>
            <input type='checkbox' name='gold' />
            <span>Gold</span>
          </label>
          <label id='silver'>
            <input type='checkbox' name='silver' />
            <span>Silver</span>
          </label>
          <label id='stainless-steel'>
            <input type='checkbox' name='stainless-steel' />
            <span>Stainless Steel</span>
          </label>
          <label id='titanium'>
            <input type='checkbox' name='titanium' />
            <span>Titanium</span>
          </label>
          <label id='leather'>
            <input type='checkbox' name='leather' />
            <span>Leather</span>
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h4>Price Range</h4>
        <div className={styles.priceRange}>
          <input type='number' placeholder='Min' />
          <input type='number' placeholder='Max' />
        </div>
      </div>
    </aside>
  );
};

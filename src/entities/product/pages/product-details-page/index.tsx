'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
import { products_mock } from '@shared/constants/products-mock';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import useCartStore from '@entities/cart/model/store';

const getProductById = (id: string) => {
  return products_mock.find((product) => product.id === String(id));
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const product = id ? getProductById(id) : null;
  const addItem = useCartStore((s) => s.addItem);
  const [boxType, setBoxType] = useState<'standard' | 'gift' | 'secure'>(
    'standard'
  );

  const boxOptions = [
    { id: 'standard', label: 'Standard', price: 0 },
    { id: 'gift', label: 'Gift wrap (+$5)', price: 5 },
    { id: 'secure', label: 'Secure box (+$2)', price: 2 },
  ];

  if (!id) {
    return (
      <div className={styles.notFound}>
        <h1>Loading product…</h1>
      </div>
    );
  }

  // If an id is present but lookup failed, show not found.
  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product Not Found</h1>
        <Link href='/products' className={styles.backLink}>
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      const box = boxOptions.find((b) => b.id === boxType) ?? boxOptions[0];
      // add box price to item price so cart totals include it
      addItem({
        id: product.id,
        name: product.name,
        price: product.price + box.price,
        image: product.images[0],
        material: product.material,
        boxType: box.id,
        boxLabel: box.label,
        boxPrice: box.price,
      });
    }
  };

  const relatedProducts = products_mock
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.container}>
          <Link href='/products' className={styles.backButton}>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path
                d='M15 10H5M5 10L10 15M5 10L10 5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Back
          </Link>

          <div className={styles.productContent}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <Image
                  src={product.images[0] || '/placeholder.svg'}
                  alt={product.name}
                />
              </div>
            </div>

            <div className={styles.detailsSection}>
              <div className={styles.category}>{product.category}</div>
              <h1>{product.name}</h1>
              <div className={styles.price}>
                ${product.price.toLocaleString()}
              </div>

              <p className={styles.description}>{product.description}</p>

              <div className={styles.specifications}>
                <h3>Specifications</h3>
                <div className={styles.specGrid}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Material</span>
                    <span className={styles.specValue}>{product.material}</span>
                  </div>
                  {product.length && (
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Length</span>
                      <span className={styles.specValue}>{product.length}</span>
                    </div>
                  )}
                  {product.width && (
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Width</span>
                      <span className={styles.specValue}>{product.width}</span>
                    </div>
                  )}
                  {product.sizes && (
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Available Sizes</span>
                      <span className={styles.specValue}>{product.sizes}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>Dimensions</span>
                      <span className={styles.specValue}>
                        {product.dimensions}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.features}>
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.boxSelector}>
                <label className={styles.boxLabel} htmlFor='boxType'>
                  Choose box
                </label>
                <select
                  id='boxType'
                  value={boxType}
                  onChange={(e) => setBoxType(e.target.value as any)}
                  className={styles.boxSelect}
                >
                  {boxOptions.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className={styles.relatedSection}>
              <h2>You May Also Like</h2>
              <div className={styles.relatedGrid}>
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedProduct.images[0] || '/placeholder.svg'}
                        alt={relatedProduct.name}
                      />
                    </div>
                    <h3>{relatedProduct.name}</h3>
                    <div className={styles.relatedPrice}>
                      ${relatedProduct.price.toLocaleString()}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

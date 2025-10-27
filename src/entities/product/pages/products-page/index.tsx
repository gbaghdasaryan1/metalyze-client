
import { FC, useState } from "react"
import styles from "./style.module.scss"
import { products_mock } from "@shared/constants/products-mock"
import Image from "next/image"


export const ProductsPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products_mock.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>

      <div className={styles.productsPage}>
        <div className={styles.header}>
          <h1>Our Collection</h1>
          <p>Explore our premium selection of men's jewelry</p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <aside className={styles.filters}>
              <h3>Filters</h3>

              <div className={styles.filterGroup}>
                <h4>Category</h4>
                <div className={styles.filterOptions}>
                  <label>
                    <input type="checkbox" />
                    <span>Rings</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Chains</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Bracelets</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Cufflinks</span>
                  </label>
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h4>Material</h4>
                <div className={styles.filterOptions}>
                  <label>
                    <input type="checkbox" />
                    <span>Gold</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Silver</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Stainless Steel</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Titanium</span>
                  </label>
                  <label>
                    <input type="checkbox" />
                    <span>Leather</span>
                  </label>
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h4>Price Range</h4>
                <div className={styles.priceRange}>
                  <input type="number" placeholder="Min" />
                  <input type="number" placeholder="Max" />
                </div>
              </div>
            </aside>

            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image src={product.images[0]} alt={product.name} />
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <div className={styles.productPrice}>${product.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className={styles.noResults}>
                  <p>No products found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

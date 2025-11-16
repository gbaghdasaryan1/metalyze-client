'use client';

import Link from 'next/link';
import styles from './style.module.scss';
import useCartStore from '@entities/cart/model/store';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } =
    useCartStore();
  const router = useRouter();

  const subtotal = getTotal();
  const tax = subtotal * 0.1;
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <>
        <div className={styles.emptyCart}>
          <div className={styles.emptyContent}>
            <svg
              width='80'
              height='80'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
            >
              <circle cx='9' cy='21' r='1' />
              <circle cx='20' cy='21' r='1' />
              <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
            </svg>
            <h1>Your Cart is Empty</h1>
            <p>Add some exceptional pieces to your collection</p>
            <Link href='/products' className={styles.shopButton}>
              Browse Products
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.cartPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Shopping Cart</h1>
            <button onClick={clearCart} className={styles.clearButton}>
              Clear Cart
            </button>
          </div>

          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <Link
                    href={`/product/${item.id}`}
                    className={styles.itemImage}
                  >
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                    />
                  </Link>

                  <div className={styles.itemDetails}>
                    <Link
                      href={`/product/${item.id}`}
                      className={styles.itemName}
                    >
                      {item.name}
                    </Link>
                    <div className={styles.itemMaterial}>{item.material}</div>
                    <div className={styles.itemPrice}>
                      ${item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className={styles.quantityButton}
                        aria-label='Decrease quantity'
                      >
                        −
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className={styles.quantityButton}
                        aria-label='Increase quantity'
                      >
                        +
                      </button>
                    </div>

                    <div className={styles.itemTotal}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className={styles.removeButton}
                      aria-label='Remove item'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <h2>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className={styles.summaryDivider}></div>

              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className={styles.checkoutButton}
                onClick={() => router.push('/checkout')}
              >
                Proceed to Checkout
              </button>

              <Link href='/products' className={styles.continueButton}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

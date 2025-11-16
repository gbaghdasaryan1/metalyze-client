'use client';

import type React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import useCartStore from '@entities/cart/model/store';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = getTotal();
  const tax = subtotal * 0.1;
  const shipping = 15;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <>
        <div className={styles.emptyCheckout}>
          <div className={styles.emptyContent}>
            <h1>Your cart is empty</h1>
            <p>Add items to your cart before checking out</p>
            <button
              onClick={() => router.push('/products')}
              className={styles.shopButton}
            >
              Browse Products
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setStep(3);
  };

  const handleCompleteOrder = () => {
    clearCart();
    router.push('/');
  };

  return (
    <>
      <div className={styles.checkoutPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Checkout</h1>

          <div className={styles.progressBar}>
            <div
              className={`${styles.progressStep} ${
                step >= 1 ? styles.active : ''
              }`}
            >
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepLabel}>Shipping</div>
            </div>
            <div className={styles.progressLine}></div>
            <div
              className={`${styles.progressStep} ${
                step >= 2 ? styles.active : ''
              }`}
            >
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepLabel}>Payment</div>
            </div>
            <div className={styles.progressLine}></div>
            <div
              className={`${styles.progressStep} ${
                step >= 3 ? styles.active : ''
              }`}
            >
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepLabel}>Complete</div>
            </div>
          </div>

          <div className={styles.checkoutContent}>
            <div className={styles.checkoutForm}>
              {step === 1 && (
                <form onSubmit={handleShippingSubmit} className={styles.form}>
                  <h2>Shipping Information</h2>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='firstName'>First Name</label>
                      <input
                        type='text'
                        id='firstName'
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='lastName'>Last Name</label>
                      <input
                        type='text'
                        id='lastName'
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        id='email'
                        required
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='phone'>Phone</label>
                      <input
                        type='tel'
                        id='phone'
                        required
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='address'>Address</label>
                    <input
                      type='text'
                      id='address'
                      required
                      value={shippingInfo.address}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='city'>City</label>
                      <input
                        type='text'
                        id='city'
                        required
                        value={shippingInfo.city}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='state'>State</label>
                      <input
                        type='text'
                        id='state'
                        required
                        value={shippingInfo.state}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            state: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='zipCode'>ZIP Code</label>
                      <input
                        type='text'
                        id='zipCode'
                        required
                        value={shippingInfo.zipCode}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            zipCode: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='country'>Country</label>
                      <input
                        type='text'
                        id='country'
                        required
                        value={shippingInfo.country}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            country: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <button type='submit' className={styles.submitButton}>
                    Continue to Payment
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handlePaymentSubmit} className={styles.form}>
                  <h2>Payment Information</h2>

                  <div className={styles.formGroup}>
                    <label htmlFor='cardName'>Cardholder Name</label>
                    <input
                      type='text'
                      id='cardName'
                      required
                      value={paymentInfo.cardName}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor='cardNumber'>Card Number</label>
                    <input
                      type='text'
                      id='cardNumber'
                      placeholder='1234 5678 9012 3456'
                      required
                      maxLength={19}
                      value={paymentInfo.cardNumber}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardNumber: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor='expiryDate'>Expiry Date</label>
                      <input
                        type='text'
                        id='expiryDate'
                        placeholder='MM/YY'
                        required
                        maxLength={5}
                        value={paymentInfo.expiryDate}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            expiryDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor='cvv'>CVV</label>
                      <input
                        type='text'
                        id='cvv'
                        placeholder='123'
                        required
                        maxLength={4}
                        value={paymentInfo.cvv}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvv: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type='button'
                      onClick={() => setStep(1)}
                      className={styles.backButton}
                    >
                      Back to Shipping
                    </button>
                    <button
                      type='submit'
                      className={styles.submitButton}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Complete Order'}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg
                      width='80'
                      height='80'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                      <polyline points='22 4 12 14.01 9 11.01' />
                    </svg>
                  </div>
                  <h2>Order Complete!</h2>
                  <p>
                    Thank you for your purchase. Your order has been
                    successfully placed.
                  </p>
                  <p className={styles.orderNumber}>
                    Order #JW{Math.floor(Math.random() * 100000)}
                  </p>
                  <p className={styles.confirmationText}>
                    A confirmation email has been sent to {shippingInfo.email}
                  </p>
                  <button
                    onClick={handleCompleteOrder}
                    className={styles.submitButton}
                  >
                    Return to Home
                  </button>
                </div>
              )}
            </div>

            <div className={styles.orderSummary}>
              <h2>Order Summary</h2>

              <div className={styles.summaryItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.summaryItem}>
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                    />
                    <div className={styles.itemInfo}>
                      <div className={styles.itemName}>{item.name}</div>
                      <div className={styles.itemQuantity}>
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className={styles.itemPrice}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.summaryDivider}></div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import styles from './style.module.scss';
import { faq_data } from '../model/constants';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqPage}>
      <div className={styles.hero}>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about our jewelry, orders, and
          services
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.faqList}>
          {faq_data.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.faqItemOpen : ''
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={styles.faqIcon}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <polyline points='6 9 12 15 18 9' />
                </svg>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contactSection}>
          <h2>Still Have Questions?</h2>
          <p>
            Our customer service team is here to help you with any additional
            inquiries.
          </p>
          <div className={styles.contactOptions}>
            <div className={styles.contactCard}>
              <svg
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
              </svg>
              <h3>Call Us</h3>
              <p>1-800-LUMIERE</p>
              <p className={styles.hours}>Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className={styles.contactCard}>
              <svg
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                <polyline points='22,6 12,13 2,6' />
              </svg>
              <h3>Email Us</h3>
              <p>support@lumiere.com</p>
              <p className={styles.hours}>Response within 24 hours</p>
            </div>
            <div className={styles.contactCard}>
              <svg
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
              </svg>
              <h3>Live Chat</h3>
              <p>Chat with our team</p>
              <p className={styles.hours}>Available during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

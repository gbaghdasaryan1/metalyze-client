import Link from "next/link"
import styles from "./style.module.scss"
import { FC } from "react"

export const Navigation: FC = () => {
  return (
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

  )
}

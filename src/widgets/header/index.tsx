import Link from "next/link"
import styles from "./style.module.scss"
import { FC } from "react"
import { Navigation } from "@widgets/navigation"

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Metalyze
        </Link>

        <Navigation/>

        <div className={styles.actions}>
          <button>Search</button>
          <button>Cart (0)</button>
        </div>
      </div>
    </header>
  )
}

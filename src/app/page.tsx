import styles from "./page.module.css"
import { Date } from "./components/Server"

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Date />
      </main>
    </div>
  )
}

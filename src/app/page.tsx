import { FormSection } from "./components/Client"
import { fetchCurrentTime } from "./lib/timeService"
import styles from "./page.module.css"

export const Home = async () => {
  const currentDate = await fetchCurrentTime()

  return (
    <div className={styles.page}>
      <main>
        <FormSection currentDate={currentDate} />
      </main>
    </div>
  )
}

export default Home

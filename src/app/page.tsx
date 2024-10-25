import { Suspense } from "react"
import { FormSection } from "./components/Client"
import { fetchCurrentTime } from "./lib/timeService"
import styles from "./page.module.css"

const Home = async () => {
  const currentDate = await fetchCurrentTime()

  return (
    <div className={styles.page}>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <FormSection currentDate={currentDate} />
        </Suspense>
      </main>
    </div>
  )
}

export default Home

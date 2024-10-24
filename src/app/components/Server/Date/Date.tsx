import { fetchCurrentTime } from "@/app/lib/timeService"
import { FC } from "react"

export const Date: FC<{}> = async (props) => {
  const currentDate = await fetchCurrentTime()
  console.log(currentDate, "dddddd")
  // const {} = props

  return <p>{currentDate}</p>
}

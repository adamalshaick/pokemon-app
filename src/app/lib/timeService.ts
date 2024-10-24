export const fetchCurrentTime = async (apiUrl = "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw") => {
  const res = await fetch(apiUrl)
  console.log(res, "?????")
  //   const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch the time")
  }

  //   const formattedDate = `${data.dayOfWeek}, ${data.day.toString().padStart(2, "0")}.${data.month.toString().padStart(2, "0")}.${data.year}`
  //   const [day, month, year] = formattedDate.split(", ")[1].split(".").map(Number)
  //   const parsedDate = new Date(year, month - 1, day)

  //   const currentDate = new Date(parsedDate)

  //   // Calculate the remaining time until midnight based on the API's current date
  //   const tomorrow = new Date(currentDate)
  //   tomorrow.setUTCDate(tomorrow.getUTCDate() + 1) // Move to the next day
  //   tomorrow.setUTCHours(0, 0, 0, 0) // Set to midnight of the next day

  //   console.log(tomorrow, "tomomomommo")
  //   console.log(currentDate, "cururrurur")

  //   const secondsUntilMidnight = Math.floor((tomorrow - currentDate) / 1000) // Time in seconds
  //   console.log(secondsUntilMidnight, "????")
  return "20"
}

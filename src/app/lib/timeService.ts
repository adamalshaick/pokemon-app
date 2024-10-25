export const fetchCurrentTime = async (apiUrl = "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw") => {
  const res = await fetch(apiUrl, { next: { revalidate: 60 } })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch the time")
  }

  const formattedDate = `${data.dayOfWeek}, ${data.day.toString().padStart(2, "0")}.${data.month.toString().padStart(2, "0")}.${data.year}`
  return formattedDate
}

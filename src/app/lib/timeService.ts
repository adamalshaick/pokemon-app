export const fetchCurrentTime = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TIME_API_URL}?timeZone=Europe/Warsaw`, { next: { revalidate: 60 } })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch the time")
  }

  const formattedDate = `${data.dayOfWeek}, ${data.day.toString().padStart(2, "0")}.${data.month.toString().padStart(2, "0")}.${data.year}`
  return formattedDate
}

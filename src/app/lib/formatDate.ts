export const formatDate = (data: { day: number; month: number; year: number; hour: number; minute: number; seconds: number; dateTime: string; date: string; time: string; timeZone: string; dayOfWeek: string; dstActive: boolean }): string => {
  const formattedDate = `${data.dayOfWeek}, ${data.day.toString().padStart(2, "0")}.${data.month.toString().padStart(2, "0")}.${data.year}`

  return formattedDate
}

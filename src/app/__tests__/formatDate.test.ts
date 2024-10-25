import { formatDate } from "../lib/formatDate"

describe("formatDate", () => {
  it("should format the date correctly for the given input", () => {
    const inputData = {
      year: 2024,
      month: 10,
      day: 25,
      hour: 22,
      minute: 37,
      seconds: 37,
      dateTime: "2024-10-25T22:37:37.9825047",
      date: "10/25/2024",
      time: "22:37",
      timeZone: "Europe/Warsaw",
      dayOfWeek: "Friday",
      dstActive: true
    }

    const expectedOutput = "Friday, 25.10.2024"

    const result = formatDate(inputData)

    expect(result).toBe(expectedOutput)
  })
})

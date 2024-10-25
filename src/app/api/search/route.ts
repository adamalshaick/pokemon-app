import Fuse from "fuse.js"
import { data } from "./resultsMock"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || ""

  if (!query) {
    return new Response(JSON.stringify({ data: [] }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  const fuse = new Fuse(data.data, {
    keys: ["name"],
    threshold: 0.3
  })

  const results = fuse.search(query)

  const filteredResults = results.map((result) => result.item)

  return new Response(JSON.stringify({ data: filteredResults }), {
    headers: { "Content-Type": "application/json" }
  })
}

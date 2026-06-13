import { client } from './client'

// Fallback seguro para reemplazar el módulo "live" incompatible
export const sanityFetch = async ({ query, params = {} }: { query: string, params?: any }) => {
  return await client.fetch(query, params)
}
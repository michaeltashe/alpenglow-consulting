'use client'

import { useParams } from 'next/navigation'
 
export default function Page() {
  const params: Record<string, string> | null = useParams()
  console.log('params', params)
  return <p>Post: {params && params.slug}</p>
}
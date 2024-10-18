'use client'
import Link from 'next/link'
export default function startPage(){

  return(
  <div>
    <h1>Welcome to whatever this is</h1>
    <h2>Spaced Repetition</h2>
    <h3>
        <Link href={'/addCard'} className="standard-button"> Add Card</Link>
    </h3>
  </div>
  )
}
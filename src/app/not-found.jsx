import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h1>You're far from home</h1>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default notFound
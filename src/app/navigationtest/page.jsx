"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const NavigationTestPage = () => {
    // CLIENT SIDE NAV
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const q = searchParams.get("q")

    console.log(q)
    const handleClick = () => {
        console.log('Clicked')
        router.forward()
    }
  return (
    <div>
        <div>
            <Link href="/" prefetch={false}>Click Here</Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    </div>
  )
}

export default NavigationTestPage
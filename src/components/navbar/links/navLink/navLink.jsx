"use client"
import { usePathname } from 'next/navigation'
import styles from './navLink.module.css';
import Link from 'next/link'

const NavLink = ({item}) => {
    const pathname = usePathname()
    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>{item.title}</Link>
    )
}

export default NavLink
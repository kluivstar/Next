"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import Image from "next/image";
import styles from './links.module.css'
import NavLink from "./navLink/navLink";
//import { handleLogout } from "@/lib/action";

const links = [
    {
    title: "Homepage",
    path: "/",
    },
    {
    title: "About",
    path: "/about",
    },
    {
    title: "Contact",
    path: "/contact",
    },
    {
    title: "Blog",
    path: "/blog",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false)
    // Temporary
    const session = true
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
            {links.map((link) => (
            <NavLink item={link} key={link.title} />
            ))}
            {session ? (
                <>
                    {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                    <button className={styles.logout}>Logout</button>
                    {/*
                    <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>
                    **/}
                </>
            ) : (
                <NavLink item={{title: "Login", path: "/login"}}/>
            )}
            </div>
             {/*
            <Image
                className={styles.menuButton}
                src='menu.png'
                alt=''
                width={30}
                height={30}
                onClick={()=> setOpen((prev)=> !prev)}
            />
            **/}

            {/** Mobile Menu */}
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} >Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) =>(
                        <NavLink item={link} key={link.title}/>
                    ))}
                </div>
            )}
                
        </div>
    )
}

export default Links
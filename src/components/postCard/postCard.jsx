import Image from "next/image";
import styles from './postCard.module.css'
import Link from "next/link";

import React from 'react'

const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>1100</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Just a mock description</p>
            <Link href='/blog/post' className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default postCard
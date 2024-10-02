import React from 'react'
import styles from './singlePostPage.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className={styles.img}/>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail} >
          <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={50} height={50} className={styles.avatar}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>TT</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.01</span>
          </div>
          
        </div>
        <div className={styles.content}>
            Jst more mock text, will be replaced with actual content soon...
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        themedia
      </div>
      <div className={styles.text}>The media creative agency, All rights reserved</div>
    </div>
  )
}

export default Footer
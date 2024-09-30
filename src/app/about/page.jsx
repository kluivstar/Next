"use-client"
import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
    title: "About Page",
    description: "About Description"
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About The Media</h2>
        <h1 className={styles.title}>A creative, focused and result driven initiative</h1>
        <p className={styles.desc}>The build an transform digital thoughts into scalable profitable business model, where prospect wellbeing comes first, we are The Media Creative. We've had a 10 year run of collaborating with startup, turning them in established successful companies.</p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 years +</h1>
            <p>How long weve doing this</p>
          </div>

          <div className={styles.box}>
            <h1>Total companies</h1>
            <p>122</p>
          </div>

          <div className={styles.box}>
            <h1>8 Countires</h1>
            <p>Offices in</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" layout="fill" />
      </div>
    </div>
  )
}

export default About
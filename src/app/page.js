import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Img */}
      <div className={styles.textContainer}>
          <h1 className={styles.title}>Result Driven Tech Solutions</h1>
          <p className={styles.desc}>Result focused, lead converting web application built to scale and elevate your business to greater heights.</p>

          <div className={styles.buttons}>
            <button className={styles.button}>Explore</button>
            <button className={styles.button}>Reach Out</button>
          </div>
          
          <div className={styles.brands}>
            <Image alt="hi" src="/brands.png" layout="fill" className={styles.brandImg}/>
          </div>  
      </div>

      {/* Hero Img */}
      <div className={styles.imgContainer}>
        <Image alt="hi" src="/hero.gif" layout="fill" className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default Home
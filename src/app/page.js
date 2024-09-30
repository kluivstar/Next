import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Img */}
      <div className={styles.textContainer}>
          <h1 class={styles.title}>Result Driven Tech Solutions</h1>
          <p class={styles.desc}>Result focused, lead converting web application built to scale and elevate your business to greater heights.</p>

          <div class={styles.buttons}>
            <button className={styles.button}>Explore</button>
            <button className={styles.button}>Reach Out</button>
          </div>
          
          <div className={styles.brands}>
            <Image src="/brands.png" layout="fill" className={styles.brandImg}/>
          </div>  
      </div>

      {/* Hero Img */}
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" layout="fill" className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default Home
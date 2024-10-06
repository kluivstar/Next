import Image from "next/image";
import styles from './postCard.module.css'
import Link from "next/link";

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>1121</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.id}`} className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default postCard
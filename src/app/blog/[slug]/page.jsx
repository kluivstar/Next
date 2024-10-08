import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if(!res.ok){
    throw new Error('Something went wrong')
  } 
  return res.json()
}

const SinglePostPage = async({params}) => {

  const {slug} = params
  const post = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className={styles.img}/>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail} >
          <Image src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={50} height={50} className={styles.avatar}/>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/></Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.01</span>
          </div>
          
        </div>
        <div className={styles.content}>
            {post.body}
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage
import styles from './singlePostPage.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'
import {getPost} from '@/libs/data'

// Fetch Data With API
{/**
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if(!res.ok){
    throw new Error('Something went wrong')
  } 
  return res.json()
}
** */}
// Dynamic description for post - SEO
export const generateMetadata = async({params}) => {
  const {slug} = params
  const post = await getPost(slug)
  
    return {
      title: post.title,
      description: post.desc
    }
}
const SinglePostPage = async({params}) => {
  const {slug} = params
  // Fetch Data With API
 
  //const post = await getData(slug)

  // Fetch Data Without An API
  const post = await getPost(slug)
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
        <Image width={450} 
            height={350}  src={post.img} alt="" className={styles.img}/>
      </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail} >
          
            {/**If theres a post following component is called */}
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/></Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
          
        </div>
        <div className={styles.content}>
            {post.desc}
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import {getPosts} from '@/libs/data'

// Fetch Data With API
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}})

    if(!res.ok){
      console.log(error)
      throw new Error('Something went wrong')
    } 
    return res.json()
}
const BlogPage = async () => {
  // Fetch Data With API
  const posts = await getData()

  // // Fetch Data Without An API
  //const posts = await getPosts()
  return (
    <div className={styles.container}>
      {posts.map((post)=> (
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
      
    </div>
  )
}

export default BlogPage
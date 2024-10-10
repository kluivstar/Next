import React from 'react'
import styles from './postUserModule.css'
import { getPosts, getUser } from '@/libs/data'
import Image from 'next/image'

// Fetch Data With API
{/** 
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"})
    if(!res.ok) {
        throw new Error('Somethings up')
    } return res.json()
}
*/}
const PostUser = async ({userId}) => {
    
    //Fetch Data With API
    //const user = await getData(userId)

    const user = await getUser(userId)
    return (
        <div className={styles.container}>
            <Image
            width={50} 
            height={50} 
            className={styles.avatar} 
            src={user.img ? user.img : '/noavatar.png'}alt="" />
            <div className={styles.texts}>
                <span className={styles.title}>Author : </span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
    }

export default PostUser
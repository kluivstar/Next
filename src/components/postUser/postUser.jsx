import React from 'react'
import styles from './postUserModule.css'

// Fetch Data With API
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"})
    if(!res.ok) {
        throw new Error('Somethings up')
    } return res.json()
}

const postUser = async ({userId}) => {
    
    //Fetch Data With API
    const user = await getData(userId)
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author : </span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
    }

export default postUser
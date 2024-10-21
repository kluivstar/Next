 "use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import {signIn, signOut} from './auth'
import bcrypt from 'bcryptjs'

//  Server Action Functions -  handle server-side operations related to managing blog posts
export const addPost = async(formData) => {
    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")

    // create new post
    const {title, desc, slug, userId} = Object.fromEntries(formData)
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug, 
            userId
        })
        // save new post to database
        await newPost.save()
        // fetches updated data when the page is accessed
        revalidatePath('/blog')
    } catch (err) {
        console.log(err)
        return {error: "Error"}
    }
}

export const deletePost = async(formData) => {
    // Extracting the 'id' from formData using Object.fromEntries
    const {id} = Object.fromEntries(formData)

    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        revalidatePath('/blog')
    } catch (err) {
        console.log(err)
        return {error: "Error"}
    }
}
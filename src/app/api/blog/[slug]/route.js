import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

// Folder structure is a dynamic API route, [slug] indicate route is dynamic and will match any URL segments after api/blog

// Route Handler Functions for API request related to specific blog post id'd by its slug
export const GET = async(request, {params}) => {
    const {slug} = params
    try {
        connectToDb()
            const post = await Post.findOne({slug})
            return NextResponse.json(post)
    } catch(error){
        throw new Error("Error")
    }
    
}

export const DELETE = async(request, {params}) => {
    const {slug} = params
    try {
        connectToDb()
           await Post.deleteOne({slug})
            return NextResponse.json('Post deleted')
    } catch(error){
        throw new Error("Error")
    }
    
}
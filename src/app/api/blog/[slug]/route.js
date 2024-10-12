import { Post } from "@/libs/models"
import { connectToDb } from "@/libs/utils"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {
    const {slug} = params
    try {
        connectToDb()
            const post = await Post.findOne(slug)
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
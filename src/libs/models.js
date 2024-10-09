const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,    // Username is required
        unique: true,      // Ensure the username is unique
        trim: true,        // Removes whitespace from the beginning and end of the string
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,    // Email is required
        unique: true,      // Ensure the email is unique
        lowercase: true,   // Converts email to lowercase
        max: 50
    },
    password: {
        type: String,
        required: true,    // Password is required
        min: 6
    },
    img: {
        type: String,      // URL or path to the user's profile image
       
    },
    isAdmin: {
        type: Boolean,     // Boolean to track if the user is an admin
        default: false     // Default is set to `false`
    },
}, { timestamps: true }); // Adds `createdAt` and `updatedAt` timestamps automatically

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ''
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
}, { timestamps: true });


// Create the user model from the schema
export const User = mongoose.models.User || mongoose.model('User', UserSchema);

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
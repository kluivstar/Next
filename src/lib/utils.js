const { default: mongoose } = require("mongoose")

// Object to hold connection state
const connection = {}
export const connectToDb = async () => {
    try {
        // Checks if we are already connected
        if(connection.isConnected){
            console.log("Using existing connec")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO)
        // Store the connection state
        connection.isConnected = db.connections[0].readyState
        console.log("Connected to DB")
    } catch(error){
        console.log(error)
        throw new Error(error)
    }
}
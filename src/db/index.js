import mongoose from "mongoose"

// mongoose.connect(process.env.MONGO_URL)  -- NOT A GOOD WAY OF WRITING THIS

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("✅ MongoDB connected")
    } catch(error) {
        console.error("❌ MongoDB connecttion error", error)
        process.exit(1)
    }
}


export default connectDB
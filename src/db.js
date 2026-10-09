import mongoose from "mongoose"

export const run = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log('database Connected Successfully!')
    } catch (error) {
        console.log(error)
    }
}
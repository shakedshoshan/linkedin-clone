import mongoose from 'mongoose'
import { env } from 'process';

const commenctDB = async () => {
    if(mongoose.connection?.readyState>=1){
        console.log('DB is already connected')
        return
    }

    try{
        await mongoose.connect(env.MONGODB_SECRET_KEY as string);
    } catch (error) {
        console.error(`Error connecting to DB:`, error);
    }
    
}



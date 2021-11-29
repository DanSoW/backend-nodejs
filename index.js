import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Post from './models/Post.js';
import router from './router.js';
import fileUpload from 'express-fileupload';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function main(){
    try{
        await mongoose.connect(process.env.DB_URL,
            {
                useUnifiedTopology: true
            }
        );
        app.listen(process.env.PORT, () => {
            console.log("Hello, world");
        });
    }catch(e){
        console.log(e);
    }
}

main();

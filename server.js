require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connectDB')
const memberRouter = require('./routes/form.route')

const server = express();
server.use(
    express.json()
)


server.use('/member', memberRouter)


const uri = process.env.MONGO_URI
const port = process.env.PORT || 3004

const start = async() =>{
    await connectDB(uri);
    server.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    })
}


start()





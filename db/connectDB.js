const mongoose = require('mongoose')

const connectDB = (uri) =>{
    try{
        return mongoose.connect(uri)
    }catch(err){
        console.log(err);
    }
}



module.exports = connectDB
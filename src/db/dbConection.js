const mongoose = require('mongoose')

const mongooseDB = () => {
    mongoose.connect('mongodb+srv://Ansh01:sWydAQRGaeacHGEO@ansh01.fwanzya.mongodb.net/').
    then((res)=>{
        if(res){
            console.log('DATABASE IS CONNECTED...');
        }
    }).catch((err)=>{
        if(err){
            console.log('DATABASE IS NOT-CONNECTED...');
        }
    })
}

module.exports = mongooseDB
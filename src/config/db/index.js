import mongoose from 'mongoose';
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/APIforcrytoplanet');
        console.log('connect successfully !!');
    }catch(err){
        console.log('connect failure !!');
    }
}

export default connect;
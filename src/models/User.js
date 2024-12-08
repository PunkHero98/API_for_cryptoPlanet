import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    email: {type: String , maxLength: 255 },
    password: {type: String , maxLength: 255},
    dateOfBirth: {type: String , default: ''},
    country: {type: String ,  default: ''},
    validate_code: {type: Boolean , default: false},
    createAt: {type: Date , default: Date.now},
    updateAt: {type: Date , default: Date.now},
});

const User = mongoose.model('User', user);


const addUser = async (data) =>{
    try{
        const newUser = new User(data);
        const saveUser = await newUser.save();
        return saveUser;
    }catch(err){
        console.error('Error creating user: ' , err.message)
    }
};

const getAllUser = async ()=>{
    try{
        const users = await User.find();
        return users;
    }catch(err){
        console.error('Error fetching users: ' , err.message)
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
    }
};

const updateUser = async (email, updateData) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email }, // Điều kiện tìm kiếm
            updateData, // Dữ liệu cập nhật
            { new: true } // Trả về bản ghi đã cập nhật
        );
        console.log('Updated user:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error.message);
    }
};

const deleteUser = async (email) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email });
        console.log('Deleted user:', deletedUser);
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error.message);
    }
};
export default User;
export {addUser , getAllUser ,getUserByEmail};
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../models/User.js';
export default new (class LoginController {
    async login(req , res){
        try{
            const {email , password} = req.body;
            const user = await getUserByEmail(email);

            const haspasword = await bcrypt.hash(password , 10);
            const result = await bcrypt.compare(haspasword , user.password);
            if(result){
                return res.send(false);
            }
            return res.send(user);
        }catch(err){
            res.status(500).send('Error: ' , err.message);
        }
    }
})
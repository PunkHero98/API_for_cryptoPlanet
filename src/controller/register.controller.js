import { addUser ,getUserByEmail } from "../models/User.js";
import bcrypt from 'bcrypt';
export default new (class RegisterController {
 async register(req, res) {
    try{
      const { password, email , country , phone , dateOfBirth } = req.body;
      const hashpassword = await bcrypt.hash(password , 10)
      const result = await addUser({
        email: email , 
        password: hashpassword, 
        country: country,
        dateOfBirth: dateOfBirth,
        phone: phone,
      })
      console.log(result)
      res.send(result);
    }catch (err){
      res.status(500).send('Error: ' , err.message);
    }
  }

  async validate(req , res){
    try{
      const {email} = req.body;
      const result = await getUserByEmail(email);
      console.log(result);
      if(!result) return res.send(false);
      return res.send(true);
    }catch(err){
      res.status(500).send(`Error: ${err.message}`);
    }
  }
})();

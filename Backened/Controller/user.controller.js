import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup=async(req,res)=>{
 try {
  const {fullname,email,password}=req.body;
  const user=await User.findOne({email})
  if(user){
   return res.status(400).json({message:"User already exists"})
  }
  const hashPassword=await bcryptjs.hash(password,10)
  const CreatedUser=new User({
   fullname:fullname,
   email:email,
   password:hashPassword,
  })
  await CreatedUser.save()
  res.status(201).json({message:"User created Successfully",user:{_id:CreatedUser._id,
   fullname:CreatedUser.fullname,
   email:CreatedUser.email,
  }})
 } catch (error) {
  console.log('Error: '+error.message)
  res.status(500).json({message:'internal server error'})
 }
}

export const login = async (req, res) => {
 try {
   const { email, password } = req.body;

   // Check if user exists
   const user = await User.findOne({ email });
   if (!user) {
     return res.status(400).json({ message: 'Invalid Username or Password' });
   }

   // Check if the password matches
   const isMatch = await bcryptjs.compare(password, user.password);
   if (!isMatch) {
     return res.status(400).json({ message: 'Invalid Username or Password' });
   }

   // If login is successful
   return res.status(200).json({
     message: 'Login Successful',
     user: {
       _id: user._id,
       fullname: user.fullname,
       email: user.email,
     },
   });

 } catch (error) {
   console.log('Login error:', error.message);
   res.status(500).json({ message: 'Internal Server Error' });
 }
};
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

 
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

 
  

const register = async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword, course } = req.body;

    
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

   
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    
    const newUser = new User({
      firstName,
      email,
      password,
      course
    });

 
    await newUser.save();

    res.status(201).json({
      msg: "Registration Successful",
      userId: newUser._id
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

 
 


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    
    const user= await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password " });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


 



module.exports = { home, register, login };
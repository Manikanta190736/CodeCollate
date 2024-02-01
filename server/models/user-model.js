const mongoose=require("mongoose");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required:true, 
    },
    email:{
        type: String,
        required:true, 
    },
    phone:{
        type: String,
        required:true, 
    },
    password:{
        type: String,
        required:true, 
    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
});


//? secure password.   pre method
// data base me save hone se pehle yeh middleware run hoga then database me entry hogi username,email and all

userSchema.pre("save", async function () {
  const user = this;
  console.log("actual data ", this);

  if (!user.isModified) {
    return next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    return next(error);
  }
});



  



  //json web token 
  //INSTANCE METHOD
  userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };


  userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


//define model name or collection
 const User = new mongoose.model("User", userSchema);
 module.exports=User;
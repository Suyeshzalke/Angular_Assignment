import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  address:{
    addressline1:{type:String},
    addressline2:{type:String},
    state:{type:String},
    city: {type:String}
  }
 ,
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});
const userdata = mongoose.model("user", userSchema);

export default userdata;

import user from "../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { sendmail } from "../Middleware/sendmail";



export const usersignup = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      addressline1,
      addressline2,
      city,
      state,
      phone,
      email,
    } = req.body;
    const addUser = new user({
      firstname,
      lastname,
      address: {
        addressline1,
        addressline2,
        city,
        state,
      },
      phone,
      email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const result = await addUser.save();
    if (result) {
      let payload = {};
      payload._id = result._id;

      jwt.sign(
        payload,
        "SECRET_KEY",
        {
          expiresIn: "24h",
        },
        (err, token) => {
          res.send({
            token: token,
            status: true,
            statusCode: 200,
            message: "Registerd Successfully",
            result: result,
          });
        }
      );
    }
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await user.findOne({ email });
    if (!result) {
      res.send({
        status: false,
        message: "Email is Incorrect!!!",
      });
    }

    const isValid = bcrypt.compareSync(password, result.password);

    if (isValid) {
      let payload = {};
      payload._id = result._id;

      jwt.sign(
        payload,
        "SY",
        {
          expiresIn: "24h",
        },
        (err, token) => {
          res.send({
            token: token,
            status: true,
            statusCode: 200,
            message: "Succesfully",
            result: result,
          });
        }
      );
    } else {
      res.send({ status: false, message: "Do not match Password" });
    }

    

  } catch (error) {
    throw error;
  }
};




  export const updateuser = async (req, res) => {
    try {
      let jsondata = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address:{
          addressline1: req.body.addressline1,
          // addressline2: req.body.addressline2,
          city: req.body.city,
          state: req.body.state,
        },
        phone: req.body.phone,
      };
      const data = await user.findByIdAndUpdate(
        { _id: mongoose.Types.ObjectId(req.body._id) },
        { $set: jsondata },
        { new:true }
      );
      if (!data) {
        res.send({
          
          message:"Update unsuccess",
          result: data,
        });
      } else {
        res.send({
          status: true,
          message: "Update ok",
          result: data,
        });
      }
    } catch (error) {
      throw error;
    }
  };
  

  export const singleuser=async(req,res)=>{

    console.log(req.body._id)
  
      const result = await user.findOne({
          _id:mongoose.Types.ObjectId(req.body._id)
      });
  
      res.send({
          status:true,
          message:" Successfully",
          result:result
      })
  }





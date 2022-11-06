import express from "express";
import {usersignup,userLogin,singleuser,updateuser,forgetpassword,rstpassword} from '../controller/user';
import { CheckMail } from "../Middleware/Checkmail";

const router = express.Router();
router.post("/usersignup",CheckMail,usersignup);
router.post("/userLogin",userLogin);
router.post("/updateuser",updateuser);
router.put("/singleuser", singleuser);




// router.post("/adminSignup",adminSignup)


export default router;
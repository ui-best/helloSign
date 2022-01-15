const express = require("express");
const userRouter = express.Router();

const { userLogin, userSignup, updateDetails ,protectRoute, getUser} = require("../Controller/userController");

userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.use(protectRoute);
userRouter.post("/getuser",getUser)
userRouter.patch("/updateDetails",updateDetails);


module.exports = userRouter;

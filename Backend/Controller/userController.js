const jwt = require("jsonwebtoken");
const { progressModel } = require("../Model/progressModel");
const { userModel } = require("../Model/userModel");
const SECRET_KEY = process.env.SECRET_KEY;

async function getUser(req, res) {
  try {
    let user = await userModel.find({ email: req.email });
    res.status(200).json({
      message: "user data",
      data: user
    })
  } catch (err) {
    res.status(501).json({
      message: "failed to get user data",
      error: err
    })
  }
}

async function userSignup(req, res) {
  try {
    let user = req.body;
    let newUser = await userModel.create({
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      dp:user.dp
     });
     let newProgress = await progressModel.create({
       email:user.email,
       progess:[]
     })
    const token = jwt.sign({ id: newUser["_id"], email:user.email }, SECRET_KEY);

    res.status(200).json({
      message: "Succesfully Signed up !!",
      data: newUser,
      token
    });
  } catch (error) {
    res.status(500).json({
      message: "Email is already registered!!",
      error,
    });
  }
}

async function userLogin(req, res) {
  try {
    let { email, password } = req.body;
    let loggedInUser = await userModel.find({ email: email });
    if (loggedInUser.length) {
      let user = loggedInUser[0];
      if (user.password == password) {
        const token = jwt.sign({ id: user["_id"], role: "user", email:user.email }, SECRET_KEY);
        res.status(200).json({
          message: "Logged in succesfully !!",
          data: loggedInUser[0],
          token:token
        });
      } else {
        res.status(200).json({
          message: "Email and Password didn't Matched !!",
        });
      }
    } else {
      res.status(200).json({
        message: "No User Found SignUp First",
      });
    }
  } catch (error) {
    res.status(200).json({
      message: "Login Failed !!",
      error,
    });
  }
}

async function updateDetails(req, res) {
  try {
    let user = await userModel.findById(req.id);
    for (key in req.body) {
      user[key] = req.body[key];
    }
    user.save();
    res.status(200).json({
      mess: "Successfully updated details",
      data: user
    })

  } catch (err) {
    res.status(500).json({
      mess: "failed to update",
      data: changesObj
    })
  }
}

async function protectRoute(req, res, next) {
  try {
    const token = req.body.jwt;
    const payload = jwt.verify(token, SECRET_KEY);
    if (payload) {
      req.id = payload.id;
      req.email = payload.email
      next();
    } else {
      res.status(501).json({
        message: "Please Log in !!",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: "Please Log in !!",
      error,
    });
  }
}





module.exports.userSignup = userSignup;
module.exports.userLogin = userLogin;
module.exports.getUser = getUser;
module.exports.updateDetails = updateDetails;
module.exports.protectRoute = protectRoute;

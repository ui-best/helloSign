const express = require("express");
const { addProgress, getProgress } = require("../Controller/progressController");
const { protectRoute } = require("../Controller/userController");
const progressRouter = express.Router();

progressRouter.use(protectRoute);
progressRouter.post("/getprogress", getProgress)
progressRouter.post("/addprogress", addProgress)



module.exports = progressRouter;

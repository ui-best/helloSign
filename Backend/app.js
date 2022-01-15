require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const userRouter = require("./Router/userRouter");
const progressRouter = require("./Router/progressRouter");
const { callHandler } = require("./Controller/callController");
const { protectRoute } = require("./Controller/userController");
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use("/user", userRouter);
app.use("/progress", progressRouter);
app.post("/call", callHandler);
app.get("/connect", (req, res) => {
  res.render("call.ejs");
});

let port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("server started at port 3000");
});

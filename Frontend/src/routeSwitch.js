import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/Webcam.js/App";
import Login from "./pages/Login/login";
import React from "react";
import Homepage from "./pages/Homepage/homepage";
import Navbar from "./components/navbar";
import Register from "./pages/Register/register";
import Dashboard from "./pages/DashBoard/Dashboard";
import { useDispatch } from "react-redux";
import authServices from "./Services/authServices";
import { userAddData } from "./Redux/Actions/user";
import Lesson from "./pages/Lesson/Lesson";
import Quiz from "./pages/Quiz/Quiz";
import Profile from "./pages/profile/profile";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Donation from "./pages/Donation/Donation";
const RouteSwitch = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    authServices
      .getUser({ token })
      .then((data) => {
        console.log(data.data[0]);
        dispatch(userAddData(data.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lessons" element={<Lesson />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/app" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

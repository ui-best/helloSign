import React from "react";
import Icon from "../Assets/icon.png";
import Medal from "../Assets/medal.png";
import Apple from "../Assets/apple.png";
import Expert from "../Assets/expert.png";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Profile = () => {

  const user = useSelector(state => state.user)

  return (
    <div>
      <div className={styles.block}>
        <Avatar alt={user?.name} src={user.dp ? user.dp : Icon}
          sx={{
            height: "200px",
            width: "200px"
          }} />
        <div className={styles.info}>
          <h2 style={{ marginBottom: "10px" }}>{user.name}</h2>
          <p style={{ marginBottom: "5px" }}>{user.email}</p>
          <p>{user.phone}</p>
          <br />
          <Link to='/leaderboard'>
          <button className={styles.btn}>
            Leaderboard
          </button>
          </Link>
        </div>
      </div>
      <div className={[styles.achievement, "custom_scrollBar"].join(" ")}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1 className={styles.important}>Medals</h1>

            <div
              style={{ backgroundColor: "rgba(185, 207, 223, 0.76)", borderRadius: "20px" }}
              className={styles.bannerrow}
            >
              <img src={Medal} alt="medal"/>
              <div className={styles.column}>
                <h2>Champion</h2>
                <p>Master 1 course</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgba(186, 223, 185, 0.8)", borderRadius: "20px" }}
              className={styles.bannerrow}
            >
              <img src={Apple} alt="apple"/>
              <div className={styles.column}>
                <h2>Top Student</h2>

                <p>Laern 3 lessons</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#FFC6C6", borderRadius: "20px" }}
              className={styles.bannerrow}
            >
              <img src={Expert} alt="rock"/>
              <div className={styles.column}>
                <h2>Expert</h2>
                <p>Pass 2 quizzes</p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.important}>Achievements</h1>
            <div className={styles.achievementBar}>
              <h3>3 day streak</h3>
              <div className={styles.Bars}></div>
            </div>
            <div className={styles.achievementBar}>
              <h3>1 week streak</h3>
              <div className={styles.Bars} style={{width:"40%"}}></div>
            </div>
            <div className={styles.achievementBar}>
              <h3>2 week streak</h3>
              <div className={styles.Bars} style={{width:"20%"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

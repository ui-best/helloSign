import React from "react";
import styles from "./Leaderboard.module.css";
//import icon from ".././Assets/icon.png";
import medal from ".././Assets/medal.png";
import expert from ".././Assets/expert.png";
import apple from ".././Assets/apple.png";
import video from ".././Assets/video.png";
import { Avatar } from "@mui/material";
import axios from "../../Services/axios";
import icon1 from ".././Assets/Avatars Default with Backdrop.png";
import icon2 from ".././Assets/Avatars Default with Backdrop-1.png";
import icon3 from ".././Assets/Avatars Default with Backdrop-2.png";
import icon4 from ".././Assets/Avatars Default with Backdrop-3.png";
import icon5 from ".././Assets/Avatars Default with Backdrop-4.png";
import icon6 from ".././Assets/Avatars Default with Backdrop-5.png";
import icon7 from ".././Assets/Avatars Default with Backdrop-6.png";
import icon8 from ".././Assets/Avatars Default with Backdrop-7.png";
import icon9 from ".././Assets/Avatars Default with Backdrop-8.png";
import icon10 from ".././Assets/Avatars Default with Backdrop-9.png";

const Leaderboard = () => {
  let LeaderboardArr = [
    ["1st", icon1, "Jane", "@asfljkwe"],
    ["2nd", icon2, "Rob", "@sdfgjkl"],
    ["3rd", icon3, "Anna", "@awefnkl"],
    ["4th", icon4, "Billy", "@fbsdjio"],
    ["5th", icon5, "Kate", "@ergnkl"],
  ];
  let frinedArr = [
    [icon6, "Jill", "@38afdka"],
    [icon7, "John", "@dflaweefh"],
    [icon8, "Jean", "@adfawji2"],
    [icon9, "Grace", "@afd3hsea"],
    [icon10, "Bob", "@afasdw4"],
  ];

  const clickHandler = async () => {
    try {
      let data = await axios.post("/call");
      console.log(data.data.link);
      window.location.href = data.data.link;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.head}>Leaderboard</div>
          {LeaderboardArr.map((data) => (
            <div className={styles.Lrow}>
              <div className={styles.rank}>{data[0]}</div>
              <div className={styles.icon}>
                <Avatar
                  src={data[1]}
                  sx={{ height: "60px", width: "60px" }}
                ></Avatar>
              </div>
              <div className={styles.details}>
                <div className={styles.name}>{data[2]}</div>
                <div className={styles.id}>{data[3]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.heading}>
            <div className={styles.Subhead}>Friends</div>
            <div className={styles.Btn}> Add Friend</div>
          </div>
          {frinedArr.map((data) => (
            <div className={styles.Rrow}>
              <Avatar
                src={data[0]}
                sx={{ height: "60px", width: "60px" }}
              ></Avatar>
              <div className={styles.details}>
                <div className={styles.name}>{data[1]}</div>
                <div className={styles.id}>{data[2]}</div>
              </div>
              <div className={styles.badges}>
                <div
                  className={styles.badge}
                  style={{ backgroundColor: "#FFC6C6" }}
                >
                  <img src={medal}></img>
                </div>
                <div
                  className={styles.badge}
                  style={{ backgroundColor: "#BADFB9" }}
                >
                  <img src={expert}></img>
                </div>
                <div
                  className={styles.badge}
                  style={{ backgroundColor: "#CADBE7" }}
                >
                  <img src={apple}></img>
                </div>
              </div>

              <div
                className={styles.call}
                style={{ backgroundColor: "#CADBE7" }}
              >
                <Avatar
                  src={video}
                  sx={{ height: "50px", width: "50px" }}
                  onClick={clickHandler}
                ></Avatar>
              </div>
              <div className={styles.unfriend}>Unfriend</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;

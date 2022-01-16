//import { Typography } from "@mui/material";
import React from "react";
import styles from "./DashboardCard.module.css";
import { Link, useNavigate } from "react-router-dom";
function DashboardCard({ data ,idx}) {
  let navigate = useNavigate();
  let done = localStorage.getItem("done"+idx);

  return (
    <div className={styles.card} style={{ backgroundColor: data.bk }}>
      <div className={styles.front}>
        <h3>{data.name}</h3>
        <img alt="a" src={data.img} className={styles.bk_img} />
      </div>
      <div className={styles.back}>
        {done && <div style={{textAlign:"center"}}>You have mastered this course!!</div>}
        <div className={styles.subHead} onClick={()=>{
          localStorage.setItem("lessonIdx", idx)
          navigate('/lessons')
        }}>
          Learn a Lesson
        </div>

        <div className={styles.subHead}>
          <Link to="/quiz">Take a Quiz</Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./homepage.module.css";
const Homepage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className={style.homepageWrapper}>
        <div className={style.info}>
          <div className={style.heading}>
            Expand your children’s knowledge with ASL
          </div>
          <div className={style.text}>
            helloSign is an online e-learning tool to teach your kids ASL. We
            want to make learning fun! Earn badges and prizes after completing
            lessons and quizzes.
          </div>
          <Link to={user?.name ? "/dashboard" : "/login"}>
            <div className={style.btn}>Get Started</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;

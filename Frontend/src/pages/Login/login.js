import React, { useState } from "react";
import bkImg from '../Assets/Login.png'
import styles from "./login.module.css";
import { Link } from 'react-router-dom'
import authServices from '../../Services/authServices'
import { useDispatch } from "react-redux";
import { userAddData } from "../../Redux/Actions/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const submitBtnHandler = async () => {
    try {
      let data = await authServices.login({  password,email })
      localStorage.setItem("token", data.token);
      console.log(data)
      dispatch(userAddData(data.data));
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.login_wrapper}>
      {/* <img src={bkImg} alt="img" className={styles.bkImg} /> */}
      <div className={styles.wrapper}>
        <div>
          <h1>Please Log In</h1>
          <h5 style={{ marginBottom: "10px" }}>Please login to continue.</h5>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <Link to='/login'>
            <div className={styles.btn}> Login</div>
          </Link>
          <Link to='/register' >
            <div className={styles.btn}> Sign Up</div>
          </Link>
        </div>

        <div className={styles.creds} >
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
            <div className={styles.btn} onClick={submitBtnHandler}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

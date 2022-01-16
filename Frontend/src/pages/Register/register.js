import React, { useState } from "react";
import bkImg from '../Assets/Register.png'
import styles from "./register.module.css";
import { Link } from 'react-router-dom'
import authServices from '../../Services/authServices'
import { useDispatch } from "react-redux";
import { userAddData } from "../../Redux/Actions/user";
import { useNavigate } from "react-router-dom";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [dp, setDP] = useState();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(storage.ref)
  const submitBtnHandler = async () => {
    try {
      
      const storageRef = ref(storage, `/dp/${dp.name}/${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, dp);
      uploadTask.on('state_changed', fn1, fn2, fn3);
      function fn1(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }
      function fn2(error) {
        console.log(error)
      }
      async function fn3() {
        getDownloadURL(uploadTask.snapshot.ref).then(async url => {
          let data = await authServices.register({ name, password, phone, dp: url, email })
          localStorage.setItem("token", data.token);
          dispatch(userAddData(data.data));
          localStorage.setItem("lesson","1");
          navigate('/dashboard')

        })
      }
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div className={styles.login_wrapper}>
      {/* <img src={bkImg} className={styles.bkImg} alt="img"/> */}
      <div className={[styles.wrapper,"custom_scrollBar"].join(" ")}>
        <div>
          <h1>Please Register</h1>
          <h5 style={{ marginBottom: "10px" }}>Please register to continue.</h5>
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
            <p>Name</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <p>Phone</p>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            <p>Profile Pic</p>
            <input type="file" style={{ border: 'none', padding: '0', height: '25px' }} onChange={(e) => setDP(e.target.files[0])} />
          </label>
          <div>
            <div className={styles.btn} onClick={submitBtnHandler}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

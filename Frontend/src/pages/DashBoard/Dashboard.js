//import { CardTravelSharp } from "@mui/icons-material";
import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import styles from "./Dashboard.module.css";
import img1 from "../Assets/Dashboard_card1.png"
import img2 from "../Assets/Dashboard_card2.png"
import img3 from "../Assets/Dashboard_card3.png"
import { useSelector } from "react-redux";
const Dashboard = () => {
  const user = useSelector(state => state.user)
  let cards = [{ name: "the Alphabets", img: img1, learn: "", quiz: "", bk:"rgba(185, 207, 223, 0.35)" },
  { name: "the Basics", img: img2, learn: "", quiz: "", bk:"rgba(186, 223, 185, 0.8)" },
  { name: "the Nouns", img: img3, learn: "", quiz: "",bk:"#E2A9A9" }]

  return (
    <main>
      <div className={styles.intro}>
        <h1>Hello, {user.name}</h1>
      </div>
      <h2 className={styles.subHead}>Select a course!</h2>
      <section className={[styles.presentation, "custom_scrollBar"].join(" ")}>
        {cards.map((card, idx) => <DashboardCard key={idx} data={card} idx={idx}/>)}
      </section>
    </main>
  );
};

export default Dashboard;

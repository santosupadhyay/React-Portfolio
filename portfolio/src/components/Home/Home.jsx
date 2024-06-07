import React from "react";
import "./Home.css";
import Santosh from "../../../public/images/santosh.png";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="info" style={{zIndex:'10'}}>
          <div className="main-circle">
            <img
              src={Santosh}
              alt=""
              style={{ height: "800px" }}
            />
          </div>
          <div className="description">
            <h1
              style={{
                color: "#13ff00",
                fontSize: "70px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              Santosh Upadhyay
            </h1>

            <h2
              className="about-me"
              style={{ color: "white", fontSize: "68px", fontWeight: "bolder" }}
            >
              Front End Developer
            </h2>
            <p style={{ fontSize: "40px", color: "white" }}>
              Computer Science Student
            </p>
            {/* <p>
              Front-end developer focused on creating Web and Mobile
              applications. I really like different projects that solve real
              problems.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

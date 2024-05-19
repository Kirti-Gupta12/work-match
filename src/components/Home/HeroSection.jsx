import React from "react";
import { FaBuilding, FaSuitcase, FaUsers } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "10",
      subTitle: "Available Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "6",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "80",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
   
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h2>Identify a career that aligns with your
            passions and abilities.</h2>
          </div>
          <div className="image">
            <img src="/hero-banner.png" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
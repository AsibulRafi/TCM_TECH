import React from "react";
import aboutIcon1 from "../assets/aboutIcon1.png";
import aboutIcon2 from "../assets/aboutIcon2.png";
import aboutIcon3 from "../assets/aboutIcon3.png";
import aboutIcon4 from "../assets/aboutIcon4.png";
const About = () => {
  return (
    <>
      <section className="hero__header">
        <div className="hero__header-content">
          <h2>About us</h2>
          <p>
            SupraCRM was founded in 2013 by a group of highly experienced IT
            professionals and Brokers with the goal to create simple, secure,
            and user-friendly solutions for the FX market. Our software
            engineers have years of programming experience providing custom
            tools and solutions for FX brokers, money managers and financial
            institutions around the world. Our custom solutions enable companies
            to maximize profits by offering innovative solutions that can be
            seamlessly integrated into an existing infrastructure or as a
            standalone offering
          </p>
        </div>
      </section>
      <section className="aboutTools">
        <h2 className="aboutTools__heading">Broker's Tools</h2>
        <div className="aboutTools__content">
          <div className="aboutTools__content-single">
            <img src={aboutIcon1} alt="aboutIcon" />
            <h4>SupraCRM Platform</h4>
          </div>
          <div className="aboutTools__content-single">
            <img src={aboutIcon2} alt="aboutIcon" />
            <h4>Instant broker solution</h4>
          </div>
          <div className="aboutTools__content-single">
            <img src={aboutIcon3} alt="aboutIcon" />
            <h4>Webtrader solution</h4>
          </div>
          <div className="aboutTools__content-single">
            <img src={aboutIcon4} alt="aboutIcon" />
            <h4>Data feed and execution</h4>
          </div>
        </div>
        <p className="about__info">
          SupraCRM is a technology solutions provider who can build your forex
          business, from scratch! We have successfully built a network of agents
          around the world, who can help you establish a new company in the
          desired jurisdiction.
        </p>
      </section>
    </>
  );
};

export default About;

import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import skype from "../assets/skype.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import heroImg from "../assets/heroImg.png";
import productImg1 from "../assets/productsImg1.png";
import productImg2 from "../assets/productsImg2.png";
import productImg3 from "../assets/productsImg3.png";
import productImg4 from "../assets/productsImg4.png";
import avatar from "../assets/avatar.png";
import previewImg from "../assets/previewImg.png";
import appIcon1 from "../assets/google.png";
import appIcon2 from "../assets/amazon.png";
import appIcon3 from "../assets/microsoft.png";
import appIcon4 from "../assets/dropbox.png";
import appIcon5 from "../assets/figma.png";
import appIcon6 from "../assets/digitalOcane.png";
import appIcon7 from "../assets/evernote.png";
import appIcon8 from "../assets/facebook.png";
import appIcon9 from "../assets/nameCheap.png";
import appIcon10 from "../assets/green.png";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__content-info">
              <div className="hero__content-info-review">
                <div className="hero__content-info-review-star">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p>
                  Based on <span> 10,000+ </span> reviews
                </p>
              </div>
              <h1 className="hero__content-info-heading">
                Good client-customer relationship made possible
              </h1>
              <p className="hero__content-info-text">
                SupraCRM is the client oriented platform that aims for teams to
                <br />
                achieve an efficient dream management
              </p>
              <div className="hero__content-info-btns">
                <h4>
                  Start work efficiently with
                  <br />
                  SupraCRM
                </h4>
                <a href="/">Get a Free Demo</a>
              </div>
              <div className="hero__content-info-social">
                <div className="hero__content-info-social-single">
                  <img src={skype} alt="socialIcon" />
                  <h2>Skype</h2>
                </div>
                <div className="hero__content-info-social-single">
                  <img src={whatsapp} alt="socialIcon" />
                  <h2>WhatsApp</h2>
                </div>
                <div className="hero__content-info-social-single">
                  <img src={telegram} alt="socialIcon" />
                  <h2>Telegram</h2>
                </div>
              </div>
            </div>
            <div className="hero__content-img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="products__wrapper">
          <div className="products__heading">
            <h2>
              Choose from over 10+
              <br />
              cutting—edge products
            </h2>
            <button>See all Products</button>
          </div>
          <div className="products__content">
            <div className="products__content-single">
              <img src={productImg1} alt="productsImg" />
              <div className="products__content-single-info">
                <h2>Branded webtrader</h2>
              </div>
            </div>
            <div className="products__content-single">
              <img src={productImg2} alt="productsImg" />
              <div className="products__content-single-info">
                <h2>Social TAB</h2>
                <p>Contact your client straight from the CRM</p>
              </div>
            </div>
            <div className="products__content-single">
              <img src={productImg3} alt="productsImg" />
              <div className="products__content-single-info">
                <h2>Business calendar</h2>
                <p>Stay tuned to your schedule</p>
              </div>
            </div>
            <div className="products__content-single">
              <img src={productImg4} alt="productsImg" />
              <div className="products__content-single-info">
                <h2>Customize reports</h2>
                <p>Moderate reports according your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="reviews__wrapper">
          <div className="reviews__heading">
            <h2>
              Here's what our <span> customer </span>
              <br />
              has to says
            </h2>
            <button>Read customer stories</button>
          </div>
          <div className="reviews__content">
            <div
              className="reviews__content-single"
              style={{ backgroundColor: "#22242f" }}
            >
              <h4>Amazing system! Saved me months</h4>
              <p>
                I like that everything is all on one screen. I can check out
                each tab to see deadline dates, sample files, finished files,
                comments and the status of each project in a colored status tab.
              </p>
              <div className="reviews__content-single-person">
                <img src={avatar} alt="avatar" />
                <h3>Jhon Master</h3>
              </div>
            </div>
            <div
              className="reviews__content-single"
              style={{ backgroundColor: "#131317" }}
            >
              <h4>Life got a lot easier</h4>
              <p>
                I love that you can have separate boards for various depts. You
                can flow an entire project from start to finish without having
                any issues, a total time saver!
              </p>
              <div className="reviews__content-single-person">
                <img src={avatar} alt="avatar" />
                <h3>Jenny Mires</h3>
              </div>
            </div>
            <div
              className="reviews__content-single"
              style={{ backgroundColor: "#131317" }}
            >
              <h4>Great tool for all your needs</h4>
              <p>
                SupraCRM is a very versatile software. It is a spreadsheet that
                looks good and does things for you automatically if you take the
                time to set up the automation. This software is one of the best!
              </p>
              <div className="reviews__content-single-person">
                <img src={avatar} alt="avatar" />
                <h3>Zaharia Brown</h3>
              </div>
            </div>
            <div
              className="reviews__content-single"
              style={{ backgroundColor: "#22242f" }}
            >
              <h4>The Superior CRM system!</h4>
              <p>
                The automations are some of the cleanest, most seamless options
                for keeping your clients organized and on track compared to
                other CRM platforms
              </p>
              <div className="reviews__content-single-person">
                <img src={avatar} alt="avatar" />
                <h3>Antonio Spinazolla</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app">
        <div className="app__wrapper">
          <div className="app__heading">
            <div className="app__heading-icon">
              <p>Caption</p>
            </div>
            <h2>
              Most popular <br />
              integration apps
            </h2>
            <button type="button">See All Apps</button>
          </div>
          <div className="app__content">
            <img src={appIcon1} alt="appIcon" />
            <img src={appIcon2} alt="appIcon" />
            <img src={appIcon3} alt="appIcon" />
            <img src={appIcon4} alt="appIcon" />
            <img src={appIcon5} alt="appIcon" />
            <img src={appIcon6} alt="appIcon" />
            <img src={appIcon7} alt="appIcon" />
            <img src={appIcon8} alt="appIcon" />
            <img src={appIcon9} alt="appIcon" />
            <img src={appIcon10} alt="appIcon" />
          </div>
        </div>
      </section>

      <section className="preview">
        <div className="preview__wrapper">
          <div className="preview__heading">
            <div className="preview__heading-icon">
              <p>Caption</p>
            </div>
            <h2>
              The best in the
              <br />
              class product for
              <br />
              you today!
            </h2>
            <div className="preview__heading-btns">
              <a href="/">Get a Free Demo</a>
              <h4>
                Start work efficiently with
                <br />
                SupraCRM
              </h4>
            </div>
          </div>
          <div className="preview__content">
            <img src={previewImg} alt="previewImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

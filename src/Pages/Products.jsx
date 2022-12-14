import React from "react";
import productsBg1 from "../assets/productsBg1.png";
import productsBg2 from "../assets/productsBg2.png";
import productsBg3 from "../assets/productsBg3.png";
import productsBg4 from "../assets/productsBg4.png";
const Products = () => {
  return (
    <>
      <section className="hero__header">
        <div className="hero__header-content">
          <h2>Products</h2>
          <p>
            We offer you a powerful CRM with a buildin Client Office that allows
            direct access to the broker’s payment area and also gives traders
            the ability to manage their accounts fast, without leaving the
            platform. With a help of our dedicated tool SupraCRM will be able to
            track the Key Performance Indicators (KPIs) of their business.
            Automate all of your onboarding and payment processes in one place.
          </p>
        </div>
      </section>
      <div className="productsPage">
        <section className="products__single">
          <div className="products__single-info">
            <h2>WEBTRADER</h2>
            <p>
              Our WebTrader is customized to the client's needs and can be
              branded according to the broker's request at no extra cost. It's a
              powerful, sleek, and sophisticated web-based trading platform that
              syncs seamlessly with the MT4/MT5. A fully branded user interface
              with customizable features that let you set your brand apart from
              the rest.
            </p>
          </div>
          <div className="products__single-img">
            <img src={productsBg1} alt="productsImg" />
          </div>
        </section>
        <section className="products__single">
          <div className="products__single-info">
            <h2>24H TEMPLATE WEBSITE</h2>
            <p>
              Our team of Web Developers offers you a fully integrated and ready
              within 24h website. You just need to provide us with your logo and
              be sure that you will be having your website the day after. We can
              integrate ready content or implement your own.
            </p>
          </div>
          <div className="products__single-img">
            <img src={productsBg2} alt="productsImg" />
          </div>
        </section>
        <section className="products__single">
          <div className="products__single-info">
            <h2>VPS</h2>
            <p>
              Seeking full control over your hosting environment – our Self-
              Managed VPS Hosting is a solid fit. You get full root access with
              SSH keys for total control as well as a command-line for
              flexibility and power. Plus, we offer a wide range of scalable
              performance options with flexible server configurations.
            </p>
          </div>
          <div className="products__single-img">
            <img src={productsBg3} alt="productsImg" />
          </div>
        </section>
        <section className="products__single">
          <div className="products__single-info">
            <h2>BRANDED EMAILS</h2>
            <p>
              Control your team, manage your company combining email hosting
              with the company's communication and collaboration apps. With our
              email service, you get unlimited storage space per user— though
              higher-tier plans provide unlimited storage—as well as shared
              contacts and calendars.
            </p>
          </div>
          <div className="products__single-img">
            <img src={productsBg4} alt="productsImg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;

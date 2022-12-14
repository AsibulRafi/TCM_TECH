import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={} alt="app__logo" />
      </div> */}
      <ul className="app__navbar-links">
        <li>
          <Link to="/about">About SupraCRM</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="get__demo">
          Get Demo
        </a>
        <div />
        <a href="/" className="sales">
          Contact Sales
        </a>
        <BsSearch />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RxCross2
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  About SupraCRM
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={() => setToggleMenu(false)}>
                  Products
                </Link>
              </li>
              <li>
                <a href="#login" className="get__demo">
                  Get Demo
                </a>
                <div />
              </li>
              <li>
                <a href="/" className="sales">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

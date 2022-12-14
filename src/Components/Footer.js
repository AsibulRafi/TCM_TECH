import React from "react";
import skype from "../assets/skypeLarge.png";
import whatsapp from "../assets/whatsappLarge.png";
import telegrams from "../assets/telegramLarge.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__single">
        <img src={skype} alt="footerLogo" />
        <h4>Skype</h4>
      </div>
      <div className="footer__single">
        <img src={whatsapp} alt="footerLogo" />
        <h4>WhatsApp</h4>
      </div>
      <div className="footer__single">
        <img src={telegrams} alt="footerLogo" />
        <h4>Telegram</h4>
      </div>
    </section>
  );
};

export default Footer;

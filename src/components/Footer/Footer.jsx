import React from "react";
import { ReactSVG } from "react-svg";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__inner">
        <ReactSVG src="/assets/svgs/logos/footer-logo.svg" />
        <div className="footer__social">
          <a
            href="https://www.youtube.com/channel/UCykSqjhkEPISbFInjMUdUqw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG
              className="footer__social__icon"
              src="/assets/svgs/social/youtube.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/waf-company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactSVG
              className="footer__social__icon"
              src="/assets/svgs/social/link.svg"
            />
          </a>
        </div>
        <div className="footer__mail">weathefuture@gmail.com</div>
        <div className="footer__text">
          © {new Date().getFullYear()}, We Are The Future. All rights reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

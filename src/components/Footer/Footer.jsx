import React from 'react';
import { ReactSVG } from 'react-svg';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__inner">
        <ReactSVG src='/assets/svgs/logos/footer-logo.svg' />
        <div className="footer__mail">weathefuture@gmail.com</div>
        <div className="footer__text">© {(new Date().getFullYear())}, We Are The future. All rights reserved</div>
      </div>
    </div>
  </footer>
);

export default Footer;

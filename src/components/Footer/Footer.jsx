import React from 'react';
import { ReactSVG } from 'react-svg';
import './Footer.scss';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer">
    <Container className="footer__inner">
      <h1 className="footer__text">© 2020, We Are The future. All rights reserved</h1>
      <h1 className="footer__text">weathefuture@gmail.com</h1>

      <div className="footer__logo">
        <ReactSVG src='/assets/svgs/logos/footer-logo.svg' />
        <h1>We Are the Future</h1>
      </div>
    </Container>
  </footer>
);

export default Footer;

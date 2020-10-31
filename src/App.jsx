import React from 'react';
import { ReactSVG } from 'react-svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

import InfoCard from './components/InfoCard/InfoCard';
import PersonCard from './components/PersonCard/PersonCard';
import GridList from './components/GridList/GridList';
import ContactForm from './components/ContactForm/ContactForm';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';

import TECHNOLOGIES from './constants/technologies';
import DEVELOPERS from './constants/developers';
import WORKS_WITH from './constants/works-with';

const AgencyBanner = ({ onClickScroller }) => (
  <div className="agency-banner">
    <h1 className="agency-banner__title">We Are the Future</h1>
    <ReactSVG src='/assets/svgs/logos/banner-logo.svg' className="agency-banner__logo" />
    <ReactSVG onClick={onClickScroller} src='/assets/svgs/scroll-down.svg' className="agency-banner__scroller" />
  </div>
);

const About = () => (
  <div className="about">
    <div className="main-page-bg-2">
      <Container fluid>
        <h2 className="about__title">Who we are?</h2>

        <div className="about__sub-title">
          <p>Ambitious Ukrainian IT company,</p>
          <p>starting the  path of digital transformation</p>
          <p>of your ideas</p>
        </div>
      </Container>
    </div>

    <Container fluid>
      <div className="we-can-better">
        <Row>
          <Col xs={12} sm={3} 
          className="we-can-better__info">We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs.</Col>
          <Col xs={12} sm={6} className="we-can-better__img">
            <img src="/assets/imgs/we-can-better.jpg" alt="We can better"/>
            <h2 className="we-can-better__title">We can better</h2>
          </Col>
          <Col xs={12} sm={3} className="we-can-better__info">10+ of true professionals with solid technical background in different domains - SaaS applications, complex web projects, DevOps solutions.</Col>
        </Row>
      </div>
    </Container>
  </div>
);

const Technologies = () => (
  <div className="technologies">
    <h2 className="technologies__title">Technologies</h2>
    <Container fluid>
      <div className="technologies__sub-title">
        <p>We are working with different modern technologies you can</p>
        <p>be interested in:</p>
      </div>

      <Row>
        {TECHNOLOGIES.map(tech => (
          <Col xs={12} md={3} key={tech.title}>
            <InfoCard {...tech} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

const Developers = () => (
  <div className="developers">
    <Container fluid>
      <h2 className="developers__title">*** Drill-down of our technical skills can be provided in a separate discussion.</h2>

      <div className="developers__bg">Team</div>
      <Row>
        {DEVELOPERS.map(dev => (
          <Col xs={12} sm={6} lg={3} key={dev.name}>
            <PersonCard {...dev} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

const WorkWith = () => (
  <div className="work-with">
    <Container fluid>
      <h2 className="work-with__title">Who we work with</h2>
      <GridList items={WORKS_WITH} />
    </Container>
  </div>
);

const Contact = () => (
  <div className="contact-us">
    <div className="contact-us__inner">
      <h2 className="contact-us__title">Feel free to contact Us!</h2>
      <h2 className="contact-us__subtitle">We’ll be glad to assist you with the implementation of your dreams!</h2>

      <ContactForm />
    </div>
  </div>
);

const Portfolio = () => (
  <div className="portfolio">
    <Container fluid>
      <h2 className="portfolio__title">Portfolio</h2>
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12} sm={{ span: 4 }} className="portfolio-item">
          <img
            src="/assets/imgs/portfolio/carswork.png"
            alt="carswork"
            className="portfolio-item__img"
          />
          <h2 className="portfolio-item__title">Carswork</h2>
          <Popup 
            popupTitle="Cars work"
            popupSiteLink="https://carswork.com"
            popupSiteLogo="/assets/imgs/laptop2.png"
            popupMissionTextFirst="We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs."
            popupMissionTextSecond="We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs."
            popupTechnologiesDB="PostgreSQL / MongoDB / MySQL / DynamoDb / Elasticsearch / Redis"
            popupTechnologiesGeneral="OOP & OOD / TDD & BDD / API (REST API & Postman & Swagger & API Doc)"
            popupTechnologiesFE="Angular (Typescript) & React & Net.JS Frameworks / HTML / CSS (SCSS, LESS, bootstrap, angular material), Javascript (ES6 - ES9)"
            popupTechnologiesBE="Node.js (Koa, express, meteor, hapi, sails, nestjs)"
          />
        </Col>
        <Col xs={12} sm={{ span: 4, offset: 2 }} className="portfolio-item">
          <img
            src="https://stage.connectoro.io/assets/images/logos/fuse.svg"
            alt="connectoro"
            className="portfolio-item__img"
          />
          <h2 className="portfolio-item__title">Connectoro</h2>
          <a href="https://app.connectoro.io" rel="noopener noreferrer" target="_blank">
            <button className="btn portfolio-item__btn">
              Open
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

const App = () => {
  const moveToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AgencyBanner onClickScroller={moveToAbout} />
      <div className="main-page-bg-1">
        <img src="/assets/imgs/Group.png" alt="circles"/>
        <About />
        <Technologies />
      </div>
      <div className="main-page-bg-3">
        <img src="/assets/imgs/Group.png" alt=""/>
        <Developers />
        <WorkWith />
      </div>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

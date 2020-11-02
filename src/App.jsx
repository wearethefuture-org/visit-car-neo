import React from 'react';
import { ReactSVG } from 'react-svg';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import InfoCard from './components/InfoCard/InfoCard';
import PersonCard from './components/PersonCard/PersonCard';
import ContactForm from './components/ContactForm/ContactForm';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import Footer from './components/Footer/Footer';

import TECHNOLOGIES from './constants/technologies';
import DEVELOPERS from './constants/developers';
import WORKS_WITH from './constants/works-with';
import PORTFOLIO from './constants/portfolio';

SwiperCore.use([Navigation]);

const Header = ({ onClickScroller }) => (
  <header className="header">
    <TopMenu />

    <div className="header__container">
      <h1 className="header__title">We Are<br /> the Future</h1>
      <h2 className="header__subtitle">We Always Make the Idea Better</h2>
    </div>

    <ReactSVG onClick={onClickScroller} src='/assets/svgs/scroll-down.svg' className="header__scroll" />
  </header>
);

const TopMenu = () => (
  <nav className="navigation">
    <div className="navigation__container">
      <a href="/" className="navigation__logo"><img src="/assets/imgs/navigation__logo.png" alt="Logo" /></a>
      <a href="/" className="navigation__item navigation__item--is-active">About Us</a>
      <a href="/" className="navigation__item">Technologies</a>
      <a href="/" className="navigation__item">Our Team</a>
      <a href="/" className="navigation__item">Our Clients</a>
      <a href="/" className="navigation__item">Portfolio</a>
      <a href="/" className="navigation__item">Contact Us</a>
    </div>
  </nav>
);

const AboutUs = () => (
  <section className="about-us">
    <div className="about-us__container">
      <h2 className="about-us__title">About Us</h2>
      <h3 className="about-us__subtitle">Ambitious Ukrainian IT company, starting the path of digital transformation of your ideas</h3>

      <div className="about-us__inner">
        <div className="about-us__description">
          <p className="about-us__paragraph">We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs.</p>
          <div className="about-us__info">
            <div className="about-us__year">10+</div>
            <p className="about-us__paragraph about-us__paragraph--shifted">of true professionals with solid technical background in different domains - <span className="about-us__bold">SaaS applications, complex web projects, DevOps solutions.</span></p>
          </div>
        </div>
        <img src="/assets/imgs/we-can-better.jpg" alt="We can Better" className="about-us__img" />
      </div>

      <div className="about-us__quote">
        <span>“</span>
        <div>
          <div className="about-us__italic">The best way to predict the future is to create it</div>
          <div>Alan Kay</div>
        </div>
      </div>
    </div>
  </section>
);

const Technologies = () => (
  <section className="technologies">
    <div className="technologies__container">
      <h2 className="technologies__title">Technologies</h2>
      <h3 className="technologies__subtitle">We are working with different modern technologies you can be interested in:</h3>

      <div className="technologies__infocard">
        {TECHNOLOGIES.map(tech => (
          <InfoCard {...tech} key={tech.title} />
        ))}
      </div>

      <button type="button" className="technologies__contact">Contact us for details</button>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="portfolio">
    <div className="portfolio__container">
      <h2 className="portfolio__title">Portfolio</h2>

      <div className="portfolio__inner">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
          breakpoints={{
            980: {
              slidesPerView: 2
            }
          }}
        >
          {PORTFOLIO.map(item => (
            <SwiperSlide className="portfolio-item" key={item.title}>
              <PortfolioItem {...item} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-next"><ReactSVG src='/assets/svgs/next-arrow.svg' /></div>
          <div className="swiper-button-prev"><ReactSVG src='/assets/svgs/prev-arrow.svg' /></div>
        </Swiper>
      </div>
    </div>
  </section>
);

const WorkWith = () => (
  <section className="work-with">
    <div className="work-with__container">
      <div className="work-with__inner">
        <div className="work-with__part">
          <h2 className="work-with__title">Building better solutions to improve product</h2>
          <div className="work-with__subtitle">we work with</div>
        </div>

        <div className="work-with__box">
          {WORKS_WITH.map(item => (
            <div className="work-with__item" key={item.title}>
              <div className="work-with__caption">{ item.title }</div>
              <div className="work-with__text">{ item.text }</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="team">
    <div className="team__container">
      <h2 className="team__title">Our Team</h2>

      <div className="team__inner">
        {DEVELOPERS.map(dev => (
          <PersonCard {...dev} key={dev.name} />
        ))}
      </div>

      <div className="team__description">
        We Are the Future is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget facilisis eros. Praesent imperdiet facilisis tellus, eu rutrum nunc consectetur et. Nam at bibendum dui. Pellentesque tincidunt vel ipsum vitae ultrices. Maecenas ut enim fermentum, faucibus mi a, facilisis lorem. Nullam mauris dui, laoreet vel mollis non, viverra id dui. Quisque posuere ligula iaculis velit hendrerit eleifend. Cras et elit semper magna rhoncus tincidunt ut ac massa. In quis maximus ligula, quis maximus arcu. Etiam sollicitudin dapibus cursus. In hac habitasse platea dictumst. Integer ac suscipit tortor, a volutpat elit.
      </div>
    </div>
  </section>
);

const Contact = () => (
  <div className="contact-us">
    <div className="contact-us__container">
      <ContactForm />
    </div>
  </div>
);


























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

// const Technologies = () => (
//   <div className="technologies">
//     <h2 className="technologies__title">Technologies</h2>
//     <Container fluid>
//       <div className="technologies__sub-title">
//         <p>We are working with different modern technologies you can</p>
//         <p>be interested in:</p>
//       </div>

//       <Row>
//         {TECHNOLOGIES.map(tech => (
//           <Col xs={12} md={3} key={tech.title}>
//             <InfoCard {...tech} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   </div>
// );

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

// const WorkWith = () => (
//   <div className="work-with">
//     <Container fluid>
//       <h2 className="work-with__title">Who we work with</h2>
//       <GridList items={WORKS_WITH} />
//     </Container>
//   </div>
// );

// const Contact = () => (
//   <div className="contact-us">
//     <div className="contact-us__inner">
//       <h2 className="contact-us__title">Feel free to contact Us!</h2>
//       <h2 className="contact-us__subtitle">We’ll be glad to assist you with the implementation of your dreams!</h2>

//       <ContactForm />
//     </div>
//   </div>
// );

// const Portfolio = () => (
//   <div className="portfolio">
//     <Container fluid>
//       <h2 className="portfolio__title">Portfolio</h2>
//       <Row style={{ justifyContent: 'center' }}>
//         <Col xs={12} sm={{ span: 4 }} className="portfolio-item">
//           <img
//             src="/assets/imgs/portfolio/carswork.png"
//             alt="carswork"
//             className="portfolio-item__img"
//           />
//           <h2 className="portfolio-item__title">Carswork</h2>
//           <Popup 
//             popupTitle="Cars work"
//             popupSiteLink="https://carswork.com"
//             popupSiteLogo="/assets/imgs/laptop2.png"
//             popupMissionTextFirst="We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs."
//             popupMissionTextSecond="We’ll help you grow and enhance your business using best practices staring from usage of modern technologies and ending with best Agile practices for organizational needs."
//             popupTechnologiesDB="PostgreSQL / MongoDB / MySQL / DynamoDb / Elasticsearch / Redis"
//             popupTechnologiesGeneral="OOP & OOD / TDD & BDD / API (REST API & Postman & Swagger & API Doc)"
//             popupTechnologiesFE="Angular (Typescript) & React & Net.JS Frameworks / HTML / CSS (SCSS, LESS, bootstrap, angular material), Javascript (ES6 - ES9)"
//             popupTechnologiesBE="Node.js (Koa, express, meteor, hapi, sails, nestjs)"
//           />
//         </Col>
//         <Col xs={12} sm={{ span: 4, offset: 2 }} className="portfolio-item">
//           <img
//             src="https://stage.connectoro.io/assets/images/logos/fuse.svg"
//             alt="connectoro"
//             className="portfolio-item__img"
//           />
//           <h2 className="portfolio-item__title">Connectoro</h2>
//           <a href="https://app.connectoro.io" rel="noopener noreferrer" target="_blank">
//             <button className="btn portfolio-item__btn">
//               Open
//             </button>
//           </a>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

const App = () => {
  const moveToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <AboutUs />
      <Technologies />
      <Portfolio />
      <WorkWith />
      <Team />
      <Contact />
      <AgencyBanner onClickScroller={moveToAbout} />
      <div className="main-page-bg-1">
        <img src="/assets/imgs/Group.png" alt="circles"/>
        <About />
        // <Technologies />
      </div>
      <div className="main-page-bg-3">
        <img src="/assets/imgs/Group.png" alt=""/>
        <Developers />
        //<WorkWith />
      </div>
      // <Portfolio />
      // <Contact />
      <Footer />
    </>
  );
};

export default App;

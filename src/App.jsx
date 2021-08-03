import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, scroller, Element } from "react-scroll";
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

SwiperCore.use([Navigation, Autoplay]);

const Header = ({ onClickScroller }) => (
  <header className="header" id="header">
    <TopMenu />

    <div className="header__container">
      <h1 className="header__title">We Are<br /> the Future</h1>
      <h2 className="header__subtitle">We Always Make the Idea Better</h2>
    </div>

    <ReactSVG onClick={onClickScroller} src='/assets/svgs/scroll-down.svg' className="header__scroll" />
  </header>
);

const TopMenu = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const changeBackground = () => {
    if(window.scrollY >= 112) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const toggleMenu = () => {
    setOpen(!open);
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navigation navigation--is-active' : 'navigation'}>
      <div className="navigation__container">
        <Link
          className="navigation__logo"
          to="header"
          spy={true}
          smooth={true}
          offset={-112}
          duration={500}
        >
          <img src={navbar ? '/assets/svgs/logos/footer-logo.svg' : '/assets/imgs/navigation__logo.png'} alt="Logo" />
        </Link>

        {open && <div onClick={toggleMenu} className="navigation__menu navigation__menu__close navigation__menu__close--is-open"></div>}
        {!open && <div onClick={toggleMenu} className="navigation__menu navigation__menu__burger"></div>}
        <div className="navigation__inner" ref={ref}>
          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="about-us"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
          >About Us</Link>

          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="technologies"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
          >Technologies</Link>

          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
          >Portfolio</Link>

          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="work-with"
            spy={true}
            smooth={true}
            offset={-112}
            duration={500}
          >Our Clients</Link>

          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="team"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >Our Team</Link>

          <Link
            onClick={toggleMenu}
            className="navigation__item"
            activeClass="navigation__item--is-active"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

const AboutUs = () => (
  <section className="about-us" id="about-us">
    <div className="about-us__container">
      <h2 className="about-us__title">About Us</h2>
      <h3 className="about-us__subtitle">Ambitious Ukrainian IT company, starting the path of digital transformation of your ideas</h3>

      <div className="about-us__inner">
        <div className="about-us__description">
          <p className="about-us__paragraph">We’ll help your business to grow from the IT perspective including all its aspects starting from modern technologies and ending with the modern Agile practices for management needs.</p>
          <div className="about-us__info">
            <div className="about-us__year">10+</div>
            <p className="about-us__paragraph about-us__paragraph--shifted">of true professionals with solid technical background in different domains - <span className="about-us__bold">SaaS applications, complex web projects, DevOps solutions.</span></p>
          </div>
        </div>
        <img src="/assets/imgs/we-can-better.jpg" alt="We can Better" className="about-us__img" />
      </div>

      <div className="about-us__quote">
        <span className="about-us__quote-right">“</span>
        <div>
          <div className="about-us__italic">The best way to predict the future is to create it</div>
          <div>Alan Kay</div>
        </div>
        <span className="about-us__quote-left">”</span>
      </div>
    </div>
  </section>
);

const Technologies = ({ onClickScroller }) => (
  <section className="technologies" id="technologies">
    <div className="technologies__container">
      <h2 className="technologies__title">Technologies</h2>
      <h3 className="technologies__subtitle">We are working in different domains using modern technologies you can be interested in:</h3>

      <div className="technologies__infocard">
        {TECHNOLOGIES.map(tech => (
          <InfoCard {...tech} key={tech.title} />
        ))}
      </div>

      <button type="button" className="technologies__contact" onClick={() => onClickScroller('contact-us')}>Contact Us</button>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <div className="portfolio__container">
      <h2 className="portfolio__title">Portfolio</h2>

      <div className="portfolio__inner">
        <Swiper
          autoplay={{
            delay: 3000
          }}
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
  <section className="work-with" id="work-with">
    <div className="work-with__container">
      <div className="work-with__inner">
        <div className="work-with__part">
          <h2 className="work-with__title">Building the best IT solutions for your product</h2>
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

      <div className="team__inner" id="team">
        {DEVELOPERS.map(dev => (
          <PersonCard {...dev} key={dev.name} />
        ))}
      </div>

      <div className="team__description">
        Customer satisfaction is the main goal for us as a company which we achieve through the regular successful delivery we can provide as a team of mature experts in relevant areas for you.
      </div>
    </div>
  </section>
);

const Contact = () => (
  <div className="contact-us" id="contact-us">
    <div className="contact-us__container">
      <ContactForm />
    </div>
  </div>
);

const App = () => {
  const moveToAbout = () => {
    window.scrollTo({
      top: window.innerHeight - 112,
      behavior: 'smooth'
    });
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 0,
      offset: -120,
      smooth: true
    });
  }

  return (
    <>
      <Header onClickScroller={moveToAbout} />
      <AboutUs />
      <Technologies onClickScroller={scrollToElement} />
      <Portfolio />
      <WorkWith />
      <Team />
      <Element name="contact-us">
        <Contact />
      </Element>
      <Footer onClickScroller={moveToAbout} />
    </>
  );
};

export default withRouter(App);

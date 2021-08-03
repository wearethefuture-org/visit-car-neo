import React, { useRef } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { scroller } from "react-scroll";
import { ReactSVG } from "react-svg";
import { Modal, ModalBody } from "reactstrap";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PORTFOLIO from "../../constants/portfolio";
import "./PortfolioModal.scss";

SwiperCore.use([Navigation]);

const getPortfolioList = () => {
  const portfolioList = {};

  PORTFOLIO.forEach((portfolio) => {
    portfolioList[portfolio.urlName] = portfolio;
  });

  return portfolioList;
};

const PortfolioModal = () => {
  const history = useHistory();
  let portfolio = null;

  const useComponentWillMount = (func) => {
    const willMount = useRef(true);
    const { name } = useParams();

    if (willMount.current) {
      let portfolioList = func();
      portfolio = portfolioList[name];
    }
  };

  useComponentWillMount(getPortfolioList);

  const toggle = () => {
    history.push("/");
  };

  const scrollToContactUs = () => {
    toggle();

    scroller.scrollTo('contact-us', {
      duration: 500,
      delay: 0,
      offset: -120,
      smooth: true
    });
  }

  const {
    title,
    popupImageSrc,
    popupSiteLink,
    popupMissionText,
    popupDbs,
    popupDevKnowledge,
    popupFE,
    popupBE,
    popupAPP,
  } = portfolio;

  return (
    <>
      <Modal
        isOpen={true}
        centered={true}
        contentClassName="popup__inner"
        className="popup"
        toggle={toggle}
      >
        <ReactSVG
          src="/assets/svgs/close-icon.svg"
          className="popup__close"
          onClick={toggle}
        />

        <ModalBody className="popup__body">
          <div className="popup__title">{title}</div>

          <div className="popup__browser">
            <div className="popup__search-bar">
              <div className="popup__circle popup__circle--close"></div>
              <div className="popup__circle popup__circle--restore"></div>
              <div className="popup__circle popup__circle--minimize"></div>
              <div className="popup__bar"></div>
            </div>

            {popupImageSrc.length > 1 ? (
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {popupImageSrc.map((item) => (
                  <SwiperSlide key={item} className="popup__item" >
                    <img src={item} alt={title} className="popup__img" />
                  </SwiperSlide>
                ))}

                <div className="swiper-button-next">
                  <ReactSVG src="/assets/svgs/next-arrow.svg" />
                </div>
                <div className="swiper-button-prev">
                  <ReactSVG src="/assets/svgs/prev-arrow.svg" />
                </div>
              </Swiper>
            ) : (
              <div className="popup__item">
                <img
                  src={popupImageSrc[0]}
                  alt={title}
                  className="popup__img-no-slide"
                />
              </div>
            )}
          </div>

          {popupSiteLink && (
            <a
              href={popupSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="popup__link"
            >
              Visit site
            </a>
          )}

          <div className="popup__mission">
            <div className="popup__subtitle">About:</div>
            <p
              className="popup__paragraph"
              dangerouslySetInnerHTML={{ __html: popupMissionText }}
            ></p>
          </div>

          <div className="popup__technologies">
            <div className="popup__subtitle">Technologies:</div>

            <div className="popup__info">
              <div className="popup__part">
                <div className="popup__part-title">DBs:</div>
                <div className="popup__part-description">{popupDbs}</div>
              </div>

              <div className="popup__part">
                <div className="popup__part-title">
                  Development general knowledge:
                </div>
                <div className="popup__part-description">
                  {popupDevKnowledge}
                </div>
              </div>

              <div className="popup__part">
                <div className="popup__part-title">Front-End:</div>
                <div className="popup__part-description">{popupFE}</div>
              </div>

              <div className="popup__part">
                <div className="popup__part-title">Back-End:</div>
                <div className="popup__part-description">{popupBE}</div>
              </div>

              {popupAPP && (
                <div className="popup__part">
                  <div className="popup__part-title">APP(iOS, Android):</div>
                  <div className="popup__part-description">{popupAPP}</div>
                </div>
              )}
            </div>
          </div>

          <div className="popup__contact">
            <button onClick={toggle} className="popup__exit">
              Exit
            </button>
            <button onClick={scrollToContactUs} className="popup__email">
              Contact us
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withRouter(PortfolioModal);

import React from 'react';
import { ReactSVG } from 'react-svg';
import { Modal, ModalBody } from 'reactstrap';
import './PortfolioItem.scss';

const PortfolioItem = ({
  src,
  title,
  popupImageSrc,
  popupSiteLink,
  popupMissionText,
  popupDbs,
  popupDevKnowledge,
  popupFE,
  popupBE,
  popupAPP,
}) => {
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

    return (
      <>
        <div className="portfolio-item__container" onClick={ toggle }>
          <div className="portfolio-item__img">
            <img
              src={ src }
              alt={ title }
            />
          </div>
          
          <h2 className="portfolio-item__title">{ title }</h2>

          <button type="button" className="portfolio-item__details">
            Details
          </button>
        </div>

        <Modal isOpen={ modal } centered={ true } toggle={ toggle } contentClassName="popup__inner" className="popup">
          <ReactSVG src='/assets/svgs/close-icon.svg' className="popup__close" onClick={ toggle } />
          
          <ModalBody className="popup__body">
            <div className="popup__title">{ title }</div>

            <div className="popup__browser">
              <div className="popup__search-bar">
                <div className="popup__circle popup__circle--close"></div>
                <div className="popup__circle popup__circle--restore"></div>
                <div className="popup__circle popup__circle--minimize"></div>
                <div className="popup__bar"></div>
              </div>
              
              <img src={ popupImageSrc } alt={ title } className="popup__img" />
            </div>

            {popupSiteLink && <a href={ popupSiteLink } target="_blank" rel="noopener noreferrer" className="popup__link">Visit site</a>}  

            <div className="popup__mission">
              <div className="popup__subtitle">About:</div>
              <p className="popup__paragraph" dangerouslySetInnerHTML={{__html: popupMissionText}}></p>
            </div>

            <div className="popup__technologies">
              <div className="popup__subtitle">Technologies:</div>

              <div className="popup__info">
                <div className="popup__part">
                  <div className="popup__part-title">DBs:</div>
                  <div className="popup__part-description">{ popupDbs }</div>
                </div>

                <div className="popup__part">
                  <div className="popup__part-title">Development general knowledge:</div>
                  <div className="popup__part-description">{ popupDevKnowledge }</div>
                </div>

                <div className="popup__part">
                  <div className="popup__part-title">Front-End:</div>
                  <div className="popup__part-description">{ popupFE }</div>
                </div>

                <div className="popup__part">
                  <div className="popup__part-title">Back-End:</div>
                  <div className="popup__part-description">{ popupBE }</div>
                </div>
                
                {popupAPP && (
                  <div className="popup__part">
                    <div className="popup__part-title">APP(iOS, Android):</div>
                    <div className="popup__part-description">{ popupAPP }</div>
                  </div>
                )}
              </div>
            </div>

            <div className="popup__contact">
              <div className="popup__subtitle popup__subtitle--contact">Interested?</div>
              <a href="mailto:weathefuture@gmail.com" className="popup__email">Contact us</a>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }

export default PortfolioItem;

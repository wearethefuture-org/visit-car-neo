import React from 'react';
import { ReactSVG } from 'react-svg';
import { Modal, ModalBody } from 'reactstrap';
import './Popup.scss';

const Popup = (props) => {
    const {
      popupTitle,
      popupSiteLink,
      popupSiteLogo,
      popupMissionTextFirst,
      popupMissionTextSecond,
      popupTechnologiesDB,
      popupTechnologiesGeneral,
      popupTechnologiesFE,
      popupTechnologiesBE
    } = props;  
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
  
    return (
      <>
        <button className="btn portfolio-item__btn" onClick={ toggle }>
          Details
        </button>

        <Modal isOpen={ modal } centered={ true } toggle={ toggle } contentClassName="popup__inner" className="popup">
          <ReactSVG src='/assets/svgs/close-icon.svg' className="popup__close" onClick={ toggle } />
          
          <ModalBody>
            <div className="popup__title">{ popupTitle }</div>

            <div className="popup__content">
              <div className="popup__info">
                <img src={ popupSiteLogo } alt="Laptop" className="popup__img" />
                <a href={ popupSiteLink } target="_blank" rel="noopener noreferrer" className="popup__link">
                  Visit site
                  <ReactSVG src='/assets/svgs/external-link-icon.svg' className="popup__external-link" wrapper="span" />
                </a>
                <div className="popup__questions">
                  <div className="popup__subtitle">Have a question? </div>
                  <a href="mailto:weathefuture@gmail.com" className="popup__email">Write us!)</a>
                </div>
              </div>

              <div className="popup__description">
                <div className="popup__section">
                  <div className="popup__subtitle">Mission:</div>
                  <p className="popup__paragraph">{ popupMissionTextFirst }</p>
                  <p className="popup__paragraph">{ popupMissionTextSecond }</p>
                </div>
                
                <div className="popup__section">
                  <div className="popup__subtitle">Technologies:</div>

                  <div className="popup__technologies">
                    <div className="popup__holder">
                      <div className="popup__caption">DBs:</div>
                      <p className="popup__text">{ popupTechnologiesDB }</p>
                    </div>
                    <div className="popup__holder">
                      <div className="popup__caption">Development general knowledge:</div>
                      <p className="popup__text">{ popupTechnologiesGeneral }</p>
                    </div>
                    <div className="popup__holder">
                      <div className="popup__caption">Front-End:</div>
                      <p className="popup__text">{ popupTechnologiesFE }</p>
                    </div>
                    <div className="popup__holder">
                      <div className="popup__caption">Back-End:</div>
                      <p className="popup__text">{ popupTechnologiesBE }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }

export default Popup;

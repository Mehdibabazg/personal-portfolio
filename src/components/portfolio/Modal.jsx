import React from 'react'
import CloseImg from "../../assets/img/cancel.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ isOpen, closeModal, data }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
    };

    return (
        isOpen && (
            <div className="modal_portfolio">
                <div 
                    className="modal__outside"
                    onClick={closeModal}
                ></div>
                <div className="modal__content">
                    <div data-aos="fade">
                        <h2 className="heading mb-2">{data.type}</h2>
                        <div className="modal__details">
                            {data.modalDetails.map((details, i) => {
                                return (
                                    <div key={i} className="row open-sans-font">
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-file-text-o pr-2"></i>
                                            Project:{" "}
                                            <span className="ft-wt-600 uppercase">
                                                {details.project}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-user-o pr-2"></i>
                                            Client :{" "}
                                            <span className="ft-wt-600 uppercase">
                                                {details.client}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-user-o pr-2"></i>
                                            Languages & Technologies :{" "}
                                            <span className="ft-wt-600 uppercase">
                                                {details.languages}
                                            </span>
                                        </div>
                                        <div className="col-12 col-sm-6 mb-2">
                                            <i className="fa fa-external-link pr-2"></i>
                                            Preview :{" "}
                                            <a
                                                className="preview-link"
                                                target="_blank"
                                                rel="noopener noreferrer nofollow"
                                                href={details.link}
                                            >
                                                {details.preview}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <figure className="modal__img">
                            <Slider {...settings}>
                                <div>
                                    <img src={data.image} alt="portfolio project demo" />
                                </div>
                                <div>
                                    <img src={data.image} alt="portfolio project demo" />
                                </div>
                                <div>
                                    <img src={data.image} alt="portfolio project demo" />
                                </div>
                            </Slider>
                        </figure>
                        <button 
                            className="close-modal"
                            onClick={closeModal}
                        >
                            <img src={CloseImg} alt="portfolio project demo" />
                        </button>
                    </div>
                </div>
            </div>
        )
    )
};

export default Modal
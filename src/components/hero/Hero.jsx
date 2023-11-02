import React from 'react';
import heroImg from "../../assets/img/hero/dark.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const Hero = () => {
  const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: "BABA ELMEHDI",
    heroDesignation: "Web developer",
    heroDescriptions: `I'm a Moroccan based web developer & front‑end developer focused on
    crafting clean & user‑friendly experiences, I am passionate about
    building excellent software that improves the lives of those
    around me.`,
    heroBtn: "more about me",
  };
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img 
              src={heroContent.heroMobileImage} 
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man" 
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button">
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero
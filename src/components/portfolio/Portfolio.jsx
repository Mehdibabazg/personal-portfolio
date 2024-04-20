import React, { useState } from 'react';
import PortfolioData from "./portfolioData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "./Modal";

const Portfolio = () => {

  let [currentModal, setCurrentModal] = useState(null);

  const handleModal = (id) => {
    const selectedModal = PortfolioData.find((modal) => modal.id === id);
    setCurrentModal(selectedModal);
    // alert(JSON.stringify(selectedModal));
  }
  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>REACT</Tab>
            <Tab>WORDPRESS</Tab>
            <Tab>WEB APPLICATION</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, delayAnimation } = item;
                  const image = item.images[0];
                  return (
                    <div
                      key={item}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt={`portfolio ${type} project`} />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => 
                  item.tag.includes("react")
                ).map((item) => {
                  const { id, type, delayAnimation } = item;
                  const image = item.images[0];
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt={`portfolio ${type} project`} />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => 
                  item.tag.includes("wordpress")
                ).map((item) => {
                  const { id, type, delayAnimation } = item;
                  const image = item.images[0];
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt={`portfolio ${type} project`} />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

             <TabPanel> 
              <div className="tab-container">
                {PortfolioData.filter((item) => 
                  item.tag.includes("web applicaton")
                ).map((item) => {
                  const { id, type, delayAnimation } = item;
                  const image = item.images[0];
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt={`portfolio ${type} project`} />
                        <h3>
                          <span className="content-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      <Modal isOpen={!!currentModal} closeModal={closeModal} data={currentModal || {}} />
    </>
  )
}

export default Portfolio
import React from 'react';
import CountUp from 'react-countup';

const achievementsContent = [
  { value: "4", subTitle1: "years of", subTitle2: "experience" },
  { value: "10", subTitle1: "completed", subTitle2: "projects" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative"><CountUp end={val.value} /></h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
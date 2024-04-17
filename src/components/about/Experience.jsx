import React from 'react'

const experienceContent = [
  {
    period: "Mars 2023 - Present",
    position: "Web Developer",
    companyName: "Weshore",
    details: `Integration of customer specific requests after delivery, Correction of any bugs, Website Optimization`,
  },
  {
    period: "Mai 2022 - Mars 2023",
    position: "WordPress Integrator",
    companyName: "Weshore",
    details: `Design of websites in Wordpress, Implementation of website using the developed theme, Tests of the functionalities set up`,
  },
  {
    period: "September 2021 - Mai 2022",
    position: "Web developer (Intern)",
    companyName: "Massartech",
    details: `Develop a web application for Stock Management, Payments, Cash, Sales, Invoices, BL.. For a sales store also a web application for Caisse Management Web Application for a Butcher`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.period}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open sans font">{val.companyName}</span>
          </h5>
          <p className="open sans font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
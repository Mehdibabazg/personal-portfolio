import React from 'react'

const experienceContent = [
  {
    period: "Mars 2023 - Present",
    position: "Web Developer",
    companyName: "Weshore",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    period: "Mai 2022 - Mars 2023",
    position: "WordPress Integrator",
    companyName: "Weshore",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    period: "September 2021 - Mai 2022",
    position: "Web developer (Intern)",
    companyName: "Massartech",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
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
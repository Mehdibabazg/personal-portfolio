import React from 'react'

const educationContent = [
  {
    year: "2021",
    degree: "BACHELOR DEGREE",
    institute: "FACULTY OF SCIENCE AND TECHNOLOGY",
    details: `  Bachelor of Science and Technology in Software Engineering`,
  },
  {
    year: "2017",
    degree: "BACCALAUREATE",
    institute: "MASSIRA HIGH SCHOOL",
    details: `  Baccalaureate in physical sciences`,
  },
];


const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open sans font">{val.institute}</span>
          </h5>
          <p className="open sans font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Education
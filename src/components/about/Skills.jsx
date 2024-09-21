import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsContent = [
  { skillPercent: "95", skillName: "HTML" },
  { skillPercent: "80", skillName: "JAVASCRIPT" },
  { skillPercent: "90", skillName: "CSS" },
  { skillPercent: "70", skillName: "PHP" },
  { skillPercent: "70", skillName: "REACT" },
  { skillPercent: "60", skillName: "Next.js" },
  { skillPercent: "50", skillName: "LARAVEL" },
  { skillPercent: "95", skillName: "WORDPRESS" },
  { skillPercent: "75", skillName: "JQUERY" },
  { skillPercent: "95", skillName: "BOOTSTRAP" },
  { skillPercent: "80", skillName: "TAILWIND CSS" },
  { skillPercent: "80", skillName: "MUI MATERIAL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div style={{ width: '120px', height: '120px', margin: 'auto' }}>
            <CircularProgressbar value={val.skillPercent} text={`${val.skillPercent}%`} />
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  )
}

export default Skills
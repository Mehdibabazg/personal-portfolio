import React from 'react';

const personalInfoContent = [
  { meta: "first name", metaInfo: "BABA" },
  { meta: "last name", metaInfo: "ELMEHDI" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Moroccan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Marrakech, Morocco" },
  { meta: "phone", metaInfo: "+21770868078" },
  { meta: "Email", metaInfo: "mehdibabazg@gmail.com" },
  { meta: "Skype", metaInfo: "ELMEHDI BABA" },
  { meta: "languages", metaInfo: "English, French, Arabic" },
];

const PersonnalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PersonnalInfo;
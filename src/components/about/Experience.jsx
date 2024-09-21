import React from 'react'

const experienceContent = [
  {
    period: "Mars 2023 - Present",
    position: "Web Developer (Maintenance Team)",
    companyName: "Weshore Agency",
    details: `Integrated client-specific requests post-delivery, resolving bugs, implementing new features, and optimizing website performance, security, and mobile responsiveness. Maintained and monitored websites post-launch, ensuring uptime and addressing technical issues while improving SEO and loading times.`,
  },
  {
    period: "Mai 2022 - Mars 2023",
    position: "WordPress Developer & Integrator (Production Team)",
    companyName: "Weshore Agency",
    details: `Designed, developed, and customized responsive WordPress websites, ensuring seamless theme integration with plugins and features. Collaborated with designers to meet client expectations, conducted cross-browser/device testing, and managed deployments with minimal downtime. Adhered to best practices in SEO, security, and performance optimization for high-quality, scalable sites.`,
  },
  {
    period: "September 2021 - Mai 2022",
    position: "Web developer (Intern)",
    companyName: "Massartech",
    details: `- Web Application for Store Management: Developed a web app with a dashboard for stats, sales tracking, inventory, and payment processing using HTML, CSS, PHP, JavaScript, Bootstrap, jQuery, and MySQL (MVC architecture).\n- Electronics Store Website: Built a professional e-commerce website with WordPress, enhancing online presence and customer experience.\n- Construction Company Website: Designed and developed a user-friendly website showcasing services and portfolio.`,
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
          <p className="open sans font" dangerouslySetInnerHTML={{ __html: val.details.replace(/\n/g, "<br/>") }}></p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
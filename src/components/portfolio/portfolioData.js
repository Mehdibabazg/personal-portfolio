import Image2 from "../../assets/img/portfolio/gestion-application/cheques-issued-page.png";
import Image1 from "../../assets/img/portfolio/gestion-application/Login-page.png";
import Image3 from "../../assets/img/portfolio/gestion-application/Paiement-page.png";
import Image4 from "../../assets/img/portfolio/gestion-application/Product-page.png";
import Image5 from "../../assets/img/portfolio/gestion-application/Rechreche-detaille-page.png";

import Image6 from "../../assets/img/portfolio/react-project/youtube-clone/youtube-clone-1.png";
import Image7 from "../../assets/img/portfolio/react-project/youtube-clone/youtube-clone-2.png";
import Image8 from "../../assets/img/portfolio/react-project/youtube-clone/youtube-clone-3.png";
import Image9 from "../../assets/img/portfolio/react-project/youtube-clone/youtube-clone-4.png";

import Image10 from "../../assets/img/portfolio/wordpress-project/massartech-project/massartech-project-1.png";
import Image11 from "../../assets/img/portfolio/wordpress-project/massartech-project/massartech-project-2.png";
import Image12 from "../../assets/img/portfolio/wordpress-project/massartech-project/massartech-project-3.png";

import { v4 as uuidv4 } from 'uuid';

const PortfolioData = [
    {
        id: uuidv4(),
        type: "web application",
        images: [Image1, Image2, Image3, Image4, Image5],
        tag:["web applicaton"],
        delayAnimation: "200",
        modalDetails: [
            {
            project: "Inventory management web application",
            client: "Massartech",
            languages: "HTML, CSS, Javascript, PHP, Bootstrap, jQuery",
            preview: "gestion.baba-elmehdi.me",
            link: "https://gestion.baba-elmehdi.me/",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "react",
        images: [Image6, Image7, Image8, Image9],
        tag:["react"],
        delayAnimation: "300",
        modalDetails: [
            {
            project: "Youtube clone application",
            client: "-",
            languages: "React, Mui material, Rapid API, Axios",
            preview: "be-youtube-clone.netlify.app/",
            link: "https://be-youtube-clone.netlify.app/",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "wordpress",
        images: [Image10, Image11, Image12],
        tag:["wordpress"],
        delayAnimation: "400",
        modalDetails: [
            {
            project: "Massartech Store",
            client: "-",
            languages: "HTML, Css, JS, Php, Wordpress",
            preview: "massartech.ma",
            link: "https://massartech.ma/",
            },
        ],
    },

];

export default PortfolioData;
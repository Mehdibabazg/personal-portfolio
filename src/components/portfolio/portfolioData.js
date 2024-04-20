import Image2 from "../../assets/img/portfolio/gestion-application/cheques-issued-page.png";
import Image1 from "../../assets/img/portfolio/gestion-application/Login-page.png";
import Image3 from "../../assets/img/portfolio/gestion-application/Paiement-page.png";
import Image4 from "../../assets/img/portfolio/gestion-application/Product-page.png";
import Image5 from "../../assets/img/portfolio/gestion-application/Rechreche-detaille-page.png";
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

];

export default PortfolioData;
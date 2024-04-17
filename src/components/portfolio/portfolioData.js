import Image from "../../assets/img/portfolio/gestion-application/mockup.jpg";
import { v4 as uuidv4 } from 'uuid';

const PortfolioData = [
    {
        id: uuidv4(),
        type: "React",
        image: Image,
        tag:["react"],
        delayAnimation: "0",
        modalDetails: [
            {
            project: "Website",
            client: "Envato",
            languages: "HTML, CSS, Javascript",
            preview: "www.envato.com",
            link: "https",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "Wordpress",
        image: Image,
        tag:["wordpress"],
        delayAnimation: "100",
        modalDetails: [
            {
            project: "Website",
            client: "Envato",
            languages: "HTML, CSS, Javascript",
            preview: "www.envato.com",
            link: "https://www.envato.com/",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "web application",
        image: Image,
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
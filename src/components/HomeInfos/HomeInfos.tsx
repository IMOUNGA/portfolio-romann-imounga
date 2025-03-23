import {Link} from "react-router-dom";
import {arrow} from "../../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Bonjour, je suis <span className="font-semibold">Romann</span> 👋🏽,
            <br/><span className="font-semibold">Développeur Web & Mobile</span>.
            <br/>Faites tourner le labo ou naviguez via les onglets pour me découvrir !
        </h1>
    ),
    2: (
        <InfoBox
            text="J'ai eu l'opportunité de travailler avec plusieurs entreprises et d'acquérir des compétences enrichissantes."
            link="/about"
            btnText="En savoir plus"
        />
    ),
    3: (
        <InfoBox
            text="J'ai pu prendre part à plusieurs projets. Curieux de découvrir leur impact ?"
            link="/projects"
            btnText="Visiter mon portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Besoin de réaliser un projet ou à la recherche d'un développeur ? Je suis votre homme !"
            link="/contact"
            btnText="Contactez moi"
        />
    ),
}



const HomeInfos = ({currentStage}) => {
    return renderContent[currentStage] || null;
};

export default HomeInfos;

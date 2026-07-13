import ampersand from "./../../assets/signature art/ampersand.svg";
import "./Home.css";
import idesign from "./../../assets/signature art/I DESIGN.svg";
import idevelop from "./../../assets/signature art/I DEVELOP.svg";
import scrollImg from "/icons/scroll.png";
import CircularText from "./CircluarText";
import details from "./../../assets/Details.json";
const about = {
    ...details.about
}

export default function Home({ }) {
    return (
        <div className="Main-Home">
            <div className="Artwork"><CircularText/></div>
            <div className="Home">
                <div className="heading line1">
                    <img src={idevelop} alt="&" />
                </div>
                <div className="heading line2">
                    <img src={ampersand} alt="&" className="ampersand-img" />
                    <img src={idesign} alt="&" />
                </div>
            </div>
            <span className="MyDescription">{about.description}</span>
        </div>
    )
}
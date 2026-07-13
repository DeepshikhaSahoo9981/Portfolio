import "./Connects.css";
import caricreature from "./../../assets/signature art/Vector 4.svg";
import details from "./../../assets/Details.json";
import heart from "/icons/heart.png";
import qrCode from "./../../assets/qr code.png";
const contacts = [...details.contactDetails];

export default function Connects({ }) {
    return (
        <div className="Connect">
            <div className="connect-info">
                <div className="connect-header">
                    <span className="connect-heading">CONNECT</span>
                    <span className="connect-message">Always Open To Explore</span>
                </div>
                <div className="section-info">
                    {contacts.map((contact, i) => <IconAndInfo iconInfo={contact} key={i} />)}
                    <img src={qrCode} alt="qrcode" className="qrcode"/>
                </div>
                <div className="copyright">
                    <span className="remark">© 2026 Deepshikha</span>
                    <span className="developerInfo"><img src={heart} alt="heart" style = {{width: "20px"}}/> Designed & built by Deepshikha</span>
                </div>
            </div>
            <img src={caricreature} alt="carcreature" className="caricreature" />
        </div>
    )
}

function IconAndInfo({ iconInfo }) {
    return (
        <div className="icon-info">
            <img src={iconInfo.icon} alt={iconInfo.type} />
            <span>{iconInfo.info}</span>
        </div>
    )
}
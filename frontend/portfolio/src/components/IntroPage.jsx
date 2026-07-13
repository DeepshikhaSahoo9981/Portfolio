import girlImg from "../assets/signature art/girlInYellow.svg";

export default function IntroPage({ }) {
    return (
        <div className="IntroPage">
            <img src={girlImg} alt="girlImg" className="girlImg" />
            <span className="intro">
                DEEPSHIKHA'S PORTFOLIO
            </span>
        </div>
    )
}
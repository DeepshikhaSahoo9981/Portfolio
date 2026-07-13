export default function Feature({ serialNo, img, heading, description,isVisibility }) {
    return (
        <div className={`Features ${isVisibility ? "active-card" : "hidden-card"}`}>
            <span className="number-icon">{serialNo}</span>
            <img src={img} alt="Spirograph Vectors" className="Spirograph"/>
            <div className="sub-section">
                <span className="feature-heading">{heading}</span>
                <span className="feature-description">{description}</span>
            </div>
        </div>
    )
}
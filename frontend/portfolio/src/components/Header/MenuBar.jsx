import { useState } from "react";
import arrow from "/icons/right_arrow.png";
import arrow_filled from "/icons/arrow_filled.png";

const PAGES = ["HELLO", "FEATURES", "EXPERIENCE", "WORKSHOP", "CONNECT"]
export default function MenuBar({ currentStats, handleStats }) {
    // const [isOpen, setIsOpen] = useState(false);
    const handlePrev = () => {
        handleStats(prev => (prev === 0 ? prev : prev - 1));
    }

    const handleNext = () => {
        handleStats(prev => (prev === PAGES.length - 1 ? prev : prev + 1));
    }
    return (
        <>
            {/* Hamburger Button: Visible only on mobile */}
            {/* <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </button> */}
            {/* <div className={`MenuBar ${isOpen ? "open" : ""}`}> */}
            <div className={`MenuBar`}>
                <img className="menu-item" id="prev" src={arrow} alt="left-arrow" style={{ height: "32px", transform: "rotate(180deg)", display: currentStats == 0 ? "none" : "flex", borderLeft: "1px black solid" }} onClick={handlePrev} />
                {PAGES.map((page, i) => <span
                    className="menu-item"
                    key={page}
                    onClick={() => {
                        handleStats(i)
                    }}
                    style={{ display: currentStats == i ? "flex" : "none" }}>
                    {page}
                </span>)}
                <img className="menu-item" id="next" src={arrow} alt="right-arrow" style={{ height: "32px", transform: "rotate(0deg)", display: currentStats == PAGES.length - 1 ? "none" : "flex", borderLeft: "1px black solid" }} onClick={handleNext} />
            </div>
        </>
    )
}

// color: currentStats == i ? "#F39A1E" : "#000" ,
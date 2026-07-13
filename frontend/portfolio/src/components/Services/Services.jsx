import "./Services.css";
import style3 from "./../../assets/signature art/Repeat group 1-1.svg";
import style1 from "./../../assets/signature art/Repeat group 1.svg";
import style2 from "./../../assets/signature art/Repeat group 2.svg";
import details from "./../../assets/Details.json";
import Feature from "./Feature";
import { useEffect, useState } from "react";

let DESIGNS = [style1, style2, style3];
const FEATURES = [...details.features].map((f, i) => ({ ...f, style: DESIGNS[i] }))
const STACKS = [...details.Stacks];

export default function Services({ }) {

    const [changeStyle, setChangeStyle] = useState(false);
    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setChangeStyle(true);
            return;
        }

        const handleChange = (e) => {
            let width = window.innerWidth;
            if (width < 1000) {
                setChangeStyle(true);
                return;
            }
            else {
                setChangeStyle(false);
            }
        }
        window.addEventListener("resize", handleChange);
        return () => {
            window.removeEventListener("resize", handleChange);
        }
    }, [])

    useEffect(() => {
        if (!changeStyle) return;
        const intervale = setInterval(() => {
            setCurrentFeature(prev => (prev + 1) % FEATURES.length)
        }, 5000)

        return () => {
            clearInterval(intervale)
        }

    }, [changeStyle])

    return (
        <div className="Services">
            <div className="section-1">
                <span className="section-heading">I BRING</span>
                <div className="stacks-section">
                    {
                        STACKS.map((item, i) => {
                            return <span className="stack-element" key={item}>{item}</span>
                        })
                    }
                </div>
            </div>
            <div className="section-2">
                {FEATURES.map((feature, i) => {
                    return <Feature
                        description={feature.description}
                        heading={feature.title}
                        img={feature.style}
                        serialNo={i + 1}
                        key={i}
                        id={`feature${i + 1}`}
                        isVisibility={currentFeature == i}
                    />
                })}
            </div>
        </div>
    )
}
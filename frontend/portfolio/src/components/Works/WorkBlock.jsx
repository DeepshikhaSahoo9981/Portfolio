import { useRef, useState } from "react"

const statusColor = {
    "in progress": "#F39A1E",
    "completed": "#AEF0FF",
    "draft": "#C398FF"
}

const typeColor = {
    "voluntary project": "#F2C78C",
    "imaginary project": "#B6F0FF",
    "on demand project": "#07768E"
}

export default function WorkBlock({ workShop, index }) {
    const [preview, setPreview] = useState({ visible: false, url: "", x: 0, y: 0 });
    const projectRef = useRef(null);
    const [live, setLive] = useState(false);

    const handleOpenPreview = (e, url) => {
        if (!projectRef.current) return;
        // const rect = projectRef.current.getBoundingClientRect()

        setPreview({
            visible: true,
            url: url,
            x: e.clientX + 100 * Math.pow(-1, index),
            y: 100 * Math.pow(-1, index)
        })
    }

    const handleClosePreview = (e) => {
        setPreview({ visible: false, url: "", x: 0, y: 0 })
    }

    const handleLiveImg = (e) => {
        setLive(true)
        setPreview(false)
    }

    const handleStopLiveImg = (e) => {
        setLive(false)
    }

    return (
        <div className="project"
            onMouseOver={(e) => handleOpenPreview(e, workShop.imageURL)}
            onMouseLeave={handleClosePreview}
            onMouseDown={handleStopLiveImg}
            ref={projectRef}
        >
            <div className="project-header">
                <span className="project-title">{workShop.title}</span>
                <span className="project-status" style={{ color: `${statusColor[workShop.status.toLowerCase()]}` }}>{workShop.status}</span>
                <span className="project-status" style={{ color: `${typeColor[workShop.type.toLowerCase()]}` }}>{workShop.type}</span>
            </div>
            <span className="project-subtitle">{workShop.subtitle}</span>
            <span className="project-description">{workShop.description}</span>
            <span className="project-summary">{workShop.summary}</span>

            <div className="features">
                {
                    Object.keys(workShop.features).map((feature, i) => {
                        return <span className="featuring" key={i}>{feature}</span>
                    })
                }

                {
                    Object.values(workShop.specs).map((spec, i) => {
                        return <span className="specs" key={i}>{spec}</span>
                    })
                }
            </div>

            {workShop.category.toLowerCase() === "development" ? (
                <a
                    href={workShop.status.toLowerCase() === "completed" ? workShop.liveURL : workShop.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liveDemo"
                >
                    {index % 2 !== 0 && "<< "}
                    {workShop.status.toLowerCase() === "completed" ? "VISIT" : "LIVE PROGRESS DEMO"}
                    {index % 2 === 0 && " >>"}
                </a>
            ) : (
                <button className="liveDemo" onClick={handleLiveImg}>
                    {index % 2 !== 0 && "<< "}
                    VIEW
                    {index % 2 === 0 && " >>"}
                </button>
            )}

            {preview.visible && <img src={preview.url} alt="preview image" className="preview-image" style={{
                top: preview.y,
                left: preview.x
            }} />}

            {live &&
                <div className="blur-backdrop">
                    <img src={new URL(`../../assets/workList/${workShop.liveImg}`, import.meta.url).href} alt={workShop.liveImg} className="liveImg" />
                </div>
            }

        </div>
    )
}
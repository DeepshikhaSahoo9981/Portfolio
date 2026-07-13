const names = ["epshikha", "veloper", "signer"];

export default function Logo({ }) {
    return (
        <div className="Logo">
            <span className="common-text">De</span>
            <div className="logo-container">
                <span className="logo-text text-1">{names[0]}</span>
                <span className="logo-text text-2">{names[1]}</span>
                <span className="logo-text text-3">{names[2]}</span>
            </div>
        </div>
    )
}
export default function RotatingText(){
    return(
        <div className="circular-text-container">
            <svg viewBox="0,0,320,320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path
                        id="textCirclePath"
                        d="M 160, 160 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                        fill="transparent"
                    />
                </defs>

                <text fill = "#000000" fontSize = "36" letterSpacing="3">
                    <textPath href="#textCirclePath" startOffset="0%">
                        ..................
                    </textPath>
                </text>
            </svg>
        </div>
    )
}
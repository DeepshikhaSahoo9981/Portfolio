export default function CircularText(){
    return(
        <div className="circular-text-container">
            <svg viewBox="0,0,320,320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Define the perfect circle path for the text to dit on */}
                    <path
                        id="textCirclePath"
                        d="M 160, 160 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                        fill="transparent"
                    />
                </defs>

                {/* 2. Bind the text to the hidden vector circle path */}
                <text fill = "#000000" fontSize = "36" letterSpacing="3">
                    <textPath href="#textCirclePath" startOffset="0%">
                       Deepshikha . On Live . Since 2026
                    </textPath>
                </text>
            </svg>
        </div>
    )
}
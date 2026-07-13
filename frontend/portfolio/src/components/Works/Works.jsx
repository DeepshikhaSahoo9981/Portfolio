import "./Works.css";
import details from "./../../assets/Details.json"
import WorkBlock from "./WorkBlock";

const workShops = [ ...details.workShop ].map(project=>({
    ...project, 
    imageURL: new URL(`../../assets/workList/${project.demoImage}`, import.meta.url).href
}));

export default function Works({ }) {

    return (
        <div className="Works">
            <div className="work-header">
                <span className="work-heading">FROM MY DESK</span>
                <span className="work-disclaimer">Disclaimer: All brand names, client names, and products featured across this portfolio are fictional and created for design and development practice. They are not affiliated with, nor represent, any real company, client, or product.</span>
            </div>

            <div className="projects">
                {
                    workShops.map((workshop,i)=>{
                       return <WorkBlock workShop={workshop} index={i} key={i}/>
                    })
                }
            </div>
        </div>
    )
}
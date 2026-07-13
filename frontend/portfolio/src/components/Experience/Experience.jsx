import "./Experience.css";
import details from "../../assets/Details.json";

const experience = [
    ...details.experience
];

export default function Experience({ }) {
    return (
        <div className="Experience">
            <span className="experience-header">
                I HAVE
            </span>

            <div className="experience-main">
                {
                    experience.map((exp, i) => {
                        return <div className="experience" key={i}>
                            <div className="highlightHeader">
                                <div className="years">
                                    <span className="yearsOfExperience">{exp.durationInYears}</span>
                                    <span className="yrs">yrs</span>
                                </div>
                                <span className="RoleExp">{exp.role}</span>
                                <span className="RoleExp">{exp.company}</span>
                            </div>
                            <div className="content">
                                <span className="desc">{exp.description}</span>
                                <div className="skills">
                                    {
                                        exp.keySkills.map((keySkill, i) => {
                                            return <span className="skill" key={keySkill}>
                                                {keySkill}
                                            </span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
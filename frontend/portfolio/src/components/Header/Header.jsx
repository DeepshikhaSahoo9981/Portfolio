import "./Header.css";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

export default function Header({ currentStats, handleStats}) {
    return (
        <div className="Header">
            <Logo />
            <MenuBar currentStats={currentStats} handleStats={handleStats}/>
        </div>
    )
}
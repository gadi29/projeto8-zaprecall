import "./style.css";
import logo from "../../assets/images/logo.png"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo ZapRecall" />
            <h1 className="appName">ZapRecall</h1>
        </div>
    );
}
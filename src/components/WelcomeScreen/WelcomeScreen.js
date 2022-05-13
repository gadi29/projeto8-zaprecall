import "./style.css";
import logo from "../../assets/images/logo.png"

export default function WelcomeScreen(props) {
    return (
        <div className="first-screen">
            <img src={logo} alt="Logo ZapRecall" />
            <h1 className="appName">ZapRecall</h1>
            <button onClick={() => props.setInit(true)}>Iniciar Recall!</button>
        </div>
    );
}
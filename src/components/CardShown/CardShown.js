import "./style.css";
import setinha from "../../assets/images/setinha.png"

export default function CardShown(props) {
    let cardQuest=props.question;

    return (
        <>
            <div className="card question">
                {cardQuest.question}
                <img src={setinha} alt="Setinha"/>
            </div>
        </>
    )
}
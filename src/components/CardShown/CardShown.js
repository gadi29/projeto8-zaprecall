import React from "react"
import "./style.css";
import setinha from "../../assets/images/setinha.png"

function Button(props) {
    return(
        <>
            <button className={props.class}>
                {props.text}
            </button>
        </>
    );
}

export default function CardShown(props) {
    const [quest, setQuest] = React.useState(true);
    let cardQuest=props.question;

    return (
        <>
            { quest ?
            <div className="card question">
                {cardQuest.question}
                <img onClick={() => setQuest(false)} src={setinha} alt="Setinha"/>
            </div>
            :
            <div className="card question answer">
                {cardQuest.answer}
                <div className="buttons">
                    <Button text="Não lembrei" class="red" />
                    <Button text="Quase não lembrei" class="orange" />
                    <Button text="Zap!" class="green" />
                </div>
            </div>
            }
        </>
    )
}
import React from "react"
import "./style.css";
import CardHide from "../CardHide/CardHide";
import setinha from "../../../assets/images/setinha.png"

function Button(props) {
    return(
        <>
            <button onClick={() => <CardHide type={props.class} class={props.cardClass}/>} className={props.class}>
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
                    <Button text="Não lembrei" class="red" cardClass="card red" />
                    <Button text="Quase não lembrei" class="orange" cardClass="card orange" />
                    <Button text="Zap!" class="green" cardClass="card green" />
                </div>
            </div>
            }
        </>
    )
}
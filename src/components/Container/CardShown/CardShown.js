import React from "react"
import setinha from "../../../assets/images/setinha.png"

function Button(props) {
    return(
        <>
            <button onClick={() => {props.setHide(true); props.setType(props.class); props.setAnswered(props.answered + 1)}} className={props.class}>
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
                    <Button text="Não lembrei" class="red" setHide={props.setHide} setType={props.setType} setAnswered={props.setAnswered} answered={props.answered} />
                    <Button text="Quase não lembrei" class="orange" setHide={props.setHide} setType={props.setType} setAnswered={props.setAnswered} answered={props.answered} />
                    <Button text="Zap!" class="green" setHide={props.setHide} setType={props.setType} setAnswered={props.setAnswered} answered={props.answered} />
                </div>
            </div>
            }
        </>
    )
}
import React from "react";
import "./style.css";
import CardShown from "../CardShown/CardShown";

function CardHide(props) {
    return (
        <>
            <div className="card" onClick={() => props.setHide(false)}>
                Pergunta {(props.index) + 1}
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    )
}

export default function QuestionHide(props) {
    const [hide, setHide] = React.useState(true);

    return (
        <>
            { hide ?
                <CardHide index={props.index} hide={hide} setHide={setHide} />
                :
                <CardShown question={props.question} />}
        </>
    );
}
import React from "react";
import CardShown from "../CardShown/CardShown";
import CardHide from "../CardHide/CardHide";

export default function QuestionHide(props) {
    const [hide, setHide] = React.useState(true);
    const [type, setType] = React.useState("initial");

    return (
        <>
            { hide ?
                <CardHide type={type} index={props.index} hide={hide} setHide={setHide} />
                :
                <CardShown question={props.question} setType={setType} setHide={setHide} setAnswered={props.setAnswered} answered={props.answered} />}
        </>
    );
}
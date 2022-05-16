import React from "react";
import CardShown from "../CardShown/CardShown";
import CardHide from "../CardHide/CardHide";

export default function QuestionHide(props) {
    const [type, setType] = React.useState("initial");
    const [hide, setHide] = React.useState(true);

    return (
        <>
            { hide ?
                <CardHide type={type} index={props.index} hide={hide} setHide={setHide} />
                :
                <CardShown question={props.question} setType={setType} setHide={setHide} setAnswered={props.setAnswered} answered={props.answered} setWrong={props.setWrong} wrong={props.wrong} />}
        </>
    );
}
import React from "react";
import "./style.css";
import CardShown from "../CardShown/CardShown";
import CardHide from "../CardHide/CardHide";

export default function QuestionHide(props) {
    const [hide, setHide] = React.useState(true);

    return (
        <>
            { hide ?
                <CardHide type="initial" index={props.index} hide={hide} setHide={setHide} />
                :
                <CardShown question={props.question} setHide={setHide} />}
        </>
    );
}
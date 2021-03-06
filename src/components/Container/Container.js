import React from "react";
import "./style.css";
import QuestionHide from "./QuestionHide/QuestionHide";

export default function Container(props) {
    let questions = [...props.questions];

    return (
        <div className="container">
            { questions.map((question, index) => <QuestionHide index={index} key={index} question={question} setAnswered={props.setAnswered} answered={props.answered} setWrong={props.setWrong} wrong={props.wrong} />) }
        </div>
    );
}
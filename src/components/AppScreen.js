import React from "react"
import Header from "./Header/Header";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";

function sortear() {
    return Math.random() - 0.5;
}

export default function AppScreen() {
    const questions = [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
        {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
        {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
        {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
        {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
        {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]
    
    questions.sort(sortear);

    const [answered, setAnswered] = React.useState(0);
    const [wrong, setWrong] = React.useState(0);

    return (
        <>
            <Header />
            <Container questions={questions} setAnswered={setAnswered} answered={answered} setWrong={setWrong} wrong={wrong} />
            <Footer questions={questions} setAnswered={setAnswered} answered={answered} setWrong={setWrong} wrong={wrong} />
        </>
    );
}
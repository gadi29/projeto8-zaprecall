import "./style.css";

function QuestionHide(props) {
    return (
        <div className="container">
            <button>
                { props.children }
            </button>
        </div>
    );
}

export default function Container() {
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
    
    return (
        <>
            <QuestionHide>
                Pergunta 1
                <ion-icon name="play-outline"></ion-icon>
            </QuestionHide>
            <QuestionHide>
                Pergunta 2
                <ion-icon name="play-outline"></ion-icon>
            </QuestionHide>
            <QuestionHide>
                Pergunta 3
                <ion-icon name="play-outline"></ion-icon>
            </QuestionHide>
            <QuestionHide>
                Pergunta 4
                <ion-icon name="play-outline"></ion-icon>
            </QuestionHide>
        </>
    );
}
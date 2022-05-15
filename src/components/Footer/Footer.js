import "./style.css";
import festa from "../../assets/images/party.png"

export default function Footer(props) {
    
    let questions = [...props.questions];
    
    if (props.answered === questions.length) {
        return (
            <div className="footer finished">
                <div className="principal">
                    <img src={festa} alt="Emoji Festejando" />
                    <h1>Parabéns!</h1>
                </div>
                <h3>Você não esqueceu de nenhum flashcard!</h3>
                <h2>{props.answered}/{questions.length} CONCLUÍDOS</h2>
            </div>
        );
    }

    return (
        <div className="footer">
            <h2>{props.answered}/{questions.length} CONCLUÍDOS</h2>
        </div>
    );
}
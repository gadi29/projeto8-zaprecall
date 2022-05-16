import "./style.css";
import party from "../../assets/images/party.png"
import sad from "../../assets/images/sad.png"

export default function Footer(props) {

    let questions = [...props.questions];

    if (props.answered === questions.length && props.wrong === 0) {
        return (
            <div className="footer finished">
                <div className="principal">
                    <img src={party} alt="Emoji Festejando" />
                    <h1>Parabéns!</h1>
                </div>
                <h3>Você não esqueceu de nenhum flashcard!</h3>
                <h2>{props.answered}/{questions.length} CONCLUÍDOS</h2>
            </div>
        );
    } else if (props.answered === questions.length) {
        return (
            <div className="footer finished">
                <div className="principal">
                    <img src={sad} alt="Emoji triste" />
                    <h1>Putz...</h1>
                </div>
                <h3>Ainda faltam alguns... Mas não desanime!</h3>
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
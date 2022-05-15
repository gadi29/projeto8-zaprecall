import "./style.css";

export default function Footer(props) {
    
    let questions = [...props.questions];
    
    return (
        <div className="footer">
            <h2>0/{questions.length} CONCLUÍDOS</h2>
        </div>
    );
}
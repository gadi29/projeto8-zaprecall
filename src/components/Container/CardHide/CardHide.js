import "./style.css";

export default function CardHide(props) {
    switch (props.type) {
        case "initial":
            return(
                <div className="card">
                    Pergunta {(props.index) + 1}
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            );
        case "red":
            return(
            <div className={props.class}>
                Pergunta {(props.index) + 1}
                <ion-icon name="play-outline"></ion-icon>
            </div>
            );
        case "orange":
            return(
            <div className={props.class}>
                Pergunta {(props.index) + 1}
                <ion-icon name="play-outline"></ion-icon>
            </div>
            );
        case "green":
            return(
            <div className={props.class}>
                Pergunta {(props.index) + 1}
                <ion-icon name="play-outline"></ion-icon>
            </div>
            );
        default:
            break;
    }
}
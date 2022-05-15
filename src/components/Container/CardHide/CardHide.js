export default function CardHide(props) {
    switch (props.type) {
        case "initial":
            return(
                <div className="card initial" onClick={() => props.setHide(false)}>
                    Pergunta {(props.index) + 1}
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            );
        case "red":
            return(
            <div className="card redText">
                Pergunta {(props.index) + 1}
                <ion-icon name="close-circle"></ion-icon>
            </div>
            );
        case "orange":
            return(
            <div className="card orangeText">
                Pergunta {(props.index) + 1}
                <ion-icon name="help-circle"></ion-icon>
            </div>
            );
        case "green":
            return(
            <div className="card greenText">
                Pergunta {(props.index) + 1}
                <ion-icon name="chevron-down-circle"></ion-icon>
            </div>
            );
        default:
            break;
    }
}
import React from "react";
import ReactDom from "react-dom";
import AppScreen from "./components/AppScreen";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {

    const [init, setInit] = React.useState(false);

    return(
        <>
            { !init ? <WelcomeScreen setInit={setInit} /> : <AppScreen />}
        </>
    );
}

ReactDom.render(<App />, document.querySelector(".root"));
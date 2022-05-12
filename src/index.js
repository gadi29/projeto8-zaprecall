import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return(
        <>
            <Header />
            <Footer />
        </>
    );
}

ReactDom.render(<App />, document.querySelector(".root"));
import ReactDOM from "react-dom/client";
import Game from "./AdultOrNot.tsx";  // <- default export должен быть

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <Game name='igra' description='description' version={1.1}/>
);
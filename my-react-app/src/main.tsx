import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AdultOrNot.tsx";  // <- default export должен быть

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
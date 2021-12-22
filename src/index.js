import { StrictMode } from "react";
import ReactDOM from "react-dom";
import logo from "../src/img/tree-736885__480.jpg";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

/* insert an image using React Js ,
set height and width of images using CSS */

ReactDOM.render(
  <div>
    <h1>Changing the Dimentions of images using React JS and CSS </h1>
    <img src={logo} alt="Logo" className="images" />;
    <img src={logo} alt="Logo" className="images" />;
    <img src={logo} alt="Logo" className="images" />;
  </div>,
  document.getElementById("root")
);

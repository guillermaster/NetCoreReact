"use strict";
exports.__esModule = true;
var ReactDOM = require("react-dom");
var React = require("react");
var Demo_1 = require("./Components/Demo/Demo");
React.createElement("h1", null, "test");
ReactDOM.render(React.createElement(Demo_1["default"], null), document.getElementById('react-homepage-root'));
if (module.hot) {
    module.hot.accept();
}

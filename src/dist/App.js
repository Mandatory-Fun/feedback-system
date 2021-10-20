"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var dashboard_1 = require("./pages/dashboard");
var GuardRoute_1 = require("./routes/GuardRoute");
var login_1 = require("./pages/login");
var NavBar_1 = require("./components/NavBar");
var react_1 = require("react");
function App() {
    var userIsLogged = true;
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/dashboard" })),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/login" }, !userIsLogged ? react_1["default"].createElement(login_1["default"], null) : react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/dashboard" })),
            react_1["default"].createElement(GuardRoute_1["default"], { path: "/dashboard", component: dashboard_1["default"] }))));
}
exports["default"] = App;

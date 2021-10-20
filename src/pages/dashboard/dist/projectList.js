"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var PrjCard_1 = require("../../components/PrjCard");
function ProjectList(_a) {
    var projectList = _a.projectList;
    var _b = react_1.useState(projectList), prjList = _b[0], setPrjList = _b[1];
    return (react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2 }, prjList.map(function (project) { return (react_1["default"].createElement(PrjCard_1["default"], { prjData: project })); })));
}
exports["default"] = ProjectList;

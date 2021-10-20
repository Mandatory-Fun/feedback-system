"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var projectList_1 = require("./projectList");
var react_1 = require("react");
var myProjectList = [
    { id: '1a', prjName: 'abc', members: [] },
    { id: '2b', prjName: 'aaa', members: [] },
    { id: '3c', prjName: 'bbb', members: [] },
    { id: '4c', prjName: 'bbb', members: [] },
    { id: '5c', prjName: 'bbb', members: [] },
    { id: '6c', prjName: 'bbb', members: [] },
];
var JoinedProjectList = [
    { id: '1a', prjName: 'abc', members: [] },
    { id: '2b', prjName: 'aaa', members: [] },
    { id: '3c', prjName: 'bbb', members: [] },
    { id: '4c', prjName: 'bbb', members: [] },
    { id: '5c', prjName: 'bbb', members: [] },
    { id: '6c', prjName: 'bbb', members: [] },
];
var Dashboard = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Typography, { mt: 2, mb: 2, fontWeight: 'bold' }, "ALL PROJECTS"),
        react_1["default"].createElement(material_1.Button, { variant: "contained", style: { backgroundColor: '#12824C', color: '#FFFFFF' } }, "Create"),
        react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "div", mt: 3, mb: 1 }, "MY PROJECTS"),
        react_1["default"].createElement(projectList_1["default"], { projectList: myProjectList }),
        react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "div", mt: 3, mb: 1 }, "INVITED PROJECTS"),
        react_1["default"].createElement(projectList_1["default"], { projectList: JoinedProjectList }));
};
exports["default"] = Dashboard;

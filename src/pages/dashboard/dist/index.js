"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var projectList_1 = require("./projectList");
var react_1 = require("react");
var myProjectList = [
    { projectId: '1a', title: 'abc', members: [] },
    { projectId: '2b', title: 'aaa', members: [] },
    { projectId: '3c', title: 'bbb', members: [] },
    { projectId: '4c', title: 'bbb', members: [] },
    { projectId: '5c', title: 'bbb', members: [] },
    { projectId: '6c', title: 'bbb', members: [] },
];
var JoinedProjectList = [
    { projectId: '1a', title: 'abc', members: [] },
    { projectId: '2b', title: 'aaa', members: [] },
    { projectId: '3c', title: 'bbb', members: [] },
    { projectId: '4c', title: 'bbb', members: [] },
    { projectId: '5c', title: 'bbb', members: [] },
    { projectId: '6c', title: 'bbb', members: [] },
];
var Dashboard = function () {
    return (react_1["default"].createElement(system_1.Box, { width: '1200px', m: 'auto' },
        react_1["default"].createElement(material_1.Paper, null,
            react_1["default"].createElement(material_1.Typography, { mt: 2, mb: 2, fontWeight: 'bold', pl: 1 }, "ALL PROJECTS"),
            react_1["default"].createElement(material_1.Button, { variant: "contained", style: { backgroundColor: '#12824C', color: '#FFFFFF' } }, "Create"),
            react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "div", mt: 3, mb: 1, pl: 1 }, "MY PROJECTS"),
            react_1["default"].createElement(projectList_1["default"], { projectList: myProjectList }),
            react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "div", mt: 3, mb: 1, pl: 1 }, "INVITED PROJECTS"),
            react_1["default"].createElement(projectList_1["default"], { projectList: JoinedProjectList }))));
};
exports["default"] = Dashboard;

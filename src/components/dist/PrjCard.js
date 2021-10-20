"use strict";
exports.__esModule = true;
var React = require("react");
var material_1 = require("@mui/material");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var Typography_1 = require("@mui/material/Typography");
function PrjCard(_a) {
    var prjData = _a.prjData;
    return (React.createElement(material_1.Grid, { item: true, xs: 4, key: prjData.projectId },
        React.createElement(Card_1["default"], { sx: { width: 300 } },
            React.createElement(CardActions_1["default"], null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(Typography_1["default"], { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true }, prjData.title))))));
}
exports["default"] = PrjCard;

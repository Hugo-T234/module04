"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _EmployeeList = _interopRequireDefault(require("./EmployeeList.jsx"));
var _EmployeeAdd = _interopRequireDefault(require("./EmployeeAdd.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_EmployeeList["default"], null)), document.getElementById("content"));
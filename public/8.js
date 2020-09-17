(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/core/components/table/table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/table/table.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-row {\n  margin-top: 40px;\n  min-height: 80px;\n}\n.table-row table {\n  position: relative;\n  border-collapse: collapse;\n  width: 100%;\n}\n.table-row table thead th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n.table-row table thead th.add-parent {\n  padding: 0;\n}\n.table-row table thead th.add-parent button {\n  padding: 10px;\n  border: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.table-row table tbody td {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n.table-row table tbody .actions-td {\n  text-align: center;\n}\n.table-row table tbody .actions-td button {\n  padding: 6px 10px;\n  border: 0;\n  cursor: pointer;\n  margin: 0 5px;\n}\n.table-row table p {\n  position: absolute;\n  text-align: center;\n  margin-top: 0;\n  width: calc(100% - 2px);\n  border: 1px solid #ddd;\n  height: 40px;\n  line-height: 40px;\n  border-top: 0;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQU07RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFFUjtBQURRO0VBQ0UsVUFBQTtBQUdWO0FBRlU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSVo7QUFFTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBQ1E7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNWO0FBSUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gIHRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgdGgge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICYuYWRkLXBhcmVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbnMtdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=8.js.map
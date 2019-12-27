(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./posts/utilise-render-props-to-separate-logic-from-presentation-in-react.md":
/*!************************************************************************************!*\
  !*** ./posts/utilise-render-props-to-separate-logic-from-presentation-in-react.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'Utilise render props to separate logic from presentation in React'\n---\n\nSeparating logic from your presentation has always been a best practise. It enforces the [single responsibility principle (SRP)](https://en.wikipedia.org/wiki/Single_responsibility_principle) and makes the code easier to test.\n\nReact however gets in trouble for letting developers mush the two concerns together with ease. Lets take an example from the [homepage](https://reactjs.org/) to explain:\n\n```javascript\nclass Timer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { seconds: 0 };\n  }\n  tick() {\n    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));\n  }\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n  render() {\n    return <div>Seconds: {this.state.seconds}</div>;\n  }\n}\n```\n\nAbove you can see the rather simple Timer class. You can also see the display logic for the class is coded right into the `render()` method.\n\nThe problem with having `<div>Seconds: {this.state.seconds}</div>` in the `Timer` class is that it’s not separating logic from presentation.\n\nLets separate the two concerns:\n\n```javascript\nconst SecondsActive = ({ seconds }) => <div>Seconds: {seconds}</div>;\n\nclass TimerContainer extends React.Component {\n  state = { seconds: 0 };\n  tick() {\n    this.setState(({ seconds }) => ({ seconds: seconds + 1 }));\n  }\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n  render() {\n    return this.props.view({ seconds: this.state.seconds });\n  }\n}\n\nReactDOM.render(\n  <TimerContainer view={SecondsActive} />,\n  document.getElementById(\"app\")\n);\n```\n\nWith a simple switch to rendering via a prop we have made the `Timer` class reusable across many presentational components and have made the presentational component super easy to test!");

/***/ })

}]);
//# sourceMappingURL=8.js.map
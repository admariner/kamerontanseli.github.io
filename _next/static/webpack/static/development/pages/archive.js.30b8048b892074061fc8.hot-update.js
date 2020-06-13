webpackHotUpdate("static/development/pages/archive.js",{

/***/ "./posts/my-productivity-tech-stack.md":
/*!*********************************************!*\
  !*** ./posts/my-productivity-tech-stack.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2020-05-02T21:16:44.000Z'\nhero_image: https://images.unsplash.com/photo-1544726982-b414d58fabaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ\ntitle: \"My Productivity Tech Stack\"\nbyline: 'When your product change rapidly in the face of new information. You have a greater chance of coming out on top.'\n---\n\nWhen your product change rapidly in the face of new information. You have a greater chance of coming out on top.\n\nWith that I'd like to talk about a tech stack that has helped me build SAAS apps from start to finish.\n\n## Node & Express\n\nStarting off with the basics is crucial. I'm not going to build a SPA if its just me working on it. I need quick turn arounds and a low amount of JS errors so I can get a good night's rest.\n\nI chose Express as its the most mature out of the other alternatives. I know if I encounter a problem that someone has solved it with Express.\n\nNotable packages to use with Express include:\n\n*   [Passport](http://www.passportjs.org) for Authentication\n*   [Flash](https://www.npmjs.com/package/express-flash) for Notifications\n\n## Handlebars\n\nI chose Handlebars because its easy to learn and simple to use. Express has a great package which allows me to create flexible layouts using partial tags and overall I've never had any problems or limitations using it.\n\n    {{#unless user.hasPremium}}\n      <div class=\"notification is-info is-light\">\n        <div><strong>Get Access to GSheet2Mail Premium</strong></div>\n        <p style=\"margin-bottom: 20px;\">\n          Get access to unlimited feeds and linked spreadsheets with GSheet2Mail Premium\n        </p>\n        <a href=\"/app/upgrade\" class=\"button is-info\">Get Premium</a>\n      </div>\n    {{/unless}}\n    \n\n## Mongoose\n\nChanging data on the fly without having to do massive SQL migrations is a blessing and a curse (at times). For a single developer looking to launch something quick. Mongoose can be used to whip up a new app in minutes.\n\n    const feedSchema = new Schema(\n      {\n        user: { type: Schema.Types.ObjectId, ref: \"User\" },\n        title: String,\n        description: String,\n        spreadsheetId: String\n      },\n      { timestamps: true }\n    );\n    \n    const Feed = mongoose.model(\"Feed\", feedSchema);\n    \n\n## Bulma\n\nTheres few CSS frameworks out there that have developer UX in mind like Bulma has. I love the way the docs are presented and the components fit great on the page without needing much in the way of JavaScript to support them (looking at you Bootstrap 3.0).\n\n![](../static/posts/screenshot-www.oneprofile.info-2020.05.02-22_12_09.png)\n\nOne of the many beautiful Bulma websites out there\n\n## Heroku\n\nControversial. But I just like an all in one service and I really hate AWS. So theres not much in the way of services that I know are going to be around forever like Heroku is.\n\nPlus I can one click provision Mongo Databases and create pipelines like a staging environment etc without having to faff around in documentation.\n\n## Conclusion\n\nSo thats the tech stack that helps me build bigger more complex apps. If you're curious I use Next for static sites because Next is just super awesome :)");

/***/ })

})
//# sourceMappingURL=archive.js.30b8048b892074061fc8.hot-update.js.map
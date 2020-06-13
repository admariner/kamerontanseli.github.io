webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./posts/optimizing-gatsby.md":
/*!************************************!*\
  !*** ./posts/optimizing-gatsby.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2020-05-01T09:21:18.000Z'\nhero_image: ../static/posts/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg\ntitle: \"Optimizing Gatsby\"\nbyline: 'I've been getting cuddly with Gatsby over the last 5 months as my new role at Tray.io requires me to oversee the development of their marketing site.'\n---\n\nI've been getting cuddly with [Gatsby](https://www.gatsbyjs.org/) over the last 5 months as my new role at [Tray.io](https://tray.io) requires me to oversee the development of their marketing site.\n\nNormally Gatsby websites build pretty fast. But at Tray.io our website has over 500 hundred thousand pages. We've definitely stress tested Gatsby.\n\nSo here's a few tips that I learn't along the way...\n\n## Keep your queries in your component\n\nOne issue that did arise when building out 500 hundred thousand generated pages was that we had unknowingly created 70 thousand [page queries](https://www.gatsbyjs.org/docs/recipes/querying-data/#querying-data-with-a-page-query) instead of 1 static query.\n\nThe reason this happened was that we had moved the graphql query outside of the component:\n\n    const query = graphql`\n     query {\n       allBlogPosts {\n         title\n       }\n     }\n    `\n    \n    const SampleComponent = () => (\n      <StaticQuery \n       query={query}\n       render={data => {...}}\n      />\n    )\n    \n\nThe reason why this happened was due to two things:\n\n1.  We named our query `query` which is a [special name in Gatsby](https://www.gatsbyjs.org/docs/recipes/querying-data/#directions) when they compile the page files (Note: changing the name still had the same effect).\n2.  The code which decompiles StaticQuery struggles with outside placed queries ( we're still unsure on this)\n\nWe saw an decrease in query times by switching to the hook version of `StaticQuery` :\n\n    const { site } = useStaticQuery(\n        graphql`\n          query {\n            site {\n              siteMetadata {\n                title\n              }\n            }\n          }\n        `\n      )\n    \n\nI think this worked because the [check for whether a hook is used is a lot simpler](https://github.com/gatsbyjs/gatsby/blob/dd344ac4ea292f8b29aa4c55cc08ebc0f19cd761/packages/gatsby/src/query/file-parser.js#L45) compared to the complexity of checking the StaticQuery AST. Less complexity less bugs I guess.\n\n## Stop using all in your queries\n\nIf you're querying for a single blog post then instead of doing an `all` with a filter, you can filter on the singular object. No more checks for whether `edges` has results:\n\n    // before\n    query Test($slug: String) {\n      post: allBlogPosts(limit: 1, filter: { slug: { eq: $slug } }) {\n        edges {\n          node {\n            title\n          }\n        }\n      }\n    }\n    \n    // after\n    query Test($slug: String) {\n      post: blogPost(slug: { eq: $slug }) {\n        title\n      }\n    }\n    \n\n## Limit the amount of data passed to createPage\n\nYou might be tempted like we were to pass down a huge query result to a `pageContext` during build time. But you'd be mistaken...\n\nThe `pageContext` is type checked during the build process as it's passed to a page query ([You can turn this off](https://www.gatsbyjs.org/docs/scaling-issues/#switch-off-type-inference-for-sitepagecontext) but I don't recommend it).\n\nInstead pass down the slug of the page and use a `StaticQuery` to fetch a one time huge query result.");

/***/ })

})
//# sourceMappingURL=[slug].js.23b2fd1df24b48d14d1d.hot-update.js.map
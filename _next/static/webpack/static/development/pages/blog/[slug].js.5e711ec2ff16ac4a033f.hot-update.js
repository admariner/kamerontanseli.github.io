webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./posts/how-to-use-puppeteer-to-scrape-sites.md":
/*!*******************************************************!*\
  !*** ./posts/how-to-use-puppeteer-to-scrape-sites.md ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2020-04-29T20:07:20.000Z'\nhero_image: ../static/posts/5b2d227f688967b0997ea7d0a0a4080f.png\ntitle: \"Getting Started with Puppeteer\"\nbyline: 'In order to scrape a website in 2020 we need to make sure we're using something that can click, tap and scroll as websites have become a lot more dynamic since 1999.'\n---\n\nPrerequisites\n\n*   [Node.js](https://nodejs.org/en/) Installed\n*   [A code editor](https://code.visualstudio.com/)\n\n## Getting Started\n\nIn order to scrape a website in 2020 we need to make sure we're using something that can click, tap and scroll as websites have become a lot more dynamic since 1999.\n\nLuckily [Puppeteer](https://pptr.dev/) is a Node API that allows us to control a [Google Chrome Browser](https://www.google.com/chrome/) using simple code commands.\n\nTo get started we need to install Puppeteer:\n\n    npm i puppeteer --save\n    \n\nThen create a JS file called `index.js` and import Puppeteer like so:\n\n    const puppeteer = require('puppeteer');\n    \n\n## Basic Example\n\nBefore we do any Puppeteering we need to create an [Async IIFE](https://anthonychu.ca/post/async-await-typescript-nodejs/):\n\n    ;(async () => {\n     // code goes here\n    })();\n    \n\nThis will allow us to write `await` calls which are needed as the puppeteer API is asynchronous. Now let's open and close a browser instance:\n\n    ;(async () => {\n      // Opens the browser\n      const browser = await puppeteer.launch();\n      // Opens a new tab\n      const page = await browser.newPage();\n        \n      // closes the entire browser\n      await browser.close();\n    })();\n    \n\nThen after we've got our browser setup let's navigate the tab we opened to go to [HackerNews](https://news.ycombinator.com/):\n\n    (async () => {\n      const browser = await puppeteer.launch();\n      const page = await browser.newPage();\n      // navigates the tab to load HN\n      await page.goto('https://news.ycombinator.com/');\n      await browser.close();\n    })();\n    \n\nGreat now that we have a program that can open HackerNews. Let's grab the top 10 headlines:\n\n    (async () => {\n      const browser = await puppeteer.launch();\n      const page = await browser.newPage();\n      await page.goto('https://news.ycombinator.com/');\n      // queries the page and returns an Array of Elements\n      const headlines = await page.$$eval(\n       '.storylink', \n       // grab the top 10 and get the titles\n       stories => stories.slice(0, 10).map(s => s.innerText)\n      );\n      // log to the console\n      console.log(headlines.join('\\n'))\n      await browser.close();\n    })();\n    \n\nOur console should now output a result like this:\n\n    Using Reinforcement Learning in the Algorithmic Trading Problem\n    Show HN: Insomnia Designer – Open-source collaborative editor for API design\n    What other coronaviruses tell us about SARS-CoV-2\n    Hacking Together an E-ink Dashboard\n    Lyft lays off 17% of workforce, furloughs hundreds more\n    Recovered virus patients retest positive due to 'dead' virus fragments: experts\n    Why Segment Went Back to a Monolith\n    Iron Ox is looking for a DevOps engineer to help scale automated indoor farming\n    Good writing is a business advantage\n    Building a WireGuard jail with FreeBSD's standard tools\n    \n\n## Clicking Elements\n\nA more advanced example is clicking an element on the page. Luckily with Puppeteer its quite straight forward. Here's an example of clicking the upvote button on the front page of HN:\n\n    (async () => {\n      const browser = await puppeteer.launch();\n      const page = await browser.newPage();\n      // navigates to HN\n      await page.goto('https://news.ycombinator.com/');\n      // clicks the first vote arrow on the page\n      await page.click('.votearrow')\n      await browser.close();\n    })();");

/***/ })

})
//# sourceMappingURL=[slug].js.5e711ec2ff16ac4a033f.hot-update.js.map
"use strict";
exports.id = 7532;
exports.ids = [7532];
exports.modules = {

/***/ 6190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7420);


const cardMouseEffect = featureEl => {
  var featuresitems = featureEl;

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMouseEffect);

/***/ }),

/***/ 6025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ thumparallax),
/* harmony export */   "D": () => (/* binding */ thumparallaxDown)
/* harmony export */ });
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};

/***/ }),

/***/ 7532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6190);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */






const MinimalArea = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_3__/* .thumparallaxDown */ .D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
    className: "min-area sub-bg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              className: "thumparallax-down",
              src: "/img/min-area.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "content pt-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
              className: "wow color-font",
              children: "About us."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "wow txt",
              "data-splitting": true,
              children: "Our service is ranked among the finest in the UAE. We cultivate smart ideas for start-ups and seasoned players."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              className: "feat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    children: "1"
                  }), " Our Message"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  children: "To be the gateway to safe investment in the UAE and to work to create investment opportunities for investors from outside and within the country by connecting them with the appropriate partner, providing information on all aspects of doing business, and supporting them with sources of local talent that contribute to raising the local value ratio of foreign investors, which has become one of the Main requirements, identifying cost-effective solutions, building large brands within the UAE market, presenting creative ideas to differentiate in the local market, and supporting it with the best marketing strategies and plans that help it be the best among its competitors."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    children: "2"
                  }), " Our vision"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  children: "To be the most trusted partner for all investors in the United Arab Emirates and to become a leader in providing innovative and sustainable solutions that meet the needs of our customers and business partners. We aim to build long-term relationships with our customers based on trust and mutual cooperation, and we seek to achieve joint success by achieving their goals and aspirations."
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimalArea);

/***/ })

};
;
"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services5)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/data/sections/features.json
var features = __webpack_require__(3473);
;// CONCATENATED MODULE: ./src/data/sections/features1.json
const features1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Investment opportunities","content":"In the era of innovation and development, companies and entrepreneurs are racing to achieve success and excellence in the global business market."},{"id":2,"icon":"pe-7s-phone","title":"Establishing projects","content":"The UAE is one of the most attractive destinations for entrepreneurship in the world, and is characterized by an encouraging environment and advanced regulatory facilities."},{"id":3,"icon":"pe-7s-display1","title":"Project development","content":"Business Hub provides project development services as it includes experts in the field of marketing and sales and is one of the most important companies in commercial brokerage "},{"id":4,"icon":"pe-7s-diskette","title":"Project management","content":" Business Hub provides project management services and works to provide all the employees necessary to manage your project and helps you reduce the cost of your operational budget."}]');
;// CONCATENATED MODULE: ./src/data/sections/features2.json
const features2_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Petroleum consulting","content":" We provide consultations and solutions in the oil field in the oil fields and oil refineries sector, assessing the extent of the damage and finding alternative solutions. "},{"id":2,"icon":"pe-7s-phone","title":"Marketing consulting","content":"BUSINESS HUB provides marketing consulting service as a specialized service aimed at enhancing the success of companies in the market…."},{"id":3,"icon":"pe-7s-display1","title":"Economic advice","content":"Economic consulting service as part of our range of specialized services. We work to help companies understand and analyze economic dynamics..."}]');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Services5/services5.jsx







const Services5 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "services box lficon section-padding position-re",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "We are a new business establishment servicet agency"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "wow color-font",
        children: "Marketing and administrative services"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: features1_namespaceObject.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": index == 0 ? ".5s" : index == 1 ? ".7s" : index === 2 ? ".9s" : ".5s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box no-curve",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `icon color-font ${item.icon}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.content
              })]
            })]
          })
        }, item.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: features.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": index == 0 ? ".5s" : index == 1 ? ".7s" : index === 2 ? ".9s" : ".5s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box no-curve",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `icon color-font ${item.icon}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.content
              })]
            })]
          })
        }, item.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "wow color-font mt-3",
        children: "Consulting services"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: features2_namespaceObject.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 wow fadeInLeft",
          "data-wow-delay": index == 0 ? ".5s" : index == 1 ? ".7s" : index === 2 ? ".9s" : ".5s",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-box no-curve",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `icon color-font ${item.icon}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.content
              })]
            })]
          })
        }, item.id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom right"
    })]
  });
};

/* harmony default export */ const services5 = (Services5);

/***/ })

};
;
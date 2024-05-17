"use strict";
exports.id = 7397;
exports.ids = [7397];
exports.modules = {

/***/ 7397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ team)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = {};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Team/team.jsx
/* eslint-disable @next/next/no-img-element */







const Team = () => {
  external_react_default().useEffect(() => {
    common_teamSkillsProgress();
    setTimeout(() => {
      (0,tooltipEffect/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "team section-padding",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Our Team"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "Our team will simplify business setup in the UAE"
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/01.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle1",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath1",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath1",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/02.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath2",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath2",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir sm-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/03.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle3",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath3",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath3",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/04.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath4",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath4",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/05.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle1",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath1",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath1",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/06.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath2",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath2",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir sm-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/07.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle3",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath3",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath3",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/08.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath4",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath4",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/09.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle1",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath1",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath1",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/10.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath2",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath2",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir sm-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/11.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle3",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath3",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath3",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item cir",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "img",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/img/team/12.webp",
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "circle4",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  width: "300px",
                  height: "300px",
                  viewBox: "0 0 300 300",
                  enableBackground: "new 0 0 300 300",
                  xmlSpace: "preserve",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      id: "circlePath4",
                      d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                    cx: "150",
                    cy: "100",
                    r: "75",
                    fill: "none"
                  }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: "#circlePath4",
                      fill: "none"
                    })
                  })]
                })
              })]
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const team = (Team);

/***/ })

};
;
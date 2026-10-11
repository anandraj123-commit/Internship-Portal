(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/HeroSection.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function HeroSection() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const slider = document.getElementById("rev_slider_2_1");
            let frame;
            const layout = {
                "HeroSection.useEffect.layout": ()=>{
                    if (window.innerWidth <= 1200) return;
                    slider.querySelectorAll("rs-group").forEach({
                        "HeroSection.useEffect.layout": (group)=>{
                            const heading = group.querySelector('rs-layer[id$="-layer-3"]');
                            const description = group.querySelector('rs-layer[id$="-layer-4"]');
                            if (!heading || !description) return;
                            const range = document.createRange();
                            range.selectNodeContents(heading.firstElementChild);
                            const headingWidth = range.getBoundingClientRect().width;
                            if (!headingWidth) return;
                            group.style.setProperty("--description-width", `${headingWidth * 0.8}px`);
                            const descriptionTop = heading.offsetHeight + 16;
                            const buttonsTop = descriptionTop + description.offsetHeight + 32;
                            const buttons = group.querySelectorAll('a[id$="-layer-5"]');
                            const buttonHeight = Math.max(...Array.from(buttons, {
                                "HeroSection.useEffect.layout.buttonHeight": (button)=>button.offsetHeight
                            }["HeroSection.useEffect.layout.buttonHeight"]));
                            group.style.setProperty("--description-top", `${descriptionTop}px`);
                            group.style.setProperty("--buttons-top", `${buttonsTop}px`);
                            group.parentElement.style.setProperty("--hero-copy-height", `${buttonsTop + buttonHeight}px`);
                        }
                    }["HeroSection.useEffect.layout"]);
                }
            }["HeroSection.useEffect.layout"];
            const schedule = {
                "HeroSection.useEffect.schedule": ()=>{
                    cancelAnimationFrame(frame);
                    frame = requestAnimationFrame(layout);
                }
            }["HeroSection.useEffect.schedule"];
            const observer = new ResizeObserver(schedule);
            slider.querySelectorAll('rs-layer[id$="-layer-3"], rs-layer[id$="-layer-4"], a[id$="-layer-5"]').forEach({
                "HeroSection.useEffect": (layer)=>observer.observe(layer)
            }["HeroSection.useEffect"]);
            window.addEventListener("resize", schedule);
            document.fonts.ready.then(schedule);
            schedule();
            return ({
                "HeroSection.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener("resize", schedule);
                    cancelAnimationFrame(frame);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "elementor-section elementor-top-section elementor-element elementor-element-596b063 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-full-content-with-space-none pxl-bg-color-none pxl-section-overlay-none",
            "data-id": "596b063",
            "data-element_type": "section",
            "data-e-type": "section",
            "data-settings": '{"background_background":"classic","stretch_section":"section-stretched"}',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "elementor-container elementor-column-gap-no ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8181532 pxl-column-none pxl-column-overflow-hidden-no",
                    "data-id": "8181532",
                    "data-element_type": "column",
                    "data-e-type": "column",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "elementor-widget-wrap elementor-element-populated",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "elementor-element elementor-element-19942a8 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-pxl_icon",
                                "data-id": "19942a8",
                                "data-element_type": "widget",
                                "data-e-type": "widget",
                                "data-settings": '{"_position":"absolute"}',
                                "data-widget_type": "pxl_icon.default",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "elementor-widget-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pxl-icon-list pxl-icon1 style-2 ",
                                        "data-wow-delay": "ms",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "elementor-repeater-item-1b713b3 ps-top",
                                                href: "https://www.instagram.com/radhikaskillforge2026/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "elementor-repeater-item-f38c69c ps-top",
                                                href: "https://www.linkedin.com/company/109134933/admin/dashboard/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-linkedin-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "elementor-repeater-item-42b099a ps-top",
                                                href: "https://www.facebook.com/profile.php?id=61580600206501",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-facebook-f"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/HeroSection.jsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/HeroSection.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/HeroSection.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "elementor-section elementor-inner-section elementor-element elementor-element-c8dc0ba elementor-section-full_width pxl-section-overflow-hidden elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-fix-none pxl-full-content-with-space-none pxl-bg-color-none pxl-section-overlay-none",
                                "data-id": "c8dc0ba",
                                "data-element_type": "section",
                                "data-e-type": "section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "elementor-container elementor-column-gap-no ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2f3f99d pxl-column-none pxl-column-overflow-hidden-no",
                                        "data-id": "2f3f99d",
                                        "data-element_type": "column",
                                        "data-e-type": "column",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "elementor-widget-wrap elementor-element-populated",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "elementor-element elementor-element-2d2bd7c elementor-widget elementor-widget-slider_revolution",
                                                "data-id": "2d2bd7c",
                                                "data-element_type": "widget",
                                                "data-e-type": "widget",
                                                "data-widget_type": "slider_revolution.default",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "elementor-widget-container",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "wp-block-themepunch-revslider",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "rs-p-wp-fix"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                lineNumber: 152,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-module-wrap", {
                                                                id: "rev_slider_2_1_wrapper",
                                                                "data-source": "gallery",
                                                                style: {
                                                                    visibility: "hidden",
                                                                    background: "transparent",
                                                                    padding: "0",
                                                                    margin: "0px auto",
                                                                    marginTop: "0",
                                                                    marginBottom: "0"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-module", {
                                                                    id: "rev_slider_2_1",
                                                                    style: {},
                                                                    "data-version": "6.6.16",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slides", {
                                                                        style: {
                                                                            overflow: "hidden",
                                                                            position: "absolute"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-3",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "/images/internship-hero.jpg",
                                                                                "data-in": "o:0;",
                                                                                "data-out": "a:false;",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        decoding: "async",
                                                                                        src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                        alt: "",
                                                                                        title: "u-slider-bg2",
                                                                                        width: "1800",
                                                                                        height: "1066",
                                                                                        className: "rev-slidebg tp-rs-img rs-lazyload",
                                                                                        "data-lazyload": "/images/internship-hero.jpg",
                                                                                        "data-panzoom": "d:10000;ss:110%;se:100%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 186,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-group", {
                                                                                        id: "slider-2-slide-3-layer-2",
                                                                                        "data-type": "group",
                                                                                        "data-xy": "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;",
                                                                                        "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                        "data-dim": "w:800px,800px,600px,300px;h:300px,300px,320px,350px;",
                                                                                        "data-rsp_o": "off",
                                                                                        "data-rsp_bd": "off",
                                                                                        "data-frame_0": "o:1;",
                                                                                        "data-frame_999": "o:0;st:w;sR:8700;sA:9000;",
                                                                                        style: {
                                                                                            zIndex: "8"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-3-layer-6",
                                                                                                "data-type": "image",
                                                                                                "data-xy": "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                                "data-dim": "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:-50;",
                                                                                                "data-frame_1": "st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                "data-loop_0": "o:0;",
                                                                                                "data-loop_999": "sp:1800;st:600;e:sine.inOut;yyf:t;",
                                                                                                style: {
                                                                                                    zIndex: "10"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    decoding: "async",
                                                                                                    src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                                    alt: "",
                                                                                                    className: "tp-rs-img rs-lazyload",
                                                                                                    width: "42",
                                                                                                    height: "42",
                                                                                                    "data-lazyload": "/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 248,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 224,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-3-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "/service",
                                                                                                target: "_self",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "y:b;yo:5px,5px,5px,90px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1300;sp:1000;sR:1300;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6700;",
                                                                                                style: {
                                                                                                    zIndex: "8",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "btn btn-slider1 btn-text-nina",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            "data-text": "View Services",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "V"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 298,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 299,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 300,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 301,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 302,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 303,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 304,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 305,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 306,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 307,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 308,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 309,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 310,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 294,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 312,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 289,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 263,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-3-layer-4",
                                                                                                "data-type": "text",
                                                                                                "data-color": "#d2d2d2",
                                                                                                "data-xy": "yo:110px,110px,146px,96px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,20,17,15;l:36,36,30,24;",
                                                                                                "data-dim": "w:570px,570px,460px,280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1050;sp:1000;sR:1050;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6950;",
                                                                                                style: {
                                                                                                    zIndex: "7",
                                                                                                    fontFamily: "'Lato'"
                                                                                                },
                                                                                                children: "Explore online internships for college students in India with Radhika SkillForge, an initiative of Apurva Software Solutions, an AICTE approved company for internships. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 319,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-3-layer-3",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "yo:-14px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                style: {
                                                                                                    zIndex: "6",
                                                                                                    fontFamily: "'Inter Tight'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-gradient-top",
                                                                                                    children: [
                                                                                                        "Internship",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 367,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 370,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nProgramme ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "with Us"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 372,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 365,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 345,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-3-layer-0",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_1": "sp:0;",
                                                                                        "data-frame_999": "o:0;st:w;sR:8700;",
                                                                                        style: {
                                                                                            zIndex: "6",
                                                                                            backgroundColor: "rgba(0,0,0,0.78)"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 385,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-4",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "/images/internship-web-dev.jpg",
                                                                                "data-in": "o:0;",
                                                                                "data-out": "a:false;",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        loading: "lazy",
                                                                                        decoding: "async",
                                                                                        src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                        alt: "",
                                                                                        title: "u-bg-slide-2",
                                                                                        width: "1800",
                                                                                        height: "1066",
                                                                                        className: "rev-slidebg tp-rs-img rs-lazyload",
                                                                                        "data-lazyload": "/images/internship-web-dev.jpg",
                                                                                        "data-panzoom": "d:10000;ss:100%;se:110%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 412,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-group", {
                                                                                        id: "slider-2-slide-4-layer-2",
                                                                                        "data-type": "group",
                                                                                        "data-xy": "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;",
                                                                                        "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                        "data-dim": "w:800px,800px,600px,300px;h:300px,300px,320px,350px;",
                                                                                        "data-rsp_o": "off",
                                                                                        "data-rsp_bd": "off",
                                                                                        "data-frame_0": "o:1;",
                                                                                        "data-frame_999": "o:0;st:w;sR:8700;sA:9000;",
                                                                                        style: {
                                                                                            zIndex: "8"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-4-layer-6",
                                                                                                "data-type": "image",
                                                                                                "data-xy": "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                                "data-dim": "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:-50;",
                                                                                                "data-frame_1": "st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                "data-loop_0": "o:0;",
                                                                                                "data-loop_999": "sp:1800;st:600;e:sine.inOut;yyf:t;",
                                                                                                style: {
                                                                                                    zIndex: "10"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    decoding: "async",
                                                                                                    src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                                    alt: "",
                                                                                                    className: "tp-rs-img rs-lazyload",
                                                                                                    width: "42",
                                                                                                    height: "42",
                                                                                                    "data-lazyload": "/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 475,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 451,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-4-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "/service",
                                                                                                target: "_self",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "y:b;yo:5px,5px,5px,90px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1300;sp:1000;sR:1300;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6700;",
                                                                                                style: {
                                                                                                    zIndex: "8",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "btn btn-slider1 btn-text-nina",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            "data-text": "View Services",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "V"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 525,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 526,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 527,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 528,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 529,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 530,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 531,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 532,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 533,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 534,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 535,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 536,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 537,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 521,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 539,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 516,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 490,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-4-layer-4",
                                                                                                "data-type": "text",
                                                                                                "data-color": "#d2d2d2",
                                                                                                "data-xy": "yo:110px,110px,146px,96px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,20,17,15;l:36,36,30,24;",
                                                                                                "data-dim": "w:570px,570px,460px,280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1050;sp:1000;sR:1050;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6950;",
                                                                                                style: {
                                                                                                    zIndex: "7",
                                                                                                    fontFamily: "'Lato'"
                                                                                                },
                                                                                                children: "Explore internship training for engineering students and internship opportunities for non-technical students, subject to domain eligibility. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 546,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-4-layer-3",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "yo:-14px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                style: {
                                                                                                    zIndex: "6",
                                                                                                    fontFamily: "'Inter Tight'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-gradient-top",
                                                                                                    children: [
                                                                                                        "Learn Onlin",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "e"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 594,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 597,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nProgramme ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "with Us"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 599,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 592,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 572,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 431,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-4-layer-0",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_1": "sp:0;",
                                                                                        "data-frame_999": "o:0;st:w;sR:9000;",
                                                                                        style: {
                                                                                            zIndex: "6",
                                                                                            backgroundColor: "rgba(0,0,0,0.78)"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 612,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 402,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-5",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "/images/internship-mentorship.jpg",
                                                                                "data-in": "o:0;",
                                                                                "data-out": "a:false;",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        loading: "lazy",
                                                                                        decoding: "async",
                                                                                        src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                        alt: "",
                                                                                        title: "u-bg-slide-3",
                                                                                        width: "1800",
                                                                                        height: "1066",
                                                                                        className: "rev-slidebg tp-rs-img rs-lazyload",
                                                                                        "data-lazyload": "/images/internship-mentorship.jpg",
                                                                                        "data-panzoom": "d:10000;ss:110%;se:100%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 639,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-group", {
                                                                                        id: "slider-2-slide-5-layer-2",
                                                                                        "data-type": "group",
                                                                                        "data-xy": "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;",
                                                                                        "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                        "data-dim": "w:800px,800px,600px,300px;h:300px,300px,320px,350px;",
                                                                                        "data-rsp_o": "off",
                                                                                        "data-rsp_bd": "off",
                                                                                        "data-frame_0": "o:1;",
                                                                                        "data-frame_999": "o:0;st:w;sR:8700;sA:9000;",
                                                                                        style: {
                                                                                            zIndex: "8"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-5-layer-6",
                                                                                                "data-type": "image",
                                                                                                "data-xy": "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                                "data-dim": "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:-50;",
                                                                                                "data-frame_1": "st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                "data-loop_0": "o:0;",
                                                                                                "data-loop_999": "sp:1800;st:600;e:sine.inOut;yyf:t;",
                                                                                                style: {
                                                                                                    zIndex: "10"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    decoding: "async",
                                                                                                    src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                                    alt: "",
                                                                                                    className: "tp-rs-img rs-lazyload",
                                                                                                    width: "42",
                                                                                                    height: "42",
                                                                                                    "data-lazyload": "/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 702,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 678,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-5-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "/service",
                                                                                                target: "_self",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "y:b;yo:5px,5px,5px,90px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1300;sp:1000;sR:1300;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6700;",
                                                                                                style: {
                                                                                                    zIndex: "8",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "btn btn-slider1 btn-text-nina",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            "data-text": "View Services",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "V"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 752,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 753,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 754,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 755,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 756,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 757,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 758,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 759,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 760,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 761,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 762,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 763,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 764,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 748,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 766,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 743,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 717,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-5-layer-4",
                                                                                                "data-type": "text",
                                                                                                "data-color": "#d2d2d2",
                                                                                                "data-xy": "yo:110px,110px,146px,96px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,20,17,15;l:36,36,30,24;",
                                                                                                "data-dim": "w:570px,570px,460px,280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1050;sp:1000;sR:1050;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6950;",
                                                                                                style: {
                                                                                                    zIndex: "7",
                                                                                                    fontFamily: "'Lato'"
                                                                                                },
                                                                                                children: "Build practical skills through project-based internship training for students, with assignments and mentor guidance. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 773,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-5-layer-3",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "yo:-14px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                style: {
                                                                                                    zIndex: "6",
                                                                                                    fontFamily: "'Inter Tight'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-gradient-top",
                                                                                                    children: [
                                                                                                        "Build Skill",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 821,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 824,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nProgramme ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "with Us"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 826,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 819,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 799,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 658,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-5-layer-0",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_1": "sp:0;",
                                                                                        "data-frame_999": "o:0;st:w;sR:9000;",
                                                                                        style: {
                                                                                            zIndex: "6",
                                                                                            backgroundColor: "rgba(0,0,0,0.78)"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 839,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 629,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-6",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "/images/internship-mobile-app.jpg",
                                                                                "data-in": "o:0;",
                                                                                "data-out": "a:false;",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        loading: "lazy",
                                                                                        decoding: "async",
                                                                                        src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                        alt: "",
                                                                                        title: "u-bg-slide-4",
                                                                                        width: "1800",
                                                                                        height: "1066",
                                                                                        className: "rev-slidebg tp-rs-img rs-lazyload",
                                                                                        "data-lazyload": "/images/internship-mobile-app.jpg",
                                                                                        "data-panzoom": "d:10000;ss:100%;se:110%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 866,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-group", {
                                                                                        id: "slider-2-slide-6-layer-2",
                                                                                        "data-type": "group",
                                                                                        "data-xy": "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;",
                                                                                        "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                        "data-dim": "w:800px,800px,600px,300px;h:300px,300px,320px,350px;",
                                                                                        "data-rsp_o": "off",
                                                                                        "data-rsp_bd": "off",
                                                                                        "data-frame_0": "o:1;",
                                                                                        "data-frame_999": "o:0;st:w;sR:8700;sA:9000;",
                                                                                        style: {
                                                                                            zIndex: "8"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-6-layer-6",
                                                                                                "data-type": "image",
                                                                                                "data-xy": "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,17,12,7;l:0,21,15,9;",
                                                                                                "data-dim": "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:-50;",
                                                                                                "data-frame_1": "st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                "data-loop_0": "o:0;",
                                                                                                "data-loop_999": "sp:1800;st:600;e:sine.inOut;yyf:t;",
                                                                                                style: {
                                                                                                    zIndex: "10"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                    decoding: "async",
                                                                                                    src: "/wp-content/plugins/revslider/public/assets/assets/dummy.png",
                                                                                                    alt: "",
                                                                                                    className: "tp-rs-img rs-lazyload",
                                                                                                    width: "42",
                                                                                                    height: "42",
                                                                                                    "data-lazyload": "/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 929,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 905,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-6-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "/service",
                                                                                                target: "_self",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "y:b;yo:5px,5px,5px,90px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1300;sp:1000;sR:1300;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6700;",
                                                                                                style: {
                                                                                                    zIndex: "8",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "btn btn-slider1 btn-text-nina",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            "data-text": "View Services",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "V"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 979,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 980,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 981,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 982,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 983,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 984,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 985,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 986,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 987,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 988,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 989,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 990,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 991,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 975,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 993,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 970,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 944,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-6-layer-4",
                                                                                                "data-type": "text",
                                                                                                "data-color": "#d2d2d2",
                                                                                                "data-xy": "yo:110px,110px,146px,96px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:20,20,17,15;l:36,36,30,24;",
                                                                                                "data-dim": "w:570px,570px,460px,280px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "y:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1050;sp:1000;sR:1050;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6950;",
                                                                                                style: {
                                                                                                    zIndex: "7",
                                                                                                    fontFamily: "'Lato'"
                                                                                                },
                                                                                                children: "Explore online internship training for beginners in India. Participation depends on your chosen domain and programme. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1000,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-6-layer-3",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "yo:-14px;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:800;sp:1000;sR:800;",
                                                                                                "data-frame_999": "o:0;st:w;sR:7200;",
                                                                                                style: {
                                                                                                    zIndex: "6",
                                                                                                    fontFamily: "'Inter Tight'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-gradient-top",
                                                                                                    children: [
                                                                                                        "Explore Domain",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1048,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1051,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nProgramme ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "with Us"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1053,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 1046,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1026,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 885,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-6-layer-0",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_1": "sp:0;",
                                                                                        "data-frame_999": "o:0;st:w;sR:9000;",
                                                                                        style: {
                                                                                            zIndex: "6",
                                                                                            backgroundColor: "rgba(0,0,0,0.78)"
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 1066,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                lineNumber: 153,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 141,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/HeroSection.jsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/HeroSection.jsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/HeroSection.jsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/HeroSection.jsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/HeroSection.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.jsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/HeroSection.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/HeroSection.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_home_HeroSection_jsx_0moaouk._.js.map
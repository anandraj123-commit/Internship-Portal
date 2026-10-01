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
                            const buttons = group.querySelectorAll('a[id$="-layer-5"], rs-layer[id$="-layer-7"]');
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
            slider.querySelectorAll('rs-layer[id$="-layer-3"], rs-layer[id$="-layer-4"], a[id$="-layer-5"], rs-layer[id$="-layer-7"]').forEach({
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
                                                href: "/#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "elementor-repeater-item-f38c69c ps-top",
                                                href: "/#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-linkedin-in"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "elementor-repeater-item-42b099a ps-top",
                                                href: "/#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    "aria-hidden": "true",
                                                    className: "fab fa-facebook-f"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 101,
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
                                                                lineNumber: 146,
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
                                                                                "data-thumb": "//itagency.in/wp-content/uploads/2023/09/u-slider-bg2-300x300.jpg",
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
                                                                                        "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-slider-bg2.jpg",
                                                                                        "data-panzoom": "d:10000;ss:110%;se:100%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 180,
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
                                                                                                    "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 242,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 218,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-3-layer-7",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "xo:280px,280px,280px,0;y:b;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:250px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1550;sp:1000;sR:1550;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6450;",
                                                                                                style: {
                                                                                                    zIndex: "9",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    className: "shortcode-btn-style1 pxl-action-popup btn-text-parallax",
                                                                                                    href: "https://www.youtube.com/watch?v=SF4aHwxHtZ0",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 286,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            children: "Video"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 291,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 278,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 257,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-3-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "https://demo.casethemes.net/saira/our-services/",
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
                                                                                                                    lineNumber: 331,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 332,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 333,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 334,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 335,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 336,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 337,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 338,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 339,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 340,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 341,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 342,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 343,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 327,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 345,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 322,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 296,
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
                                                                                                children: "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 352,
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
                                                                                                        "Grow Busines",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 400,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 403,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nRevenue ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "Today"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 405,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 398,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 378,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 198,
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
                                                                                        lineNumber: 418,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-3-layer-1",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_0": "y:50;",
                                                                                        "data-frame_1": "st:1700;sp:1000;",
                                                                                        "data-frame_999": "o:0;st:w;sR:7000;",
                                                                                        style: {
                                                                                            zIndex: "7",
                                                                                            backgroundColor: "rgba(0,0,0,0)"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-bg-elem", {
                                                                                            style: {
                                                                                                background: "url('/wp-content/uploads/2023/09/u-slider-overlay.png') no-repeat left top",
                                                                                                backgroundSize: "cover"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                            lineNumber: 451,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 434,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-4",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-2-300x300.jpg",
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
                                                                                        "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-2.jpg",
                                                                                        "data-panzoom": "d:10000;ss:100%;se:110%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 470,
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
                                                                                                    "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 533,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 509,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-4-layer-7",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "xo:280px,280px,280px,0;y:b;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:250px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1550;sp:1000;sR:1550;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6450;",
                                                                                                style: {
                                                                                                    zIndex: "9",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    className: "shortcode-btn-style1 pxl-action-popup btn-text-parallax",
                                                                                                    href: "https://www.youtube.com/watch?v=SF4aHwxHtZ0",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 577,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            children: "Video"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 582,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 569,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 548,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-4-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "https://demo.casethemes.net/saira/our-services/",
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
                                                                                                                    lineNumber: 622,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 623,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 624,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 625,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 626,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 627,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 628,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 629,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 630,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 631,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 632,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 633,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 634,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 618,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 636,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 613,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 587,
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
                                                                                                children: "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 643,
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
                                                                                                        "Grow Financ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "e"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 691,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 694,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nRevenue ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "Today"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 696,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 689,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 669,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 489,
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
                                                                                        lineNumber: 709,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-4-layer-1",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_0": "y:50;",
                                                                                        "data-frame_1": "st:1700;sp:1000;",
                                                                                        "data-frame_999": "o:0;st:w;sR:7000;",
                                                                                        style: {
                                                                                            zIndex: "7",
                                                                                            backgroundColor: "rgba(0,0,0,0)"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-bg-elem", {
                                                                                            style: {
                                                                                                background: "url('/wp-content/uploads/2023/09/u-slider-overlay.png') no-repeat left top",
                                                                                                backgroundSize: "cover"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                            lineNumber: 742,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 725,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 460,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-5",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-3-300x300.jpg",
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
                                                                                        "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-3.jpg",
                                                                                        "data-panzoom": "d:10000;ss:110%;se:100%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 761,
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
                                                                                                    "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 824,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 800,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-5-layer-7",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "xo:280px,280px,280px,0;y:b;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:250px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1550;sp:1000;sR:1550;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6450;",
                                                                                                style: {
                                                                                                    zIndex: "9",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    className: "shortcode-btn-style1 pxl-action-popup btn-text-parallax",
                                                                                                    href: "https://www.youtube.com/watch?v=SF4aHwxHtZ0",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 868,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            children: "Video"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 873,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 860,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 839,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-5-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "https://demo.casethemes.net/saira/our-services/",
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
                                                                                                                    lineNumber: 913,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 914,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 915,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 916,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 917,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 918,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 919,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 920,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 921,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 922,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 923,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 924,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 925,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 909,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 927,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 904,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 878,
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
                                                                                                children: "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 934,
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
                                                                                                        "Grow Analytic",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 982,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 985,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nRevenue ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "Today"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 987,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 980,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 960,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 780,
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
                                                                                        lineNumber: 1000,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-5-layer-1",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_0": "y:50;",
                                                                                        "data-frame_1": "st:1700;sp:1000;",
                                                                                        "data-frame_999": "o:0;st:w;sR:7000;",
                                                                                        style: {
                                                                                            zIndex: "7",
                                                                                            backgroundColor: "rgba(0,0,0,0)"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-bg-elem", {
                                                                                            style: {
                                                                                                background: "url('/wp-content/uploads/2023/09/u-slider-overlay.png') no-repeat left top",
                                                                                                backgroundSize: "cover"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                            lineNumber: 1033,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 1016,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 751,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-slide", {
                                                                                style: {
                                                                                    position: "absolute"
                                                                                },
                                                                                "data-key": "rs-6",
                                                                                "data-title": "Slide",
                                                                                "data-thumb": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-4-300x300.jpg",
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
                                                                                        "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-4.jpg",
                                                                                        "data-panzoom": "d:10000;ss:100%;se:110%;",
                                                                                        "data-no-retina": ""
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 1052,
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
                                                                                                    "data-lazyload": "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png",
                                                                                                    "data-no-retina": ""
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 1115,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1091,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                                id: "slider-2-slide-6-layer-7",
                                                                                                "data-type": "text",
                                                                                                "data-xy": "xo:280px,280px,280px,0;y:b;",
                                                                                                "data-pos": "a",
                                                                                                "data-text": "w:normal;s:13;l:25,21,15,9;",
                                                                                                "data-dim": "w:250px;",
                                                                                                "data-rsp_o": "off",
                                                                                                "data-rsp_bd": "off",
                                                                                                "data-frame_0": "x:50;",
                                                                                                "data-frame_1": "e:back.inOut;st:1550;sp:1000;sR:1550;",
                                                                                                "data-frame_999": "o:0;st:w;sR:6450;",
                                                                                                style: {
                                                                                                    zIndex: "9",
                                                                                                    fontFamily: "'Roboto'"
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                    className: "shortcode-btn-style1 pxl-action-popup btn-text-parallax",
                                                                                                    href: "https://www.youtube.com/watch?v=SF4aHwxHtZ0",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1159,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "pxl--btn-text",
                                                                                                            children: "Video"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1164,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 1151,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1130,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                id: "slider-2-slide-6-layer-5",
                                                                                                className: "rs-layer",
                                                                                                href: "https://demo.casethemes.net/saira/our-services/",
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
                                                                                                                    lineNumber: 1204,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1205,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1206,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "w"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1207,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "spacer"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1208,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "S"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1209,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1210,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "r"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1211,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "v"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1212,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "i"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1213,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "c"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1214,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "e"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1215,
                                                                                                                    columnNumber: 45
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    children: "s"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                                    lineNumber: 1216,
                                                                                                                    columnNumber: 45
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1200,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "flaticon-right-up pxl-ml-14"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1218,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 1195,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1169,
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
                                                                                                children: "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1225,
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
                                                                                                        "AI & Robotic",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-box-gradient",
                                                                                                            children: "s"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1273,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1276,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        "\nRevenue ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-gradient",
                                                                                                            style: {
                                                                                                                "--gradient-color-from": "var(--brand-color)",
                                                                                                                "--gradient-color-to": "var(--brand-color)"
                                                                                                            },
                                                                                                            children: "Today"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                            lineNumber: 1278,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                    lineNumber: 1271,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                                lineNumber: 1251,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 1071,
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
                                                                                        lineNumber: 1291,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-layer", {
                                                                                        id: "slider-2-slide-6-layer-1",
                                                                                        "data-type": "shape",
                                                                                        "data-rsp_ch": "on",
                                                                                        "data-text": "w:normal;s:20,16,12,7;l:0,20,15,9;",
                                                                                        "data-dim": "w:100%;h:100%;",
                                                                                        "data-basealign": "slide",
                                                                                        "data-frame_0": "y:50;",
                                                                                        "data-frame_1": "st:1700;sp:1000;",
                                                                                        "data-frame_999": "o:0;st:w;sR:7000;",
                                                                                        style: {
                                                                                            zIndex: "7",
                                                                                            backgroundColor: "rgba(0,0,0,0)"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rs-bg-elem", {
                                                                                            style: {
                                                                                                background: "url('/wp-content/uploads/2023/09/u-slider-overlay.png') no-repeat left top",
                                                                                                backgroundSize: "cover"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/home/HeroSection.jsx",
                                                                                            lineNumber: 1324,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                                        lineNumber: 1307,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                                lineNumber: 1042,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                                lineNumber: 147,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/HeroSection.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/HeroSection.jsx",
                                                    lineNumber: 144,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/HeroSection.jsx",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/HeroSection.jsx",
                                            lineNumber: 130,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/HeroSection.jsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/HeroSection.jsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/HeroSection.jsx",
                                lineNumber: 113,
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
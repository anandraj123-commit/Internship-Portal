import { useEffect } from "react";

// The exported theme requires its plugins in their original dependency order.
// Navigation uses normal anchors so every page receives a fresh plugin lifecycle.
export default function LegacyScripts({ scripts }) {
  useEffect(() => {
    if (window.__agencyScriptsStarted) return;
    window.__agencyScriptsStarted = true;
    async function initialize() {
      for (const script of scripts) {
        // The export omits WordPress emoji assets; browsers render emoji natively.
        if (
          script.id === "wp-emoji-settings" ||
          script.code.includes("script#wp-emoji-settings")
        )
          continue;
        const element = document.createElement("script");
        if (script.id) element.id = script.id;
        if (script.type) element.type = script.type;
        if (script.src) {
          element.src = script.src;
          element.async = false;
          await new Promise((resolve) => {
            element.onload = () => {
              // Match the export's parser-loaded lifecycle: register every
              // widget before Elementor runs its document-ready initialization.
              if (script.id === "jquery-core-js") {
                window.jQuery.holdReady(true);
              }
              resolve();
            };
            element.onerror = () => {
              console.error(`Unable to load ${script.src}`);
              resolve();
            };
            document.body.appendChild(element);
          });
        } else {
          element.textContent = script.code;
          document.body.appendChild(element);
        }
      }
      if (window.jQuery) {
        window.jQuery(() => window.dispatchEvent(new Event("load")));
        window.jQuery.holdReady(false);
      } else {
        window.dispatchEvent(new Event("load"));
      }
    }
    initialize();
  }, [scripts]);
  return null;
}

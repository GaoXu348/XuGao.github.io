/* ==========================================================================
   Theme toggle — keyboard operation and an accurate accessible name.

   The colour-scheme behaviour itself lives in main.min.js (a prebuilt
   artifact): it binds a click handler to #theme-toggle and stores the
   chosen theme in localStorage. This file does not replace any of that.

   It only does two things:

     1. Makes the existing control operable from the keyboard. The control
        is an anchor with role="button", which browsers do not activate on
        Enter or Space, so the key presses are translated into a click.
        The click bubbles to #theme-toggle, where main.min.js listens.

     2. Keeps the accessible name in step with the theme, so the label
        states the action the control will perform ("Switch to light
        theme" / "Switch to dark theme") rather than a static phrase.
   ========================================================================== */

(function () {
  "use strict";

  var container = document.getElementById("theme-toggle");
  if (!container) {
    return;
  }

  var control = container.querySelector("[role='button']");
  if (!control) {
    return;
  }

  /* The dark theme is applied as an attribute on <html>; the light theme
     removes it. */
  var currentTheme = function () {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  };

  var syncLabel = function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    var label = "Switch to " + next + " theme";
    control.setAttribute("aria-label", label);
    control.setAttribute("title", label);
  };

  control.addEventListener("keydown", function (event) {
    var key = event.key;
    if (key !== "Enter" && key !== " " && key !== "Spacebar") {
      return;
    }
    /* Stop the page from scrolling on Space and the anchor from doing
       anything else; the click below is the only action. */
    event.preventDefault();
    control.click();
  });

  syncLabel();

  /* The theme can also change without the toggle being used — an operating
     system preference change, for example. Watch the attribute so the label
     stays truthful in those cases too. */
  if (window.MutationObserver) {
    new MutationObserver(syncLabel).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
  }
})();

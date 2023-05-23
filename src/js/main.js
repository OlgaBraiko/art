import modals from "../../typec";
import sliders from "../../slider";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  sliders(".feedback-slider-item", "", ".main-prev-btn,main-next-btn");
});

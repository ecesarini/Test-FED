import * as gentest from "./gentest.js";

const sidebar = ".sidebar",
    sbOpen = document.querySelector(".sidebar-btn-open"),
    sbClose = document.querySelector(".sidebar-btn-close");

gentest.showSidenavbar(sidebar, sbOpen, sbClose);
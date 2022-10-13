import * as global from "/js/global.js";
import * as build from "/js/build.js";
import * as gentest from "./gentest.js";

const sidebar = ".sidebar",
    sbOpen = document.querySelector(".sidebar-btn-open"),
    sbClose = document.querySelector(".sidebar-btn-close");

build.createNav(global.navObj);
gentest.showSidenavbar(sidebar, sbOpen, sbClose);
import * as global from "/js/global.js";
import * as build from "/js/build.js";
import * as clpro from "/js/classproto/clpro.js";

build.createNav(global.navObj);


const myClass = new clpro.MyClass();
const myFunctionObj = new clpro.MyFunctionConstructor();
debugger;
//Object.getPrototypeOf(myClass);
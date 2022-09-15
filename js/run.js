import * as asy from "/js/async.js";

const imgUrl1 = "https://upload.wikimedia.org/wikipedia/commons/d/d2/Saturn_-_High_Resolution%2C_2004.jpg",
    imgUrl2 = "https://upload.wikimedia.org/wikipedia/commons/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg",
    imgUrl3 = "https://upload.wikimedia.org/wikipedia/commons/c/ca/The_Blue_Marble_4463x4163.jpg";

asy.asyncXML(".btn-01", imgUrl1, "blob");
asy.asyncPro(".btn-02", imgUrl2, "blob");
asy.asyncASAW(".btn-03", imgUrl3, "blob");
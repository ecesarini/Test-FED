import * as eventpro from "./eventpro.js";

const btn = document.querySelectorAll('.ep-btn');
//btn.forEach(b=>b.addEventListener('click', eventpro.step1Test));
btn.forEach(b=>b.addEventListener('click', (e) => eventpro.handler(e)));
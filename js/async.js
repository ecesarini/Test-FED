function showImg(type, classTg) {
	const tg = document.querySelector(classTg),
		url = URL.createObjectURL(type),
		image = document.createElement("img"),
		strSp = classTg.split("-"),
		imgClass = strSp[strSp.length - 1];
	
	image.classList.add("my-big-image", `my-big-image-${imgClass}`);
	image.src = url;
	tg.after(image);
}

// CALLBACK way:
export function asyncXML(classTg, link, type) {
	function getRef(link, type, callback) {
		let req = new XMLHttpRequest();
		req.open('GET', link);
		req.responseType = type;

		req.addEventListener('click', () => callback(req.response, classTg));
		req.send();
	}
	const tg = document.querySelector(classTg);
	tg.addEventListener('click', () => getRef(link, type, showImg));
}

/*
// PROMISE way:
export function asyncPro(classTg, link, type) {	
	fetch(link)
	.then(r => r[type]())
	.then(myType => tgClick(classTg, showImg(myType, classTg)));
}

// ASYNC/AWAIT way:
export function asyncASAW(classTg, link, type) {

}
*/
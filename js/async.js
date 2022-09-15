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
function waitClk(req, tg) {
	document.querySelector(tg).addEventListener('click', () => showImg(req, tg));
}

// CALLBACK way:
export function asyncXML(classTg, link, type) {
	function getRef(link, type, callback) {
		let req = new XMLHttpRequest();
		req.open('GET', link);
		req.responseType = type;

		req.addEventListener('load', () => callback(req.response, classTg));
		req.send();
	}

	getRef(link, type, waitClk);
}

// PROMISE way:
export function asyncPro(classTg, link, type) {	
	fetch(link)
	.then(r => r[type]())
	.then(myType => waitClk(myType, classTg)).catch(e => console.log(e.message));
}

// ASYNC/AWAIT way:
export async function asyncASAW(classTg, link, type) {
	let req = await fetch(link);
	req = await req[type]();
	/*const getReq = async (l, t) => {
		let r1 = await fetch(l);
		let r2 = await r1[t]();
		return r2;
	};
	const req = await getReq(link, type);*/
	waitClk(req, classTg);
}

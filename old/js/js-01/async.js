export function asyncXML(classTg, link, type) {
	function getRef(link, type, callback) {
		let req = new XMLHttpRequest();
		req.open('GET', link);
		req.responseType = type;

		req.addEventListener('load', () => callback(req.response));
		req.send();
	}
	const tg = document.querySelector(classTg);
	const showImg = (blob) => {
		const url = URL.createObjectURL(blob),
			image = document.createElement("img");
		
		image.classList.add("my-big-image");
		image.src = url;
		tg.after(image);
	};
	
	tg.addEventListener('click', () => getRef(link, type, showImg));

}
export function asyncXML(link) {
	const btn = document.querySelector('.btn-01');

	const callback = (response) => {
		const image = document.createElement('img');
		
		image.src=response;



	};


	function getRef(link, callback) {
		let req = new XMLHttpRequest();
		req.open('GET', link);
		req.responseType = 'blob';

		req.onload = () => callback(req.response);
		req.send();
	}
	
	btn.addEventListener('click', () => getRef(link, callback));

}
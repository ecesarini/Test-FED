const cb = (err, req) => {
	if(err) {
		alert(err);
	} else {
		heyla();
	}
};

function loadScript(ref, callback) {
	const script = document.createElement('script');
	script.src = ref;

	script.addEventListener('load', () => callback(null, script));
	script.addEventListener('error', () => callback(new Error("Errore di caricamento")));

	document.body.append(script);
}

export const bootstrap = (link, tg) => {
	tg.addEventListener('click', () => loadScript(link, cb));
};

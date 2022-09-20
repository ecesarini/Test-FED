// https://www.youtube.com/watch?v=FydhBS85OFA&list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb&index=20


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

export const bootstrapCb = (link, tg) => {
	tg.addEventListener('click', () => loadScript(link, cb));
};


function promiser(message, duration) {
	return new Promise((result, reject) => {
		if(message === '' || typeof(message) !== 'string') {
			reject('message is not a not-empty string!');
		} else {
			setTimeout(() => {result(message)}, duration);
		}
	})
} 

export const bootstrapPro = (message, duration, tg) => {
	tg.addEventListener('click', () => {
		promiser(message, duration)
		.then(r => alert(r))
		.catch(e => alert("Error: " + e));
	});
};
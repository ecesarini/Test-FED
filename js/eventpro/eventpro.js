export const step1Test = (e) => {
    alert(`Hi, I'm '${e.type}' of '${e.currentTarget.classList}'!`);
}

export function handler(e) {
    step1(e).then(r=>r);
}

function step1(e) {
    const promise1 = new Promise((resolve, reject) => {
        // const nc = document.querySelector('.navbar-container');
        e.currentTarget.style.backgroundColor = 'green';
        resolve();
    });
    return promise1;
}
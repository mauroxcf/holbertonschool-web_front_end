function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
    }

}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement('p');
    let body = document.querySelector('body');
    paragraph.textContent = 'Welcome Holberton!';
    body.appendChild(paragraph);

    let spookyBtn = document.createElement('button');
    let darkModeBtn = document.createElement('button');
    let screamModeBtn = document.createElement('button');

    spookyBtn.onclick = spooky;
    spookyBtn.textContent = 'Spooky';

    darkModeBtn.onclick = darkMode;
    darkModeBtn.textContent = 'Dark mode';

    screamModeBtn.onclick = screamMode;
    screamModeBtn.textContent = 'Scream mode';


    body.appendChild(spookyBtn);
    body.appendChild(darkModeBtn);
    body.appendChild(screamModeBtn);
}

main();

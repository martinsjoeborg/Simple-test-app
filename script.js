import testPage from "./testPage.js";

const content = document.getElementById('content');

let welcomeText = document.createElement('h1');
content.appendChild(welcomeText);
welcomeText.innerHTML = "Click button to start test";

let startButton = document.createElement('button');
content.appendChild(startButton);
startButton.innerHTML = "Start";

startButton.addEventListener('click', testPage);
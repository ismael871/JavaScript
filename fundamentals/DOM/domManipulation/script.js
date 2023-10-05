const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Exercises
const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I\'m red!';
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

const blueH3 = document.createElement('h3');
blueH3.textContent = 'I\'m a blue h3!';
blueH3.style.color = 'blue';
container.appendChild(blueH3);

const pinkDiv = document.createElement('div');
pinkDiv.style.border = 'solid 2px black';
pinkDiv.style.backgroundColor = 'pink';
const normalH1 = document.createElement('h1');
normalH1.textContent = 'I\'m in a div!';
const normalP = document.createElement('p');
normalP.textContent = 'ME TOO!';
pinkDiv.appendChild(normalH1);
pinkDiv.appendChild(normalP);
container.appendChild(pinkDiv);
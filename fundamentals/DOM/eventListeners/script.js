 function alertFunction(string) {
     alert("Hello World");
 }

 const btnTwo = document.querySelector('#btn_two');
 btnTwo.onclick = alertFunction;

 const btnThree = document.querySelector('#btn_three');
 btnThree.addEventListener('click', function(e) {
     console.log(e.target);
     e.target.style.background = 'blue';
 });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });
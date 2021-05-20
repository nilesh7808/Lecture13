// const btn = document.getElementById('btn');

// function shout() {

//     console.log("Shout");

// }

// function scream() {

//     console.log("Scream");

// }
// // Problem with onclick

// // btn.onclick = shout;
// // btn.onclick = scream;

// btn.addEventListener('click', shout);
// btn.addEventListener('click', scream);

// const buttons = document.querySelectorAll('button');

// for (let btn of buttons) {

//     btn.addEventListener('mouseenter', (e) => {

//         // e.target.classList.add('first');
//         // or
//         e.target.classList.toggle('first');



//     })
//     btn.addEventListener('mouseleave', (e) => {
//         // e.target.classList.remove('first');
//         // or
//         e.target.classList.toggle('first');

//     })

// }

// ----------------------------------- FORM EVENTS ---------------------------------------------


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(form.elements[0].value);
    console.log("Form Submitted");
})

// document.addEventListener('copy', (e) => {
//     alert("You cannot copy the text. Otherwise you will be disqualified");
// })

document.addEventListener('keypress', (e) => {
    // alert("Wow! You're learning now")
    if (e.key === 'Enter') {
        alert("You Just Pressed Enter Key")
    }
})
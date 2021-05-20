const btn1 = document.querySelector('#btn1');
// btn1.onclick = function() {

//     alert('This is awesome');

// }

// Single Click -----------

btn1.onclick = function fun(event) {

    alert("YOU JUST CLICKED ME !!!!");

};

// Double Click Event -----------

const btn2 = document.querySelector('#btn2');

btn2.ondblclick = function(event) {

    alert("You just Doble Click This Event");

}
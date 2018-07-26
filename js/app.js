/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */
var btnItalic = document.querySelector('.rte-italics');
var textI = document.querySelector('.textbox');
var counter = 0;

btnItalic.addEventListener('click', function(){
    counter += 1;
    textI.style.fontStyle = 'italic';

    if(counter === 2){
        counter = 0;
        textI.style.fontStyle = 'normal';
    }
})
/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */
var btnBold = document.querySelector('.rte-bold');
var textB = document.querySelector('.textbox');
var counterB = 0;

btnBold.addEventListener('click', function(){
    counterB += 1;
    textB.style.fontWeight = 700;

    if(counterB === 2){
        counterB = 0;
        textB.style.fontWeight = 400;
    }
})

/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */

var buttons = document.querySelectorAll('.rte-box button');
var textS = document.querySelector('.textbox');
buttons.forEach(function(button){

    button.addEventListener('click', function(event){
        var btn = event.target;
        var size = btn.textContent;

        textS.style.fontSize = size;
    })
})
/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

var botones = document.querySelectorAll('.color-palette button');
var textC = document.querySelector('.textbox');

botones.forEach(function(boton){
    boton.addEventListener('click', function(event){
        var botn = event.target;
        var color = botn.dataset.color;
        
        textC.style.color = color;
    })
})
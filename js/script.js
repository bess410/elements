'use strict';

const box = document.getElementById("box");

box.style.backgroundColor = 'red';
box.style.width = '500px';

const width = 500;
box.style.cssText = `background-color: blue; width: ${width}px`

console.log(box);

// const buttons = document.getElementsByTagName("button")[1];
const buttons = document.getElementsByTagName("button");

buttons[1].style.borderRadius = '100%';

console.log(buttons[1]);

const circles = document.getElementsByClassName("circle");

circles[0].style.backgroundColor = 'red';

console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
})

const heart = document.querySelector(".heart");

console.log(heart);

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);

const wrapper = document.querySelector('.wrapper');

hearts[0].replaceWith(circles[0]);


'use strict';

const images = [
    {id:"1", url: "./img/chrono.jpg"},
    {id:"2", url: "./img/inuyasha.jpg"},
    {id:"3", url: "./img/ippo.png"},
    {id:"4", url: "./img/tenchi.jpg"},
    {id:"5", url: "./img/tenjhotenge.jpg"},
    {id:"6", url: "./img/yuyuhakusho.jpg"},
    
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, containerItems) =>{
    images.forEach( imagem => {
        containerItems.innerHTML +=`
            <div class='item'>
                <img src='${imagem.url}'>
            </div>
        `;
        
    });
};


loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};

const next = ()=>{
    let lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem,items[0]);
    items = document.querySelectorAll('.item');
};

document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);
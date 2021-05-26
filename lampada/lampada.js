const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lamp');

function isLampBroken(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
        lampada.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if(!isLampBroken()){

        lampada.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lampada.src = './img/quebrada.jpg'
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);

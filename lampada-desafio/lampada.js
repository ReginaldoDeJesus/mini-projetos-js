const turnOnOff = document.getElementById('turnOnOff');
const lampada = document.getElementById('lamp');


function isTurnOff(){
    return lampada.src.indexOf('desligada') > -1;
}
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

function lampOnOff(){
    if(isTurnOff()){
      lampOn();
      turnOnOff.textContent = "Desligar"

    }else{
        lampOff();
        turnOnOff.textContent = "Ligar"
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);

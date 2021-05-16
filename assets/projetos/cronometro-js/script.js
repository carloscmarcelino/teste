"use scrict"
var h = 0;
var m = 0;
var s = 0;

var tempo = 1000;
var cronometro;

function start(){
    cronometro = setInterval(() => {timer()}, tempo)
}
function pause(){
    clearInterval(cronometro)
}
function stop(){
    clearInterval(cronometro)
    h = 0;
    m = 0;
    s = 0;
    document.querySelector('#cr').innerHTML = '00:00:00'
}
function timer(){
    s++;
    if(s == 60){
        s = 0;
        m++;
        if(m == 60){
            m = 0;
            h++;
        }
    }
    var format = 
    (h < 10 ? '0' + h : h) 
    + ":" + 
    (m < 10 ? '0' + m : m) 
    + ":" + 
    (s < 10 ? '0' + s : s)
    document.querySelector('#cr').innerHTML = format
}
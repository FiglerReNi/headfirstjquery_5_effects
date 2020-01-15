$(document).ready(function () {

    lightningOn();
    window.onblur = lightningStop;
    window.onfocus = lightningOn;

    var clixArray = [0,0,0,0];
    var one;
    var two;
    var three;

    $('#head').click(function () {
        clixArray[0] = clickImg(clixArray[0], this);
    });
    $('#eyes').click(function () {
        clixArray[1] = clickImg(clixArray[1], this);
    });
    $('#nose').click(function () {
        clixArray[2] = clickImg(clixArray[2], this);
    });
    $('#mouth').click(function () {
        clixArray[3] = clickImg(clixArray[3], this);
    });
});

//A verzió
// function lightning_one(t){
//     $("#lightning1").fadeIn(250).fadeOut(250);
//     setTimeout("lightning_one()",t);
// };

//B verzió
function lightning_one(){
    $('#lightning1').fadeIn(250).fadeOut(250);
}
function lightning_two(){
    $('#lightning2').fadeIn(250).fadeOut(250);
}
function lightning_three(){
    $('#lightning3').fadeIn(250).fadeOut(250);
}

function lightningStop(){
    clearInterval(one);
    clearInterval(two);
    clearInterval(three);
}

function lightningOn(){
     one = setInterval(lightning_one, 4000);
     two = setInterval(lightning_two, 5000);
     three = setInterval(lightning_three, 7000);
}

function animation(item, a){
    $(item).animate({left:a}, 500);
}

function clickImg(clix, item) {
    if (clix < 9) {
        //relative position
        animation(item, "-=367px");
        clix++;
        return clix;
    } else {
        //absolute position
        animation(item, "0px");
        clix = 0;
        return clix;
    }
}
//effects
//CSS opacity property
//fadeIn - slow, normal, fast, miliseconds
//fadeTo
//fadeOut
//CSS display property
//show
//hide
//toogle
//slideUp
//slideDown
//slideToggle

//animation stop
//$.fx.off = true;
//stop

//window property
/*
window.name
window.history
window.document
 */
//window event handler
/*
window.onfocus - ha az ablak aktív
window.onblur - ha elnavigálnak az ablakból
 */
//window.method
/*
window.setTimeout()
window.setInterval()
window.clearTimeout()
window.clearInterval()
 */
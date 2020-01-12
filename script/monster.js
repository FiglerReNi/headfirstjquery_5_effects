$(document).ready(function () {
    setInterval(lightning_one, 4000);
    setInterval(lightning_two, 5000);
    setInterval(lightning_three, 7000);

    var headclix = 0;
    var eyesclix = 0;
    var noseclix = 0;
    var mouthclix = 0;

    $('#head').click(function () {
        if (headclix < 9) {
            //relative position
            animation('#head', "-=367px");
            headclix++;
        } else {
            //absolute position
            animation('#head', "0px");
            headclix = 0;
        }
    });
    $('#eyes').click(function () {
        if (eyesclix < 9) {
            animation('#eyes', "-=367px");
            eyesclix++;
        } else {
            animation('#eyes', "0px");
            eyesclix = 0;
        }
    });
    $('#nose').click(function () {
        if (noseclix < 9) {
            animation('#nose', "-=367px");
            noseclix++;
        } else {
            animation('#nose', "0px");
            noseclix = 0;
        }
    });
    $('#mouth').click(function () {
        if (mouthclix < 9) {
            animation('#mouth', "-=367px");
            mouthclix++;
        } else {
            animation('#mouth',"0px");
            mouthclix = 0;
        }
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
    $('#lightning2').fadeIn('fast').fadeOut('fast');
}
function lightning_three(){
    $('#lightning3').fadeIn('fast').fadeOut('fast');
}

function animation(item, a){
    $(item).animate({left:a}, 500);
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
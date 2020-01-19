$(document).ready(function () {

    lightningOn();
    window.onblur = lightningStop;
    window.onfocus = lightningOn;

    var clixArray = [0, 0, 0, 0];
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

    $('#btnRandom').click(randomize);
    $('#btnReset').click(reset);


//A verzió
// function lightning_one(t){
//     $("#lightning1").fadeIn(250).fadeOut(250);
//     setTimeout("lightning_one()",t);
// };

//B verzió
    function lightning_one() {
        $('#lightning1').fadeIn(250).fadeOut(250);
    }

    function lightning_two() {
        $('#lightning2').fadeIn(250).fadeOut(250);
    }

    function lightning_three() {
        $('#lightning3').fadeIn(250).fadeOut(250);
    }

    function lightningStop() {
        clearInterval(one);
        clearInterval(two);
        clearInterval(three);
    }

    function lightningOn() {
        one = setInterval(lightning_one, 4000);
        two = setInterval(lightning_two, 5000);
        three = setInterval(lightning_three, 7000);
    }

    function animation(item, a) {
        $(item).animate({left: a}, 500);
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

    function getRandom() {
        var number = Math.floor(Math.random() * 10);
        return number;
    }

    function randomize() {
        debugger;
        $('.face').each(function(index) {
            var currentPoz = clixArray[index];
            var targetPoz = getRandom();
            clixArray[index] = targetPoz;
            if(currentPoz < targetPoz){
                let num = (targetPoz - currentPoz)*367;
                animation(this, "-="+num);
            }
            else if(currentPoz > targetPoz){
                let num = (currentPoz - targetPoz)*367;
                animation(this, "+="+num);
            }
        });
    }

    function reset(){
        $('.face').each(function(index) {
            animation(this, '0px');
            clixArray[index] = 0;
        });
    }
});
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
//window.top.close() - a main/szülő ablakot zárja be (ha időözben elnavigálunk egy másik oldalra )
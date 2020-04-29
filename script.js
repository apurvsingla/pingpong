let upper = $('#upper');
let lower = $('#bottom');
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

let rodRect = $('#upper')[0].getBoundingClientRect();

$(document).keydown(function(e) {

    if (e.which == '39') { //up arrow key 
        upper.finish().animate({
            left: "+=50"
        });
        lower.finish().animate({
            left: "+=50"
        });

    }
    if (e.which == '37') {
        upper.finish().animate({
            left: "-=50"
        });
        lower.finish().animate({
            left: "-=50"
        });
    }
});


$(document).ready(() => {
    function loop() {

        $('#b').animate({
            top: '93.5%'
        }, 1000)

        $('#b').animate({
            top: '2.7%',
            left: Math.floor(Math.random() * 80) + '%'
        }, 1000)
        loop();
    }
    loop();
})
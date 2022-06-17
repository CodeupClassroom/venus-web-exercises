(function() {

    let rotationAmt = 0;
    let rotateEvent;

    $("#rotate-btn").click(function(event) {
        if($(this).html() === "Stop") {
            $(this).html("Start");
            clearInterval(rotateEvent);
        } else {
            $(this).html("Stop");
            rotateEvent = setInterval(function () {
                rotationAmt += .02;
                $("#logo-cthulhu").css("transform", `rotate(${rotationAmt}rad)`);
            }, 2)
        }

    });
})()
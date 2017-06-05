var clickCount = 0;
var lastBox = 0;
function illegal() {
    window.alert("Illegal Move!");
}

function checkPawn(id) {
    if($(id).find('> img').length==0) {
        return 0;
    }
    else {
        return 1;
    }
}

function movement(element) {

    var id = "#" + element;
    if (clickCount == 0)
    {

        if(checkPawn(id)) {
            lastBox = element;
            clickCount += 1;
        }
        else {
            illegal();
        }
    }
    else {
        lastBox_id = "#" + lastBox;
        if($(lastBox_id).find("img").attr('src')=="inc/bluepawn.png") {
            var isBlue = true;
        }
        if(checkPawn(id)==0) {
            if (element == (parseInt(lastBox) + 10) && !isBlue) {
                whitePawn(element);
                $(lastBox_id).find("img").remove();
            }
            else if (element == (parseInt(lastBox) - 10) && isBlue) {
                bluePawn(element);
                $(lastBox_id).find("img").remove();
            }
            else {
                illegal();
            }
            clickCount -= 1;
        }
        else {
            if($(id).find("img").attr('src')=="inc/bluepawn.png") {
                var isBlue_2 = true;
            }
            if (element == (parseInt(lastBox) + 9) || (element == parseInt(lastBox) + 11) && !isBlue  && isBlue_2) {
                $(id).find("img").remove();
                whitePawn(element);
                $(lastBox_id).find("img").remove();
            }
            else if (element == (parseInt(lastBox) - 9) || (element == parseInt(lastBox) - 11) && isBlue  && !isBlue_2) {
                $(id).find("img").remove();
                bluePawn(element);
                $(lastBox_id).find("img").remove();
            }
            else {

                illegal();
            }
            clickCount -= 1;
        }
    }
}

// Counts whether the click is first or second
var click_count = 0;

// Stores the id of the last block clicked
var last_block = 0;


function illegal() {
    // Raises alert for an incorrect move
    window.alert("Illegal Move!");
}


function checkPawn(id) {
    // Returns 1 if the block whose ID is supplied has a pawn
    if($(id).find('> img').length==0) {
        return 0;
    }
    else {
        return 1;
    }
}


function movement(element) {
    // Called everytime a click is made

    var id = "#" + element;             // ID of clicked block

    if (click_count == 0)                // Checks if the click is the first one
    {

        if(checkPawn(id)) {             // Checks if the clicked block has a pawn
            last_block = element;
            click_count += 1;
        }
        else {
            illegal();
        }
    }

    else {
        last_block_id = "#" + last_block;                   // Stores the ID of the lastblock clicked

        if($(last_block_id).find("img").attr('src')=="inc/bluepawn.png") {
            // Checks if the first block had blue pawn
            var is_blue = true;
        }
        else {
            is_blue = false;
        }
        if(checkPawn(id)==0) {
            // If the second block is empty
            if (element == (parseInt(last_block) + 10) && !is_blue) {
                // Usual Movement of White
                whitePawn(element);
                $(last_block_id).find("img").remove();
            }

            else if (element == (parseInt(last_block) - 10) && is_blue) {
                // Usual Movement of Blue
                bluePawn(element);
                $(last_block_id).find("img").remove();
            }

            else if (element == (parseInt(last_block) + 20) && !is_blue && last_block <= 17) {
                // Special movement from initial position of White
                whitePawn(element);
                $(last_block_id).find("img").remove();
            }

            else if (element == (parseInt(last_block) - 20) && is_blue && last_block >= 60) {
                // Special movement from initial position of Blue
                bluePawn(element);
                $(last_block_id).find("img").remove();
            }

            else {
                illegal();
            }
        }
        else {

            if($(id).find("img").attr('src')=="inc/whitepawn.png") {
                // Checks if second block has white pawn
                var is_white = true;
            }
            else {
                is_white = false;
            }

            if (element == (parseInt(last_block) + 9) || (element == parseInt(last_block) + 11) && is_blue  && is_white) {
                // White Captures Blue
                $(id).find("img").remove();
                whitePawn(element);
                $(last_block_id).find("img").remove();
            }

            else if (element == (parseInt(last_block) - 9) || (element == parseInt(last_block) - 11) && is_blue  && is_white) {
                // Blue Captures White
                $(id).find("img").remove();
                bluePawn(element);
                $(last_block_id).find("img").remove();
            }

            else {
                illegal();
            }
        }
        click_count -= 1;
    }
}

var id = "";            // Stores the ID of each block during loops

function whitePawn(thisId) {
    // Creates a white pawn
    var img = document.createElement("IMG");
    img.src = "inc/whitepawn.png";
    document.getElementById(thisId).appendChild(img);
}

function bluePawn(thisId) {
    // Creates a blue pawn
    var img = document.createElement("IMG");
    img.src = "inc/bluepawn.png";
    document.getElementById(thisId).appendChild(img);
}

for (i = 0; i < 8; i++) {
    // Initialises the white and blue pawns
    if (i==1) {
        for (j = 0; j < 8; j++) {
            id = i.toString() + j.toString();
            whitePawn(id);
        }
    }
    if (i==6) {
        for (j = 0; j < 8; j++) {
            id = i.toString() + j.toString();
            bluePawn(id);
        }
    }
}

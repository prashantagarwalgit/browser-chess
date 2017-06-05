var id ="x";
var occupied = [];

function whitePawn(thisId) {
    var img = document.createElement("IMG");
    img.src = "inc/whitepawn.png";
    document.getElementById(thisId).appendChild(img);
}

function bluePawn(thisId) {
    var img = document.createElement("IMG");
    img.src = "inc/bluepawn.png";
    document.getElementById(thisId).appendChild(img);
}

for (i = 0; i < 8; i++) {
    if (i==1) {
        for (j = 0; j < 8; j++) {
            id = i.toString() + j.toString();
            whitePawn(id);
            occupied.push(id);
        }
    }
    if (i==6) {
        for (j = 0; j < 8; j++) {
            id = i.toString() + j.toString();
            bluePawn(id);
            occupied.push(id);
        }
    }
}
console.log(occupied);

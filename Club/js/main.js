function Player(name, lastname, number, img) {
    this.name = name;
    this.lastname = lastname;
    this.number = number;
    this.img = img;
}

var cGordon = new Player("Craig", "Gordon", 1, "pictures/img1.jpg")
var sBain = new Player("Scott", "Bain", 29, "pictures/img2.jpg")
var cJullien = new Player("Cristopher", "Jullien", 2, "pictures/img3.jpg")
var gTaylor = new Player("Greg", "Taylor", 3, "pictures/img4.jpg")
var jSimunovic = new Player("Jozo", "Simunovic", 5, "pictures/img5.jpg")
var mBauer = new Player("Moritz", "Bauer", 13, "pictures/img6.jpg")
var kAjer = new Player("Kristofer", "Ajer", 35, "pictures/img7.jpg")
var nBitton = new Player("Nir", "Bitton", 6, "pictures/img8.jpg")
var sBrown = new Player("Scott", "Brown", 8, "pictures/img9.jpg")
var iSoro = new Player("Ismael", "Soro", 12, "pictures/img10.jpg")
var jHayes = new Player("Jonny", "Hayes", 15, "pictures/img11.jpg")
var tRogic = new Player("Tom", "Rogic", 18, "pictures/img12.jpg")
var mShved = new Player("Marian", "Shved", 20, "pictures/img13.jpg")
var pKlimala = new Player("Patryk", "Klimala", 14, "pictures/img14.jpg")
var vBayo = new Player("Vakoun", "Bayo", 10, "pictures/img15.jpg")

var players = [];
players.push(cGordon, sBain, cJullien, gTaylor, jSimunovic, mBauer, kAjer, nBitton, sBrown, iSoro, jHayes, tRogic, mShved, pKlimala, vBayo);

var randomNumber = function (limit) {
    return Math.round((Math.random() * (limit - 1)));
}

function getPlayer() {
    while (players.length) {
        var ranNum = randomNumber(players.length);
        createPlayer(players[ranNum]);
        players.splice(ranNum, 1)
    }
}

function createPlayer(player) {
    var body = document.querySelector("body");
    var fsquad = document.querySelector(".firstsquad");
    var pic = document.createElement("img");
    pic.setAttribute("src", player.img);
    fsquad.appendChild(pic);
}
getPlayer();

function getInformation(){
    var body = document.querySelector('body');
    var 
}





var ball;
var database;
var position;
var canvas;
var backgroundImage, gameState = 0, playerCount;
var form,player,game;
var allPlayers;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}
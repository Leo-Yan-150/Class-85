var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;
var rover_image = "rover.png";
var marsImages = ["mars_img_1.jpg","mars_img_2.jpg","mars_img_3.jpg","mars_img_4.jpg","mars_img_5.jpg"];
var n = Math.floor(Math.random()*5);
var background_image = marsImages[n];

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
console.log("selected image number: "+n);

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38'){
up();
console.log("up");
}

if(keyPressed == '40'){
down();
console.log("down");
}

if(keyPressed == '37'){
left();
console.log("left");
}

if(keyPressed == '39'){
right();
console.log("right");
}
}
function up(){
if(rover_y >= 0){
rover_y -= 10;
console.log("Up arrow is pressed = "+ rover_x + "-" + rover_y);
uploadBackground();
uploadrover();
}
}
function down(){
if(rover_y <= 700){
rover_y += 10;
console.log("Down arrow is pressed = "+ rover_x + "-" + rover_y);
uploadBackground();
uploadrover();
}
}
function left(){
if(rover_x >= 0){
rover_x -= 10;
console.log("Left arrow is pressed = "+ rover_x + "-" + rover_y);
uploadBackground();
uploadrover();
}
}
function right(){
if(rover_x <= 900){
rover_x += 10;
console.log("Right arrow is pressed = "+ rover_x + "-" + rover_y);
uploadBackground();
uploadrover();
}
}
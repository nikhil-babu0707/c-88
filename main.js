var canvas = new fabric.Canvas('my_canvas');
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
player_object = "";
block_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == '80') {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }
    if (e.shiftKey == true && keyPress == '77') {
        console.log("m and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        
    }
    if (keyPress == '38') {
        up();
        console.log("up");
    }
    if (keyPress == '40') {
        down();
        console.log("down");
    }
    if (keyPress == '37') {
        left();
        console.log("left");
    }
    if (keyPress == '39') {
        right();
        console.log("right");
    }
    if (keyPress == '87') {
        new_image('wall.jpg');
        console.log('w');
    }
    if (keyPress == '71') {
        new_image('ground.png');
        console.log('g');
    }
    if (keyPress == '76') {
        new_image('light_green.png');
        console.log('l');
    }
    if (keyPress == '84') {
        new_image('trunk.jpg');
        console.log('t');
    }
    if (keyPress == '82') {
        new_image('roof.jpg');
        console.log('r');
    }
    if (keyPress == '89') {
        new_image('yellow_wall.png');
        console.log('y');
    }
    if (keyPress == '68') {
        new_image('dark_green.png');
        console.log('d');
    }
    if (keyPress == '85') {
        new_image('unique.png');
        console.log('u');
    }
    if (keyPress == '67') {
        new_image('cloud.jpg');
        console.log('c');
    }
}
function up() {
    if (player_y>=0) {
        player_y = player_y - block_height;
        console.log("block image height= " + block_height);
        console.log("when up arrow is pressed x= " + player_x + ",y= " + player_y);
        canvas.remove(player_object);
        player_update();

    }
}
function down() {
    if (player_y<=500) {
        player_y = player_y + block_height;
        console.log("block image height= " + block_height);
        console.log("when down arrow is pressed x= " + player_x + ",y= " + player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
function left() {
    if (player_x>=0) {
        player_x = player_x - block_width;
        console.log("block image width= " + block_width);
        console.log("when left arrow is pressed x= " + player_x + ",y= " + player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
function right() {
    if (player_x<=850) {
        player_x = player_x + block_width;
        console.log("block image widht= " + block_width);
        console.log("when right arrow is pressed x= " + player_x + ",y= " + player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
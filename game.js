// Creating variables
var myX = 0, myY = 0;
var selectedFig = null;
var selectedTile = null;
var selectedIndex = null;

var pieces = [];

//white
pieces.push(new Knight(1,7));
pieces.push(new Knight(1,0, "black"));

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			
			if(x%2 == y%2){
				context.fillStyle = "#d6e62c";
			}else{
				context.fillStyle = "#8ee4f5";
			}
			
			context.fillRect(x*SIZE, y*SIZE, SIZE, SIZE);
		}
	}
	if(selectedTile != null){
		//context.strokeStyle = "#f00";
		//context.strokeRect(selectedTile.x*SIZE, selectedTile.y*SIZE, SIZE, SIZE);
	}
	for(var i = 0; i < pieces.length; i++){
		pieces[i].draw();
		if(pieces[i].isSelected){
			for(var t = 0; t < pieces[i].generateAllMoves().length; t++){
				var tile = pieces[i].generateAllMoves()[t];
				if(tile.x >= 0 && tile.x < 8 && tile.y >= 0 && tile.y < 8){
					context.beginPath();
					context.fillStyle = "#ff0008";
					context.arc((tile.x*SIZE)+SIZE/2, (tile.y*SIZE)+SIZE/2, SIZE/4, 0, Math.PI*2);
					context.fill();
					context.closePath();
				}
			}
		}
	}
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX/50, mouseY/50);
	for(var y = 0; y < 8; y++){
		for(var x = 0; x < 8; x++){
			//mouseX >= x*SIZE && mouseX <= x*SIZE+SIZE && mouseY >= y*SIZE && mouseY <= y*SIZE+SIZE/
			if(Math.floor(mouseX/SIZE) == x && Math.floor(mouseY/SIZE) == y){
				selectedTile = {x: x, y: y};
				for(var i = 0; i < pieces.length; i++){
					if(pieces[i].x == selectedTile.x && pieces[i].y == selectedTile.y){
						if(pieces[i].isSelected){
							pieces[i].isSelected = false;
							selectedFig = null;
							//selectedIndex = null;
						}else{
							pieces[i].isSelected = true;
							selectedFig = pieces[i];
							selectedIndex = i;
						}
						mouseX = 10000;
						mouseY = 10000;
						break;
					}
				}
			}
		}
	}
				if(pieces[selectedIndex] != null && pieces[selectedIndex] != undefined){
				for(var t = 0; t < pieces[selectedIndex].generateAllMoves().length; t++){
					var tile = pieces[selectedIndex].generateAllMoves()[t];
					if(tile.x >= 0 && tile.x < 8 && tile.y >= 0 && tile.y < 8){
						if(tile.x == selectedTile.x && tile.y == selectedTile.y){
							console.log(pieces[selectedIndex])
				console.log(pieces[selectedIndex].generateAllMoves())
							pieces[selectedIndex].x = Math.floor(mouseX/SIZE);
							pieces[selectedIndex].y = Math.floor(mouseY/SIZE);
							pieces[selectedIndex].isSelected = false;
							pieces[selectedIndex].isSelected = false;
							selectedFig = null;
							//selectedIndex = null;
						}
					}
				}
			}
};

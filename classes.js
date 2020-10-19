const SIZE = 50;

class Piece{
	constructor(x=0, y=0, points = 3, color = "white", imgIndex=3){
		this.x = x;
		this.y = y;
		this.c = color;
		this.points = points;
		this.imgIndex = imgIndex;
		this.isSelected = false;
	}
	
	draw(){
		
		var img = new Image();
		img.src = "pieces.png";
		if(this.c == "white"){
			
			context.drawImage(img, 200*this.imgIndex, 0, 200, 200, SIZE*this.x, SIZE*this.y, SIZE, SIZE);
		}else{
			
			context.drawImage(img, 200*this.imgIndex, 200, 200, 200, SIZE*this.x, SIZE*this.y, SIZE, SIZE);
			
		}
		if(this.isSelected){
			context.strokeStyle = "#0044ff";
			context.strokeRect(this.x*SIZE, this.y*SIZE, SIZE, SIZE);
			context.strokeRect(this.x*SIZE-1, this.y*SIZE-1, SIZE+1, SIZE+1);
		context.strokeRect(this.x*SIZE-1, this.y*SIZE-1, SIZE+2, SIZE+2);
			context.strokeRect(this.x*SIZE-1.5, this.y*SIZE-1.5, SIZE+3, SIZE+3);
		}
	}
}
class Knight extends Piece{
	constructor(x=0, y=0, color = "white"){
		super(x, y, 3, color);
	}
	
	generateAllMoves(){
		var moves = [];
		
		moves.push({
			x: this.x+2,
			y: this.y+1
		});
		moves.push({
			x: this.x+2,
			y: this.y-1
		});
		moves.push({
			x: this.x-2,
			y: this.y+1
		});
		moves.push({
			x: this.x-2,
			y: this.y-1
		});
		moves.push({
			x: this.x+1,
			y: this.y+2
		});
		moves.push({
			x: this.x-1,
			y: this.y+2
		});
		moves.push({
			x: this.x+1,
			y: this.y-2
		});
		moves.push({
			x: this.x-1,
			y: this.y-2
		});
		
		return moves;
	}
}
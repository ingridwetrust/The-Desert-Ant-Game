
function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 2;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
		{
			this.inc = - 2;
		}
        else if(this.currentX < this.x)
		{
			this.inc = 2;
		}
    }
    
    this.draw = function()
    {
        this.update();
        
        if(this.inc >= 0)
            {
            // Legs
            strokeWeight(0.5)
            fill(140);
            triangle(this.currentX + 27, this.y - 5,
                     this.currentX + 27, floorPos_y,
                     this.currentX + 37, floorPos_y); // Front leg
            triangle(this.currentX - 35, this.y - 5,
                     this.currentX - 35, floorPos_y,
                     this.currentX - 25, floorPos_y); // Back leg
            line(this.currentX + 27, floorPos_y,this.currentX + 27, this.y - 30)
            line(this.currentX - 35, floorPos_y,this.currentX - 35, this.y - 30)

            // Tail
            fill(150);
            strokeWeight(0.3)
            beginShape();
            ellipse(this.currentX - 44,this.y - 10,12);
            ellipse(this.currentX - 47,this.y - 7, 10);
            ellipse(this.currentX - 51,this.y - 5, 9);
            ellipse(this.currentX - 55,this.y - 4, 8);
            ellipse(this.currentX - 58,this.y - 3, 7);
            ellipse(this.currentX - 61,this.y - 2.5, 6);
            ellipse(this.currentX - 64,this.y - 2, 5);
            ellipse(this.currentX - 67,this.y - 1.5, 4);
            ellipse(this.currentX - 70,this.y - 1, 3.5);
            ellipse(this.currentX - 72.5,this.y - 0.8, 3);
            ellipse(this.currentX - 75,this.y - 0.5, 2.5);
            ellipse(this.currentX - 77,this.y - 0.3, 2);
            endShape();

            // Body
            strokeWeight(0.5)
            fill(99, 87, 75);
            arc(this.currentX, this.y - 10, 100, 80, PI, TWO_PI, CHORD);

            // Head
            fill(150);
            beginShape();
            vertex(this.currentX + 50, this.y - 10)
            vertex(this.currentX + 75, this.y);
            vertex(this.currentX + 75, this.y);
            vertex(this.currentX + 60, this.y - 28);
            vertex(this.currentX + 60, this.y - 28);
            vertex(this.currentX + 50, this.y - 26);
            endShape();
            bezier(this.currentX + 58,this.y - 25,
                   this.currentX + 62,this.y - 29,
                   this.currentX + 62,this.y - 29,
                   this.currentX + 50,this.y - 45)
            bezier(this.currentX + 50 , this.y - 15,
                   this.currentX + 40 , this.y - 20,
                   this.currentX + 40 , this.y - 21,
                   this.currentX + 50 , this.y - 45)
            noStroke()
            triangle(this.currentX + 60,this.y - 27 ,
                     this.currentX + 50,this.y - 45 , 
                     this.currentX + 50,this.y - 25 )
            fill(0)
            ellipse(this.currentX + 60, this.y - 18,5)
            fill(199, 201, 62)
            ellipse(this.currentX + 61, this.y - 19,2)

            // Vertical Armor Bands
            strokeWeight(0.1)
            noFill()
            stroke(0);
            beginShape()
            vertex(this.currentX, this.y - 10)
            vertex(this.currentX, this.y - 50)
            vertex(this.currentX, this.y - 10)
            vertex(this.currentX - 10, this.y -49)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 10,this.y -49)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 20,this.y -46)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 20,this.y -46)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 25,this.y -44)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 25,this.y -44)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 30,this.y -42)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 30,this.y -42)
            vertex(this.currentX,this.y - 10)
            endShape() 
            }
        if(this.inc < 0)
        {
            // Legs
            strokeWeight(0.5)
            fill(140);
            triangle(this.currentX - 27, this.y - 5,
                     this.currentX - 27, floorPos_y,
                     this.currentX - 37, floorPos_y); // Front leg
            triangle(this.currentX + 35, this.y - 5,
                     this.currentX + 35, floorPos_y,
                     this.currentX + 25, floorPos_y); // Back leg
            line(this.currentX - 27, floorPos_y,this.currentX - 27, this.y - 30)
            line(this.currentX + 35, floorPos_y,this.currentX + 35, this.y - 30)

            // Tail
            fill(150);
            strokeWeight(0.3)
            beginShape();
            ellipse(this.currentX + 44,this.y - 10,12);
            ellipse(this.currentX + 47,this.y - 7, 10);
            ellipse(this.currentX + 51,this.y - 5, 9);
            ellipse(this.currentX + 55,this.y - 4, 8);
            ellipse(this.currentX + 58,this.y - 3, 7);
            ellipse(this.currentX + 61,this.y - 2.5, 6);
            ellipse(this.currentX + 64,this.y - 2, 5);
            ellipse(this.currentX + 67,this.y - 1.5, 4);
            ellipse(this.currentX + 70,this.y - 1, 3.5);
            ellipse(this.currentX + 72.5,this.y - 0.8, 3);
            ellipse(this.currentX + 75,this.y - 0.5, 2.5);
            ellipse(this.currentX + 77,this.y - 0.3, 2);
            endShape();

            // Body
            strokeWeight(0.5)
            fill(99, 87, 75);
            arc(this.currentX, this.y - 10, 100, 80, PI, TWO_PI, CHORD);

            // Head
            fill(150);
            beginShape();
            vertex(this.currentX - 50, this.y - 10)
            vertex(this.currentX - 75, this.y);
            vertex(this.currentX - 75, this.y);
            vertex(this.currentX - 60, this.y - 28);
            vertex(this.currentX - 60, this.y - 28);
            vertex(this.currentX - 50, this.y - 26);
            endShape();
            bezier(this.currentX - 58,this.y - 25,
                   this.currentX - 62,this.y - 29,
                   this.currentX - 62,this.y - 29,
                   this.currentX - 50,this.y - 45)
            bezier(this.currentX - 50 , this.y - 15,
                   this.currentX - 40 , this.y - 20,
                   this.currentX - 40 , this.y - 21,
                   this.currentX - 50 , this.y - 45)
            noStroke()
            triangle(this.currentX - 60,this.y - 27 ,
                     this.currentX - 50,this.y - 45 , 
                     this.currentX - 50,this.y - 25 )
            fill(0)
            ellipse(this.currentX - 60, this.y - 18,5)
            fill(199, 201, 62)
            ellipse(this.currentX - 61, this.y - 19,2)

            // Vertical Armor Bands
            strokeWeight(0.1)
            noFill()
            stroke(0);
            beginShape()
            vertex(this.currentX, this.y - 10)
            vertex(this.currentX, this.y - 50)
            vertex(this.currentX, this.y - 10)
            vertex(this.currentX - 10, this.y -49)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 10,this.y -49)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 20,this.y -46)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 20,this.y -46)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 25,this.y -44)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 25,this.y -44)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX + 30,this.y -42)
            vertex(this.currentX,this.y - 10)
            vertex(this.currentX - 30,this.y -42)
            vertex(this.currentX,this.y - 10)
            endShape()    
        }
    }
    
    this.checkContact = function()
    {
        var d = dist(gameChar_x, gameChar_y, this.currentX, this.y)  
        
        if(d < 60)
		{
			return true;
		}
        return false;   
    }
}

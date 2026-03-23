
function drawCharacter()
{
    // Jumping-left code
	if(isLeft && isFalling)
	{  //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);
        
        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 10, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 15, gameChar_y - 50);
        
        //Gecco eyes
        fill(0);
        ellipse(gameChar_x - 8, gameChar_y - 57,11,11)
        fill(255)
        ellipse(gameChar_x - 6, gameChar_y - 60,4,4)
        
        //Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x - 14, gameChar_y -50, gameChar_x -6 , gameChar_y - 50) 

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        noFill()
        beginShape()
        vertex(gameChar_x, gameChar_y - 20)
        vertex(gameChar_x - 15, gameChar_y - 30)
        vertex(gameChar_x - 17, gameChar_y - 15)
        vertex(gameChar_x - 20, gameChar_y - 17) 
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x + 3, gameChar_y - 11)
        vertex(gameChar_x + 8, gameChar_y - 1)
        vertex(gameChar_x + 19, gameChar_y - 10)
        vertex(gameChar_x + 20, gameChar_y - 6)
        endShape()

        //Gecco arms

        //left arm
        beginShape()
        vertex(gameChar_x - 4, gameChar_y - 40)
        vertex(gameChar_x - 5, gameChar_y - 40)
        vertex(gameChar_x - 15, gameChar_y - 37)
        vertex(gameChar_x - 20, gameChar_y - 45)
        endShape()
        
        //left fingers
        fill(194, 126, 87)
        triangle(gameChar_x - 22, gameChar_y - 40,gameChar_x - 18, gameChar_y - 40,gameChar_x - 20, gameChar_y - 45)
	}
    
    // Jumping-right code
	else if(isRight && isFalling)
	{  
        //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 15, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 10, gameChar_y - 50);

        //Gecco eyes
        fill(0);
        ellipse(gameChar_x + 8, gameChar_y - 57,11,11)
        fill(255)
        ellipse(gameChar_x + 10, gameChar_y - 60,4,4)

        // Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x + 14, gameChar_y -50, gameChar_x +6 , gameChar_y - 50)

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

         //left leg
        beginShape()
        vertex(gameChar_x - 3, gameChar_y - 11)
        vertex(gameChar_x - 8, gameChar_y - 1)
        vertex(gameChar_x - 19, gameChar_y - 10)
        vertex(gameChar_x - 20, gameChar_y - 6)
        endShape()

        //right leg
        noFill()
        beginShape()
        vertex(gameChar_x, gameChar_y - 20)
        vertex(gameChar_x + 15, gameChar_y - 30)
        vertex(gameChar_x + 17, gameChar_y - 15)
        vertex(gameChar_x + 20, gameChar_y - 17) 
        endShape()

        //Gecco arms
        //right arm
        noFill()
        beginShape()
        vertex(gameChar_x + 4, gameChar_y - 40)
        vertex(gameChar_x + 5, gameChar_y - 40)
        vertex(gameChar_x + 15, gameChar_y - 37)
        vertex(gameChar_x + 20, gameChar_y - 45)
        endShape()
        //right fingers
        fill(194, 126, 87)
        triangle(gameChar_x + 22, gameChar_y - 40,gameChar_x + 18, gameChar_y - 40,gameChar_x + 20, gameChar_y - 45)
    }
    
    // Walking left code
	else if(isLeft)
	{   //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 10, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 15, gameChar_y - 50);

        //Gecco eyes
        fill(0);
        ellipse(gameChar_x - 8, gameChar_y - 57,11,11)
        fill(255)
        ellipse(gameChar_x - 6, gameChar_y - 60,4,4)

        //Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x - 14, gameChar_y -50, gameChar_x -6 , gameChar_y - 50)

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        beginShape()
        vertex(gameChar_x, gameChar_y - 15)
        vertex(gameChar_x - 8, gameChar_y)
        vertex(gameChar_x - 10, gameChar_y - 2)
        vertex(gameChar_x - 6, gameChar_y)
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x + 3, gameChar_y - 11)
        vertex(gameChar_x + 8, gameChar_y)
        vertex(gameChar_x + 10, gameChar_y - 2)
        vertex(gameChar_x + 6, gameChar_y) 
        endShape()

        //Gecco arms
        //left arm
        beginShape()
        vertex(gameChar_x - 4, gameChar_y - 40)
        vertex(gameChar_x - 5, gameChar_y - 40)
        vertex(gameChar_x - 8, gameChar_y - 30)
        vertex(gameChar_x - 15, gameChar_y - 30)
        endShape()

        //left fingers
        fill(194, 126, 87)
        triangle(gameChar_x - 17, gameChar_y - 25,gameChar_x - 13, gameChar_y - 25,gameChar_x - 15, gameChar_y - 30)
	}
    
    // Walking right code
	else if(isRight)
	{
        //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 15, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 10, gameChar_y - 50);

        //Gecco eyes
        fill(0);
        ellipse(gameChar_x + 8, gameChar_y - 57,11,11)
        fill(255)
        ellipse(gameChar_x + 10, gameChar_y - 60,4,4)

        // Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x + 14, gameChar_y -50, gameChar_x +6 , gameChar_y - 50)

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        beginShape()
        vertex(gameChar_x - 3, gameChar_y - 11)
        vertex(gameChar_x - 8, gameChar_y)
        vertex(gameChar_x - 10, gameChar_y - 2)
        vertex(gameChar_x - 6, gameChar_y)
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x, gameChar_y - 15)
        vertex(gameChar_x + 8, gameChar_y)
        vertex(gameChar_x + 10, gameChar_y - 2)
        vertex(gameChar_x + 6, gameChar_y) 
        endShape()

        //right arm
        noFill()
        beginShape()
        vertex(gameChar_x + 4, gameChar_y - 40)
        vertex(gameChar_x + 5, gameChar_y - 40)
        vertex(gameChar_x + 8, gameChar_y - 30)
        vertex(gameChar_x + 15, gameChar_y - 30)
        endShape()

        //right fingers
        fill(194, 126, 87)
        triangle(gameChar_x + 17, gameChar_y - 25,gameChar_x + 13, gameChar_y - 25,gameChar_x + 15, gameChar_y - 30)
	}
    
    //Jumping facing forwards code
	else if(isFalling)
	{
        //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 15, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 15, gameChar_y - 50);

        //Gecco eyes
        fill(0);
        ellipse(gameChar_x - 8, gameChar_y - 57,11,11)
        ellipse(gameChar_x + 8, gameChar_y - 57,11,11)
        fill(255)
        ellipse(gameChar_x - 6, gameChar_y - 60,4,4)
        ellipse(gameChar_x + 10, gameChar_y - 60,4,4)

        //Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x - 6, gameChar_y -50, gameChar_x + 6 , gameChar_y - 50)

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        beginShape()
        vertex(gameChar_x - 7, gameChar_y - 15)
        vertex(gameChar_x - 8, gameChar_y)
        vertex(gameChar_x - 10, gameChar_y)
        vertex(gameChar_x - 6, gameChar_y)
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x + 7, gameChar_y - 15)
        vertex(gameChar_x + 8, gameChar_y)
        vertex(gameChar_x + 10, gameChar_y)
        vertex(gameChar_x + 6, gameChar_y) 
        endShape()

        //Gecco arms
        //left arm
        beginShape()
        vertex(gameChar_x - 4, gameChar_y - 40)
        vertex(gameChar_x - 5, gameChar_y - 40)
        vertex(gameChar_x - 15, gameChar_y - 37)
        vertex(gameChar_x - 20, gameChar_y - 45)
        endShape()

        //left fingers
        fill(194, 126, 87)
        triangle(gameChar_x - 22, gameChar_y - 40,gameChar_x - 18, gameChar_y - 40,gameChar_x - 20, gameChar_y - 45)

        //right arm
        noFill()
        beginShape()
        vertex(gameChar_x + 4, gameChar_y - 40)
        vertex(gameChar_x + 5, gameChar_y - 40)
        vertex(gameChar_x + 15, gameChar_y - 37)
        vertex(gameChar_x + 20, gameChar_y - 45)
        endShape()

        //right fingers
        fill(194, 126, 87)
        triangle(gameChar_x + 22, gameChar_y - 40,gameChar_x + 18, gameChar_y - 40,gameChar_x + 20, gameChar_y - 45)
	}
     
    //Getting hit by a car facing forwards code, I had to separate plummeting from falling to make them look different. 
	else if(isPlummeting)
	{  
		// Pink Cadillac
        fill(227, 152, 182);
        stroke(0);
        rect(gameChar_x - 45 , gameChar_y -30,90,30,10);
        fill(181, 174, 177)
        rect(gameChar_x - 35 , gameChar_y - 15,70,15,10);
        fill(51, 49, 50)
        quad(gameChar_x -20, gameChar_y - 50, 
             gameChar_x + 20, gameChar_y - 50,
             gameChar_x + 35 , gameChar_y -30 ,
             gameChar_x - 35, gameChar_y -30 );
        fill(222, 213, 217)
        ellipse(gameChar_x -40, gameChar_y - 20, 10,10);
        ellipse(gameChar_x -30, gameChar_y - 20, 10,10);
        ellipse(gameChar_x +40, gameChar_y - 20, 10,10);
        ellipse(gameChar_x +30, gameChar_y - 20, 10,10);
        fill(51, 49, 50)
        rect(gameChar_x - 45, gameChar_y, 20,8)
        rect(gameChar_x + 25, gameChar_y, 20,8)
        
        //Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 15, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 15, gameChar_y - 50);

        //Gecco eyes
        if(lives > 0)
        {
            fill(0);
            ellipse(gameChar_x - 8, gameChar_y - 57,11,11)
            ellipse(gameChar_x + 8, gameChar_y - 57,11,11)
            fill(255)
            ellipse(gameChar_x - 6, gameChar_y - 60,4,4)
            ellipse(gameChar_x + 10, gameChar_y - 60,4,4)
        }
        else
        {  
            textSize(16);
            fill(0);
            textFont('Verdana');
            text("✖",gameChar_x - 8, gameChar_y - 52);
            text("✖",gameChar_x + 8, gameChar_y - 52);
            fill(245, 147, 185);
            arc(gameChar_x - 4, gameChar_y - 50, 6, 8, 0, PI, PIE);
        }

        //Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x - 6, gameChar_y -50, gameChar_x + 6 , gameChar_y - 50)

        //Gecco legs
        noFill();
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        beginShape()
        vertex(gameChar_x - 7, gameChar_y - 15)
        vertex(gameChar_x - 8, gameChar_y)
        vertex(gameChar_x - 10, gameChar_y)
        vertex(gameChar_x - 6, gameChar_y)
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x + 7, gameChar_y - 15)
        vertex(gameChar_x + 8, gameChar_y)
        vertex(gameChar_x + 10, gameChar_y)
        vertex(gameChar_x + 6, gameChar_y) 
        endShape()

        //Gecco arms
        //left arm
        beginShape()
        vertex(gameChar_x - 4, gameChar_y - 40)
        vertex(gameChar_x - 5, gameChar_y - 40)
        vertex(gameChar_x - 15, gameChar_y - 37)
        vertex(gameChar_x - 20, gameChar_y - 45)
        endShape()

        //left fingers
        fill(194, 126, 87)
        triangle(gameChar_x - 22, gameChar_y - 40,gameChar_x - 18, gameChar_y - 40,gameChar_x - 20, gameChar_y - 45)

        //right arm
        noFill()
        beginShape()
        vertex(gameChar_x + 4, gameChar_y - 40)
        vertex(gameChar_x + 5, gameChar_y - 40)
        vertex(gameChar_x + 15, gameChar_y - 37)
        vertex(gameChar_x + 20, gameChar_y - 45)
        endShape()

        //right fingers
         fill(194, 126, 87)
        triangle(gameChar_x + 22, gameChar_y - 40,gameChar_x + 18, gameChar_y - 40,gameChar_x + 20, gameChar_y - 45)
	}
    
    // Standing front facing code
	else
	{   
		//Gecco body
        fill(181, 119, 83);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 60, 
             gameChar_x + 8, gameChar_y - 15,
             gameChar_x, gameChar_y - 10,
             gameChar_x - 8, gameChar_y - 15);

        //Gecco head
        fill(194, 126, 87);
        stroke(0);
        strokeWeight(0.5);
        quad(gameChar_x, gameChar_y - 43, 
             gameChar_x + 15, gameChar_y - 50,
             gameChar_x, gameChar_y - 60,
             gameChar_x - 15, gameChar_y - 50);

        //Gecco eyes
        if(lives > 0)
        {
			fill(0);
			ellipse(gameChar_x - 8, gameChar_y - 57,11,11)
			ellipse(gameChar_x + 8, gameChar_y - 57,11,11)
			fill(255)
			ellipse(gameChar_x - 6, gameChar_y - 60,4,4)
			ellipse(gameChar_x + 10, gameChar_y - 60,4,4)
        }
        else
        {  
            textSize(16);
            fill(0);
            textFont('Verdana');
            text("✖",gameChar_x - 8, gameChar_y - 52);
            text("✖",gameChar_x + 8, gameChar_y - 52);
            fill(245, 147, 185);
            arc(gameChar_x - 4, gameChar_y - 50, 6, 8, 0, PI, PIE);
        }

        //Gecco mouth
        strokeWeight(0.5);
        stroke(0);
        line(gameChar_x - 6, gameChar_y -50, gameChar_x + 6 , gameChar_y - 50)

        //Gecco legs
        noFill()
        strokeWeight(2);
        stroke(0)
        strokeWeight(0.5)
        stroke(0);
        strokeJoin(ROUND);

        //left leg
        beginShape()
        vertex(gameChar_x - 7, gameChar_y - 15)
        vertex(gameChar_x - 8, gameChar_y)
        vertex(gameChar_x - 10, gameChar_y)
        vertex(gameChar_x - 6, gameChar_y)
        endShape()

        //right leg
        beginShape()
        vertex(gameChar_x + 7, gameChar_y - 15)
        vertex(gameChar_x + 8, gameChar_y)
        vertex(gameChar_x + 10, gameChar_y)
        vertex(gameChar_x + 6, gameChar_y) 
        endShape()

        //Gecco arms

        //left arm
        beginShape()
        vertex(gameChar_x - 4, gameChar_y - 40)
        vertex(gameChar_x - 5, gameChar_y - 40)
        vertex(gameChar_x - 8, gameChar_y - 30)
        vertex(gameChar_x - 15, gameChar_y - 30)
        endShape()

        //left fingers
        fill(194, 126, 87)
        triangle(gameChar_x - 17, gameChar_y - 25,gameChar_x - 13, gameChar_y - 25,gameChar_x - 15, gameChar_y - 30)

        //right arm
        noFill()
        beginShape()
        vertex(gameChar_x + 4, gameChar_y - 40)
        vertex(gameChar_x + 5, gameChar_y - 40)
        vertex(gameChar_x + 8, gameChar_y - 30)
        vertex(gameChar_x + 15, gameChar_y - 30)
        endShape()

        //right fingers
        fill(194, 126, 87)
        triangle(gameChar_x + 17, gameChar_y - 25,gameChar_x + 13, gameChar_y - 25,gameChar_x + 15, gameChar_y - 30)
	}
}
 
function drawSigns()
{
    //Warning signs
    fill(100)
	textAlign(LEFT)
    textFont(font);
    textSize(12)
    text("Well, aren't you a curious little fella...", -1000, 200)
    text("You like to go against the grain I see...", -2500, 200)
    text("Well done, you found the hidden droplet. \n \n We appreciate curiosity 'round here!", -4500, 200)
    text("Now it's really time for you to turn back", -6000, 200)
    
    //Dissapearing text and guide in the beggining
    
    if(textVisible == true)
    {
        fill(252, 207, 3);
        stroke(10);
        strokeWeight(1);
        textStyle(BOLD);
        textFont(font);
        textAlign(CENTER);
        textSize(23);
        text("Press 'SPACE' TO START",105,height/3)
        isRight = false;
        isLeft = false;
    }
        
    else if(textVisible == false)
    {
        fill(252, 207, 3);
        stroke(10);
        strokeWeight(1);
        textStyle(BOLD);
        textFont(font);
        textAlign(CENTER);
        textSize(16);
        text("Welcome little traveller, \n \n \n \n \n \n Out here where the desert so vast,\n\n Cadillacs roam, and armadillos move fast.\n \n \n \n \n \n \n \n Collect every droplet you can see, \n \n or crossing the finish line won't be easy! \n \n \n \n \n \n \n \n Best of Luck, and don't delay; \n \n may your sixth sense guide your way!",105,textLoc)
        textLoc = textLoc - 1.4
    }
}

function drawClouds()
{
    for ( let i = 0; i < clouds.length; i++)
    {  
        if(i % 2 == 0)
        {
            // Cloud variant 1    
            fill(255,255,255,90)
            rect(clouds[i].x_pos -110, clouds[i].y_pos + 3,
            clouds[i].size * 2, clouds[i].size / 20 , 20)
            rect(clouds[i].x_pos -210, clouds[i].y_pos + 10,
            clouds[i].size * 3.6, clouds[i].size / 10 ,20)
            rect(clouds[i].x_pos -310,clouds[i].y_pos + 20,
            clouds[i].size * 6, clouds[i].size * 0.3 , 20) 
            rect(clouds[i].x_pos -110,clouds[i].y_pos + 50,
            clouds[i].size * 2.22, clouds[i].size / 10 ,20)
            rect(clouds[i].x_pos -110,clouds[i].y_pos + 62,
            clouds[i].size, clouds[i].size / 20,20)     
        }
            
        else
        {
            // Cloud variant 2 
            rect(clouds[i].x_pos + 180, clouds[i].y_pos + 83,
            clouds[i].size, clouds[i].size / 20 ,5)
            rect(clouds[i].x_pos + 50, clouds[i].y_pos + 90,
            clouds[i].size * 3, clouds[i].size / 10 ,10)
            rect(clouds[i].x_pos ,clouds[i].y_pos + 100,
            clouds[i].size * 4, clouds[i].size / 5 ,20)
        }
    }
    
}

function drawMountains()
{
    for ( let i = 0; i < mountains.length; i++)
    {
        noStroke();
        fill(135, 111, 91)
        triangle(mountains[i].x_pos + 100 - mountains[i].size, mountains[i].y_pos, 
        mountains[i].x_pos + 600 + mountains[i].size, mountains[i].y_pos,
        mountains[i].x_pos + 220,mountains[i].y_pos - 122 - mountains[i].size)
        
        fill(150, 122, 98)
        triangle(mountains[i].x_pos + 150 - mountains[i].size, mountains[i].y_pos,
        mountains[i].x_pos + 600 + mountains[i].size, mountains[i].y_pos,
        mountains[i].x_pos + 300,mountains[i].y_pos - 52)
        
        fill(161, 129, 101);
        triangle( mountains[i].x_pos + 150 - mountains[i].size,mountains[i].y_pos,mountains[i].x_pos + 600 + mountains[i].size,
        mountains[i].y_pos,mountains[i].x_pos + 500,mountains[i].y_pos - 72 - mountains[i].size)
    }
    
}

function drawTrees()
{
    for(let i = 0; i < trees_x.length ; i++)
    {
		//tree itself
        fill(161, 144, 100)
        stroke(107, 90, 75)
        strokeWeight(0)
        rect(trees_x[i],treePos_y,10,60,30)
        rect(trees_x[i] - 6,treePos_y + 10,5,30,30)
        rect(trees_x[i] - 6,treePos_y + 35,10,5,30)
        rect(trees_x[i] + 11,treePos_y + 17,5,17,30)
        rect(trees_x[i] + 9,treePos_y + 30,7,5,30)
		
        //tree shadow
        fill(0,15)
        noStroke()
        quad(trees_x[i] + 2,treePos_y + 60, trees_x[i] + 10, treePos_y + 60,trees_x[i] + 47,treePos_y + 74,
        trees_x[i] + 27,treePos_y + 74,30)
    }
}

function drawCollectable(t_collectable)
{
    // for the bouncing motion I used this: https://editor.p5js.org/crecord/sketches/ByWfYwbjb
    /////////////////////////////Beginning///////////////////////////////// 

    if(t_collectable.isFound == false)
    {
        t_collectable.theta += 0.1;
        t_collectable_bounce_ypos = t_collectable.y_pos + sin(t_collectable.theta) * amplitude;
        stroke(0)
        strokeWeight(0.5)
        fill(151, 220, 232)
        ellipse(t_collectable.x_pos,t_collectable_bounce_ypos - t_collectable.size/2 - 10,t_collectable.size,t_collectable.size)

        //Shiny dot on the droplet
        strokeWeight(0.5);
        stroke(255);
        fill(255);
        ellipse(t_collectable.x_pos - t_collectable.size/3,t_collectable_bounce_ypos - t_collectable.size/2 - 10, t_collectable.size/10,t_collectable.size/5);
    } 
	/////////////////////////////Ending///////////////////////////////// 
}

function drawCanyon(t_canyon)
{
    noStroke()
    fill(145, 134, 120,200)
    quad(t_canyon.x_pos - 24, t_canyon.y_pos,
         t_canyon.x_pos + 15 + t_canyon.width, t_canyon.y_pos,
         t_canyon.x_pos + 119 + t_canyon.width, t_canyon.y_pos + 144,
         t_canyon.x_pos - 140, t_canyon.y_pos + 144)
    
    //road stripes
    fill(255,240,0,100)
    quad(t_canyon.x_pos - 17 + t_canyon.width/2, t_canyon.y_pos + 144,
         t_canyon.x_pos + 3 + t_canyon.width/2, t_canyon.y_pos + 144,
         t_canyon.x_pos - 1 + t_canyon.width/2,t_canyon.y_pos + 108,
         t_canyon.x_pos - 10 + t_canyon.width/2, t_canyon.y_pos + 108)
    quad(t_canyon.x_pos - 8 + t_canyon.width/2, t_canyon.y_pos + 78,
         t_canyon.x_pos - 2 + t_canyon.width/2,t_canyon.y_pos + 78,
         t_canyon.x_pos - 3 + t_canyon.width/2,t_canyon.y_pos + 63,
         t_canyon.x_pos - 6 + t_canyon.width/2, t_canyon.y_pos + 63)
    quad(t_canyon.x_pos - 5 + t_canyon.width/2, t_canyon.y_pos + 38,
         t_canyon.x_pos - 3 + t_canyon.width/2,t_canyon.y_pos + 38,
         t_canyon.x_pos - 2.5 + t_canyon.width/2, t_canyon.y_pos + 45,
         t_canyon.x_pos - 5.5 + t_canyon.width/2,t_canyon.y_pos + 45)
    rect(t_canyon.x_pos - 4.5 + t_canyon.width/2,t_canyon.y_pos + 24,1,5,10)
    rect(t_canyon.x_pos - 4.5 + t_canyon.width/2,t_canyon.y_pos + 15,1,3,10)
    rect(t_canyon.x_pos - 4.5 + t_canyon.width/2,t_canyon.y_pos + 8,1,2,10)
    rect(t_canyon.x_pos - 4.5 + t_canyon.width/2,t_canyon.y_pos + 4,1,1,10)
    rect(t_canyon.x_pos - 4.5 + t_canyon.width/2,t_canyon.y_pos + 1,1,1,10)
}

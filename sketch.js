// Background gradient, I used this in the P5.js reference     https://editor.p5js.org/evebdn/sketches/O9G35ueZv
/////////////////////////////Beginning///////////////////////////////// 
var c1, c2; // for the gradient background
/////////////////////////////Ending/////////////////////////////////
var gameChar_x;
var gameChar_y;
var floorPos_y;
 
var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var trees_x;
var treePos_y;
var clouds;
var mountains;
var collectables;
var canyons;

var cameraPosX;

var game_score;
var flagpole;
var lives;

var backgroundSound;
var jumpSound;
var waterSound = [];
var randomSound;
var crashSound;
var crashhasPlayed = false;
var gameoverhasPlayed = false;
var winninghasPlayed = false;
var armadilloSound;
var gameoverSound;
var winningSound;

var textVisible = true;
var textLoc = 650;

var font;

var platforms;
var enemies;

// ── Mute toggles ──────────────────────────────────────────────
var bgMuted  = false;   // background music only
var sfxMuted = false;   // all other game sounds
// ──────────────────────────────────────────────────────────────

//for the bouncing motion I used this : https://editor.p5js.org/crecord/sketches/ByWfYwbjb
/////////////////////////////Beginning///////////////////////////////// 
var collectable_bounce_ypos;
var amplitude = 10.0;       // Height of wave
/////////////////////////////Ending////////////////////////////////////

function preload()
{
    soundFormats('mp3','wav');

    //BACKGROUND sound
    backgroundSound = loadSound('assets/PinkCaddy.mp3');
    backgroundSound.setVolume(0.1);

    //JUMP sound
    jumpSound = loadSound('assets/Jump.mp3');
    jumpSound.setVolume(0.1);
    
    //WATER sound
    waterSound.push(loadSound('assets/Droplet1.mp3'))
    waterSound.push(loadSound('assets/Droplet2.mp3'))
    waterSound.push(loadSound('assets/Droplet3.mp3'))
    waterSound[0].setVolume(0.1); 
    waterSound[1].setVolume(0.1); 
    waterSound[2].setVolume(0.1); 
    
    //CARCRASH sound
    crashSound = loadSound('assets/carcrash3.mp3')
    crashSound.setVolume(0.4);
    
    //ARMADILLO sound
    armadilloSound = loadSound('assets/Armadillo.mp3')
    
    //GAMEOVER sound
    gameoverSound = loadSound('assets/Gameover.mp3')
    
    //WINNING sound
    winningSound = loadSound('assets/Winning.mp3')
    winningSound.setVolume(5);
    
    //FONT
    font = loadFont('fonts/PressStart2P-Regular.ttf')
}

function setup()
{
    createCanvas(1024, 576);
    backgroundSound.loop();
    floorPos_y = height * 3/4;
    lives = 5;
    startGame();
}

function draw()
{   
    push()
    
    cameraPosX = gameChar_x - width / 2; 
	
    // Background gradient, I used this in the P5.js reference https://editor.p5js.org/evebdn/sketches/O9G35ueZv
    /////////////////////////////Beginning///////////////////////////////// 
	
    c1 = color(242, 141, 212);
    c2 = color(250, 149, 50);

    for(let y = 0; y < height; y++)
    {
        n = map(y,0,height,0,1);
        let newc = lerpColor( c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }
	
    /////////////////////////////Ending/////////////////////////////////
    
    // Sand ground
    noStroke();
    fill(186, 148, 112);
    rect(0, floorPos_y, width, height - floorPos_y); 

    //Score and HP in top left corner
    for(let i= 0; i < 25 ; i++)
    {
        textFont('Verdana');
        fill(181, 174, 174)
        textSize(11);
        text("⬤",15 + i * 20,20)
    }
    
    for(let i= 0; i < 5 ; i++)
    {
        textFont('Verdana');
        fill(181, 174, 174)
        textSize(14);
        text("♥",15 + i * 20,44)
    }
    
    //Car crash sound play only once
    if(isPlummeting == true && crashhasPlayed == false)
	{
        if (!sfxMuted) crashSound.play();
		crashhasPlayed = true;
	}   

    renderScore();
    renderLifetoken();

    // ── Mute buttons (drawn in screen space, before camera translate) ──
    drawMuteButtons();
    
    // Scrolling
    translate(-cameraPosX, 0)
     
    // Draw the background iterms
    drawMountains();
    drawTrees();
    drawClouds();
    
	for(let i = 0; i < platforms.length; i++)
	{
		platforms[i].draw();
	}

    // Draw canyon
    for( let i= 0 ; i < canyons.length ; i++)
    {
        checkCanyon(canyons[i]);
        drawCanyon(canyons[i]);
    }
    
    // Draw a collectable item water droplet
    for(let i= 0; i < collectables.length ; i++)
    {
        if(!collectables[i].isFound)
		{
			checkCollectable(collectables[i]);
			drawCollectable(collectables[i]);
		}
    }
	
    //Draw Charecter from a module
    drawCharacter();
 
    //Draw flagpole
    renderFlagpole();
 
    if(lives == 0)
    {
        stroke(10);
        strokeWeight(1);
        fill(204, 71, 83);
        textFont(font);
        textAlign(CENTER);
        textSize(80);
        text("GAME OVER", gameChar_x - 360, height/3,800,400);
		
        textSize(28);
        text(" Press space to continue.", gameChar_x - 400, height/2,800,400)
		
        if(gameoverhasPlayed == false)
		{
            if (!sfxMuted) gameoverSound.play();
			gameoverhasPlayed = true;    
		}
        return
    }
    
    if(flagpole.isReached && game_score < 25)
    {
        stroke(10);
        strokeWeight(1);
        fill(252, 207, 3);
        textFont(font);
        textAlign(CENTER);
        textSize(40);
        text("No buddy, can't do!", gameChar_x - 400, height/3,800,400);
		
        textSize(28);
        text("Please collect all the droplets", gameChar_x - 400, height/4*3,800,400)  
    }
    
    if(flagpole.isReached && game_score == 25)
    {
        stroke(10);
        strokeWeight(1);
        fill(171, 222, 104);
        textFont(font);
        textAlign(CENTER);
        textSize(80);
        text("Level complete", gameChar_x - 400, height/3,800,400);
		
        textSize(28);
        text("Press space to restart", gameChar_x - 400, height/4*3,800,400);
		
        if(winninghasPlayed == false)
		{
            if (!sfxMuted) winningSound.play();
        	winninghasPlayed = true;
        	return
		}
  
    }
    
    drawSigns();
    
	////////////////////////////INTERACTION CODE////////////////////////////
	
    //Moving left
    if(isLeft == true)
    {
        gameChar_x -= 10;
    }
    
    //Moving right
    if(isRight == true)
    {
       gameChar_x += 10;
    }
    
    //If its in the air its falling down
    if(gameChar_y < floorPos_y)
    {
        var isContact = false;
        for(let i = 0; i < platforms.length; i++)
		{
			if(platforms[i].checkContact(gameChar_x, gameChar_y) == true)
			{
				isContact = true;
				isFalling = false;
				break;
			}
		}
        if(isContact == false)
        {
			gameChar_y += 5;
			isFalling = true; 
        }
    }

    //If its not in the air its not falling anymore
    else
    {
        isFalling = false;
    }
    
    //If the character is over the canyon/road, it starts plummeting
    // Except if its over floorpos_y aka. midair
    
    if(isPlummeting == true)
    {
            gameChar_y += 10;
    }
    
    checkFlagpole();

    checkPlayerDie();
    
    for(let i = 0; i < enemies.length; i++)
	{
		enemies[i].draw(); 

		var isContact = enemies[i].checkContact(gameChar_x ,gameChar_y);

		if(isContact)
		{
			if(lives > 0)
			{
                if (!sfxMuted) armadilloSound.play();
				lives -= 1;
				retryGame();
				break;
			}
		}
	}
    
	if(flagpole.isReached == true && lives > 0 && game_score == 25)
	{
		isLeft = false;
		isRight = false;
		isFalling = false;
	}

    
    pop()
} 

function keyPressed()
{
	// if statements to control the animation of the character when keys are pressed
    
    if(flagpole.isReached == false && lives > 0)
    {
        if(keyCode == 65 && isPlummeting == false)
        {
            isLeft = true;
        }
        else if(keyCode == 68 && isPlummeting == false)
        {
            isRight = true;
        }

        else if(keyCode == 87 && isFalling == false && isPlummeting == false || keyCode == 32  && isFalling == false && isPlummeting == false)
        {
            gameChar_y -= 130;
            if (!sfxMuted) jumpSound.play();
        }
     }
    
    if(flagpole.isReached == false && lives == 0 && keyCode == 32)
	{
		restartGame();
	}
    
    if(flagpole.isReached == true && lives > 0 && game_score < 25)
    {
          
        if(keyCode == 65 && isPlummeting == false)
        {
            isLeft = true;
        }
        else if(keyCode == 68 && isPlummeting == false)
        {
            isRight = true;
        }

        else if(keyCode == 87 && isFalling == false && isPlummeting == false || keyCode == 32  && isFalling == false && isPlummeting == false)
        {
            gameChar_y -= 130;
            if (!sfxMuted) jumpSound.play();
        }
    }
    
    if(flagpole.isReached == true && lives > 0 && game_score == 25 && keyCode == 32)
	{
		restartGame();
	} 

    
    if(keyCode == 32 || keyCode == 87)
	{
		textVisible = false;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when keys are released.
    if(keyCode == 65)
	{
		isLeft = false;
	}
    else if(keyCode == 68)
	{
		isRight = false;
	}
    
    else if(keyCode == 87 || keyCode == 32)
	{
		isPlummeting = false; 
	}
}

function checkCollectable(t_collectable)
{
    if(dist(gameChar_x,gameChar_y, t_collectable.x_pos,t_collectable.y_pos)<20)
    {
        t_collectable.isFound = true;
        game_score += 1;
        if (!sfxMuted) waterSound[floor(random(0,waterSound.length))].play();
    }
}

function checkCanyon(t_canyon)
{
        if((gameChar_x > t_canyon.x_pos - 24) && (gameChar_x < t_canyon.x_pos + 15 + t_canyon.width) && (gameChar_y >= floorPos_y))
		{
			isPlummeting = true;
			//This is for not letting the player to jump out when they just walk into the t_canyon turned left or right.
			isLeft = false;          
			isRight =false;
		}
}

function renderFlagpole()
{
    push();
	
    strokeWeight(0.5);
    fill(180);
    rect(flagpole.x_pos, floorPos_y -180, 5, 180);
	
    fill(115, 161, 96);
    stroke(0);
	
    if(flagpole.isReached && game_score == 25)
    {
        rect(flagpole.x_pos, floorPos_y - 180, 70, 30);
        fill(137, 235, 117);
    }
    else
    {
        rect(flagpole.x_pos, floorPos_y - 50, 70, 30);
    }
	
    pop();
}

function checkFlagpole()
{
    var distance = abs(gameChar_x - flagpole.x_pos)
    
    if(distance < 30)
    {
        flagpole.isReached = true;
    }
    if( distance >= 30)
    {
        flagpole.isReached = false;
    }
}

function checkPlayerDie()
{
    if(gameChar_y > 576) 
   {
		if(lives > 1)
		{
			lives -= 1;
			retryGame();
		}
		else
		{
			lives = 0; 
		}
   }
}

function renderLifetoken()
{
   for(let i= 0; i < lives ; i++)
   {
		fill(230, 80, 69)
		textSize(14);
		text("♥",15 + i * 20,44)
   }
}

function renderScore()
{
   for(let i= 0; i < game_score ; i++)
   {
		fill(161, 235, 247)
		textSize(11);
		text("⬤",15 + i * 20,20)
   }
}

// ══════════════════════════════════════════════════════════════
//  MUTE BUTTONS
//  Two icons in the top-right corner, drawn purely with vertices.
//  Left icon  = BGM (music note)   — toggles background music
//  Right icon = SFX (speaker)      — toggles all other sounds
// ══════════════════════════════════════════════════════════════
function drawMuteButtons()
{
    push();
    resetMatrix(); // ignore camera translate — stay in screen space

    var b1x = width - 52;  // BGM button centre x
    var b2x = width - 22;  // SFX button centre x
    var by  = 22;           // shared y

    // ── BGM: music note ──────────────────────────────────────
    var col1 = bgMuted ? color(100, 100, 100) : color(255, 255, 255);

    // Note head (oval approximated as 8-vertex polygon)
    fill(col1);
    noStroke();
    beginShape();
    vertex(b1x - 1, by + 7);
    vertex(b1x - 4, by + 5);
    vertex(b1x - 5, by + 3);
    vertex(b1x - 4, by + 1);
    vertex(b1x - 1, by);
    vertex(b1x + 2, by + 2);
    vertex(b1x + 3, by + 4);
    vertex(b1x + 2, by + 6);
    endShape(CLOSE);

    // Stem (thin tall rectangle via vertices)
    beginShape();
    vertex(b1x + 2, by + 4);
    vertex(b1x + 4, by + 4);
    vertex(b1x + 4, by - 7);
    vertex(b1x + 2, by - 7);
    endShape(CLOSE);

    // Flag on top of stem (small wedge)
    beginShape();
    vertex(b1x + 4, by - 7);
    vertex(b1x + 9, by - 4);
    vertex(b1x + 9, by - 2);
    vertex(b1x + 4, by - 4);
    endShape(CLOSE);

    // Red slash when muted
    if (bgMuted)
    {
        stroke(210, 55, 55);
        strokeWeight(2);
        line(b1x - 7, by - 9, b1x + 10, by + 9);
    }

    // ── SFX: speaker ─────────────────────────────────────────
    var col2 = sfxMuted ? color(100, 100, 100) : color(255, 255, 255);

    fill(col2);
    noStroke();

    // Speaker body (trapezoid)
    beginShape();
    vertex(b2x - 7, by - 3);
    vertex(b2x - 2, by - 3);
    vertex(b2x - 2, by + 3);
    vertex(b2x - 7, by + 3);
    endShape(CLOSE);

    // Speaker cone (triangle pointing right)
    beginShape();
    vertex(b2x - 2, by - 5);
    vertex(b2x + 3,  by - 9);
    vertex(b2x + 3,  by + 9);
    vertex(b2x - 2, by + 5);
    endShape(CLOSE);

    // Sound waves OR mute X
    if (!sfxMuted)
    {
        // Inner wave — 5-vertex arc approximation
        noFill();
        stroke(col2);
        strokeWeight(1.5);
        beginShape();
        vertex(b2x + 5,  by - 4);
        vertex(b2x + 7,  by - 2);
        vertex(b2x + 8,  by);
        vertex(b2x + 7,  by + 2);
        vertex(b2x + 5,  by + 4);
        endShape();

        // Outer wave
        beginShape();
        vertex(b2x + 7,  by - 7);
        vertex(b2x + 10, by - 4);
        vertex(b2x + 11, by);
        vertex(b2x + 10, by + 4);
        vertex(b2x + 7,  by + 7);
        endShape();
    }
    else
    {
        stroke(210, 55, 55);
        strokeWeight(2);
        line(b2x - 8, by - 9, b2x + 11, by + 9);
    }

    pop();
}

// ── Click handler: toggle mute on button hit ─────────────────
function mousePressed()
{
    var b1x = width - 52;
    var b2x = width - 22;
    var by  = 22;
    var hitR = 14; // click radius in px

    if (dist(mouseX, mouseY, b1x, by) < hitR)
    {
        bgMuted = !bgMuted;
        if (bgMuted) backgroundSound.pause();
        else         backgroundSound.loop();
    }

    if (dist(mouseX, mouseY, b2x, by) < hitR)
    {
        sfxMuted = !sfxMuted;
    }
}

// ─────────────────────────────────────────────────────────────

function createPlatforms(x, y, length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
		{
            stroke(0);
            strokeWeight(0.5);
            fill(186, 148, 112);
            rect(this.x, this.y, this.length, 20);
        },
        checkContact: function(gc_x, gc_y)
        {
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d = this.y - gameChar_y;
                if(d >=0 && d < 5)
                {
					return true;
                }
            }
            
            return false;
        }
    }
    
    return p;
}

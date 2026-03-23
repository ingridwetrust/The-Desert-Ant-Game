function restartGame()
{
    
	gameChar_x = width/10;
	gameChar_y = floorPos_y;
  
    // Character movements
    
    isLeft =false;
    isRight =false;
    isPlummeting =false;
    isFalling= false;
	
   //Collectable
   
	for (let i = 0 ; i < collectables.length ; i++)
	{
		collectables[i].isFound = false;
	}
    
    game_score = 0;
    lives = 5;
    
    crashhasPlayed = false;
    gameoverhasPlayed = false;
    winninghasPlayed = false;
    
    flagpole = {    isReached:false, 
                    x_pos : 10000};
   
}
//retry without losing the collectables
function retryGame()
{
    
	gameChar_x = width/10;
	gameChar_y = floorPos_y;
  
    // Character movements
    
    isLeft =false;
    isRight =false;
    isPlummeting =false;
    isFalling= false;

    
    // Environment objects
    
    //Trees
    trees_x = [300, 500 ,900 , 1150, 1800,2200,2303,2600,3300,3900,4300,4350,4950,5850,6700,7700,7800,8800,9400];
    treePos_y = floorPos_y - 55;
    
    //Clouds
    cloud1 = {  x_pos: 0,
                y_pos: 200,
                size: 100 };
    cloud2 = {  x_pos: 800,
                y_pos: 200,
                size: 100 };
    cloud3 = {  x_pos: 600,
                y_pos: 130,
                size: 100 };
    cloud4 = {  x_pos: 2000,
                y_pos: 8,
                size: 100 };   
    cloud5 = {  x_pos: 2700,
                y_pos: 200,
                size: 100 };    
    cloud6 = {  x_pos: 4000,
                y_pos: 130,
                size: 100 };    
    cloud7 = {  x_pos: 5000,
                y_pos: 180,
                size: 100 };    
    cloud8 = {  x_pos: 6000,
                y_pos: 70,
                size: 100 };    
    cloud9 = {  x_pos: 7200,
                y_pos: 167,
                size: 100 };    
    cloud10 = {  x_pos: 8000,
                y_pos: 198,
                size: 100 };
    cloud11 = {  x_pos: 8900,
                y_pos: 150,
                size: 100 };
    cloud12 = {  x_pos: 9700,
                y_pos: 40,
                size: 100 };
    
    
    clouds = [cloud1,cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8,cloud9,cloud10,cloud11,cloud12];
    
    //Mountains
    
    mountain1 = {   x_pos: -225,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain2 = {   x_pos: 500,
                    y_pos: floorPos_y,
                    size: 70};
    mountain3 = {   x_pos: 1600,
                    y_pos: floorPos_y,
                    size: 100 }; 
    mountain4 = {   x_pos: 1900,
                    y_pos: floorPos_y,
                    size: 200 }; 
    mountain5 = {   x_pos: 3400,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain6 = {   x_pos: 3600,
                    y_pos: floorPos_y,
                    size: 300 };
    mountain7 = {   x_pos: 4900,
                    y_pos: floorPos_y,
                    size: 100 }; 
    mountain8 = {   x_pos: 4200,
                    y_pos: floorPos_y,
                    size: 20 };  
    mountain9 = {   x_pos: 6700,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain10 = {   x_pos: 7000,
                    y_pos: floorPos_y,
                    size: 200 };    
    mountain11 = {   x_pos: 8200,
                    y_pos: floorPos_y,
                    size: 1 };    
    mountain12 = {   x_pos: 9000,
                    y_pos: floorPos_y,
                    size: 100 }; 
    
    mountains = [mountain1,mountain2,mountain3,mountain4,mountain5,mountain6,mountain7,mountain8,mountain9,mountain10,mountain11,mountain12]; 
   
    
    //Canyon/Road
    
    canyon1 =    {  x_pos: 400,
                    y_pos: floorPos_y,
                    width: 50 };
    canyon2 =    {  x_pos: 1400,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon3 =    {  x_pos: 2000,
                    y_pos: floorPos_y,
                    width: 120 };    
    canyon4 =    {  x_pos: 4000,
                    y_pos: floorPos_y,
                    width: 120 }; 
    canyon5 =    {  x_pos: 4400,
                    y_pos: floorPos_y,
                    width: 120 };
    canyon6 =    {  x_pos: 6000,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon7 =    {  x_pos: 6300,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon8 =    {  x_pos: 6600,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon9 =    {  x_pos: 8000,
                    y_pos: floorPos_y,
                    width: 140 };
    
    canyons = [canyon1,canyon2,canyon3,canyon4,canyon5,canyon6,canyon7,canyon8,canyon9];
    
    crashhasPlayed = false;
    gameoverhasPlayed = false;
    winninghasPlayed = false;
    
    
    flagpole = {    isReached:false, 
                    x_pos : 10000};
   
}
//first start with introduction
function startGame()
{
    
	gameChar_x = width/10;
	gameChar_y = floorPos_y;
    

  
    // Character movements
    
    isLeft =false;
    isRight =false;
    isPlummeting =false;
    isFalling= false;

    
    // Environment objects
    
    //Trees
    trees_x = [300, 500 ,900 , 1150, 1800,2200,2303,2600,3300,3900,4300,4350,4950,5850,6700,7700,7800,8800,9400];
    treePos_y = floorPos_y - 55;
    
    //Clouds
    cloud1 = {  x_pos: 0,
                y_pos: 200,
                size: 100 };
    cloud2 = {  x_pos: 800,
                y_pos: 200,
                size: 100 };  
    cloud3 = {  x_pos: 600,
                y_pos: 130,
                size: 100 };
    cloud4 = {  x_pos: 2000,
                y_pos: 8,
                size: 100 };    
    cloud5 = {  x_pos: 2700,
                y_pos: 200,
                size: 100 };    
    cloud6 = {  x_pos: 4000,
                y_pos: 130,
                size: 100 };    
    cloud7 = {  x_pos: 5000,
                y_pos: 180,
                size: 100 };    
    cloud8 = {  x_pos: 6000,
                y_pos: 70,
                size: 100 };    
    cloud9 = {  x_pos: 7200,
                y_pos: 167,
                size: 100 };    
    cloud10 = {  x_pos: 8000,
                y_pos: 198,
                size: 100 };
    cloud11 = {  x_pos: 8900,
                y_pos: 150,
                size: 100 };
    cloud12 = {  x_pos: 9700,
                y_pos: 40,
                size: 100 };
    
    
    clouds = [cloud1,cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8,cloud9,cloud10,cloud11,cloud12];
    
    
    //Mountains
    
    mountain1 = {   x_pos: -225,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain2 = {   x_pos: 500,
                    y_pos: floorPos_y,
                    size: 70};
    mountain3 = {   x_pos: 1600,
                    y_pos: floorPos_y,
                    size: 100 }; 
    mountain4 = {   x_pos: 1900,
                    y_pos: floorPos_y,
                    size: 200 }; 
    mountain5 = {   x_pos: 3400,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain6 = {   x_pos: 3600,
                    y_pos: floorPos_y,
                    size: 300 };
    mountain7 = {   x_pos: 4900,
                    y_pos: floorPos_y,
                    size: 100 }; 
    mountain8 = {   x_pos: 4200,
                    y_pos: floorPos_y,
                    size: 20 };  
    mountain9 = {   x_pos: 6700,
                    y_pos: floorPos_y,
                    size: 1 }; 
    mountain10 = {   x_pos: 7000,
                    y_pos: floorPos_y,
                    size: 200 };    
    mountain11 = {   x_pos: 8200,
                    y_pos: floorPos_y,
                    size: 1 };    
    mountain12 = {   x_pos: 9000,
                    y_pos: floorPos_y,
                    size: 100 }; 
    
    mountains = [mountain1,mountain2,mountain3,mountain4,mountain5,mountain6,mountain7,mountain8,mountain9,mountain10,mountain11,mountain12]; 
   
    
    //Canyon/Road
    
    canyon1 =    {  x_pos: 400,
                    y_pos: floorPos_y,
                    width: 50 };
    canyon2 =    {  x_pos: 1400,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon3 =    {  x_pos: 2000,
                    y_pos: floorPos_y,
                    width: 120 };    
    canyon4 =    {  x_pos: 4000,
                    y_pos: floorPos_y,
                    width: 120 }; 
    canyon5 =    {  x_pos: 4400,
                    y_pos: floorPos_y,
                    width: 120 };
    canyon6 =    {  x_pos: 6000,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon7 =    {  x_pos: 6300,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon8 =    {  x_pos: 6600,
                    y_pos: floorPos_y,
                    width: 20 };
    canyon9 =    {  x_pos: 8000,
                    y_pos: floorPos_y,
                    width: 140 };
    
    canyons = [canyon1,canyon2,canyon3,canyon4,canyon5,canyon6,canyon7,canyon8,canyon9];
    

    //Collectable
    
    collectable1 = { x_pos:  300,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 0 };
    collectable2 = { x_pos:  750,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };
    collectable3 = { x_pos:  1405,
                    y_pos:  floorPos_y - 100,
                    size: 30,
                    isFound:false,
                    theta: 0 };
    collectable4 = { x_pos:  1000,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };    
    collectable5 = { x_pos:  2052,
                    y_pos:  floorPos_y - 100,
                    size: 30,
                    isFound:false,
                    theta: 0 };    
    collectable6 = { x_pos:  2850,
                    y_pos:  floorPos_y - 110,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };    
    collectable7 = { x_pos:  3250,
                    y_pos:  floorPos_y - 250,
                    size: 30,
                    isFound:false,
                    theta: 0 };    
    collectable8 = { x_pos:  3650,
                    y_pos:  floorPos_y - 110,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };    
    collectable9 = { x_pos:  4052,
                    y_pos:  floorPos_y - 70,
                    size: 30,
                    isFound:false,
                    theta: 0 };    
    collectable10 = { x_pos:  4452,
                    y_pos:  floorPos_y - 70,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };
    collectable11 = { x_pos:  6007,
                    y_pos:  floorPos_y - 100,
                    size: 30,
                    isFound:false,
                    theta: 0 };
    collectable12 = { x_pos:  6307,
                    y_pos:  floorPos_y - 100,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };
    collectable13 = { x_pos:  6607,
                    y_pos:  floorPos_y - 100,
                    size: 30,
                    isFound:false,
                    theta: 0 };
   //hidden collectable
    collectable14 = { x_pos:  -4285,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 0 }; 
    collectable15 = { x_pos:  7962,
                    y_pos:  floorPos_y - 20,
                    size: 30,
                    isFound:false,
                    theta: 1.14 }; 
    collectable16 = { x_pos:  8062,
                    y_pos:  floorPos_y - 80,
                    size: 30,
                    isFound:false,
                    theta: 2.14 };     
    collectable17 = { x_pos:  8162,
                    y_pos:  floorPos_y - 20,
                    size: 30,
                    isFound:false,
                    theta: 3.14 }; 
    
    collectable18 = { x_pos:  9000,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 0.14 };
      
    collectable19 = { x_pos:  9100,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 1.14 };
      
    collectable20 = { x_pos:  9200,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 2.14 };
      
    collectable21 = { x_pos:  9300,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 3.14 };
      
    collectable22= { x_pos:  9400,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 2.14 };
      
    collectable23 = { x_pos:  9500,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 1.14 };
      
    collectable24 = { x_pos:  9600,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 0.14 };
      
    collectable25 = { x_pos:  9700,
                    y_pos:  floorPos_y,
                    size: 30,
                    isFound:false,
                    theta: 1.14 };
      
    collectables = [collectable1,collectable2,collectable3,collectable4,collectable5,collectable6,collectable7,collectable8,collectable9,collectable10,collectable11,collectable12,collectable13,collectable14,collectable15,collectable16,collectable17,collectable18,collectable19,collectable20,collectable21,collectable22,collectable23,collectable24,collectable25];
    
    platforms = [];

    platforms.push(createPlatforms(2800,floorPos_y - 100,100));
    platforms.push(createPlatforms(3000,floorPos_y - 170,100));
    platforms.push(createPlatforms(3200,floorPos_y - 240,100));
    platforms.push(createPlatforms(3400,floorPos_y - 170,100));
    platforms.push(createPlatforms(3600,floorPos_y - 100,100));
    
    enemies = [];
    enemies.push(new Enemy(550, floorPos_y, 750));
    enemies.push(new Enemy(1504, floorPos_y, 390));
    enemies.push(new Enemy(4620, floorPos_y, 300));
    enemies.push(new Enemy(4920, floorPos_y, 300));
    enemies.push(new Enemy(5220, floorPos_y, 300));
    enemies.push(new Enemy(5520, floorPos_y, 300));
    
    
    game_score = 0;

    flagpole = {    isReached:false, 
                    x_pos : 10000};
   
}

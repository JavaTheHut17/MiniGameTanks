//Game States
const Loading = 0;
const MainMenuScreen = 1;
const Play = 2;
const LeaderBoard = 3;
const gameloadingscene = 4;

//Inital loading state
let currentState = Loading;

// Misc Variables
let menubar;
let isgameready = false;
let buttonStart;
let buttonLeaderBoard;
let terrain;
let Tanks;
let test;
let startbuttonhid = false;
let startbuttoniscreated = false;
let timesincelastfire1;
let timesincelastfire2;
let timesincelastfire3;
let timesincelastfire4;
let homebutton;
let menubardrawn = false;
let timer = 0;
let timer2 = 0;
let continuebutton;
let continuebuttonclicked = false;
let playbuttonclicked1 = false;
let titleS;
let gameplayed = false;
let buttonLeaderBoardshown = false;
let wintally = false;

//Tank 1
let tank1;
let tank1locX;
let tank1locY;
let fire1;
let fire1direction = -170;
let firstFire1 = false;
let shotpower1;
let tankhealth1 = 100;

//Tank 4 (Player 2 )
let tank4;
let tank4locX;
let tank4locY;
let fire2;
let fire2direction = -170;
let firstFire2 = false;
let tankhealth4 = 100;
let shotpower2;

//Tank 2
let tank2;
let tank2locX;
let tank2locY;
let fire3;
let fire3direction = -170;
let firstFire3 = false;
let tankhealth2 = 100;

//Tank 3
let tank3;
let tank3locX;
let tank3locY;
let fire4;
let fire4direction = -170;
let firstFire4 = false;
let tankhealth3 = 100;

//Towers Terrain
let terrainSegment1 = [];
let newterrainSegment1 = [];
let terrainSegment2;
let newterrainSegment2 = [];
let terrainSegment3;
let newterrainSegment3 = [];
let terrainSegment4;
let newterrainSegment4 = [];
let terrainSegment5;
let newterrainSegment5 = [];
let terrainSegment6;
let newterrainSegment6 = [];
let terrainSegment7;
let newterrainSegment7 = [];

//Random Numbers
let ran1;
let ran2;
let ran3;
let ran4;
let ran5;
let ran6;

//Image Background
let Background1;
let AirDrop;
let Vid;
let startScreen;
let TankShooting;
let DeathScreen;
let title;

//Tank1 imgs
let tank1img;
let tank1imgright;
let tank1up00;
let tank1up01;
let tank1up02;
let tank1up03;
let tank1up04;
let tank1up05;
let tank1upright01;
let tank1upright02;
let tank1upright03;
let tank1upright04;
let tank1upright05;
let tank1upright06;
let tank1death = false;

//Tank2 imgs
let tank2img;
let tank2imgright;
let tank2up00;
let tank2up01;
let tank2up02;
let tank2up03;
let tank2up04;
let tank2up05;
let tank2upright01;
let tank2upright02;
let tank2upright03;
let tank2upright04;
let tank2upright05;
let tank2upright06;
let tank2death = false;
//Tank3 imgs
let tank3img;
let tank3imgright;
let tank3up00;
let tank3up01;
let tank3up02;
let tank3up03;
let tank3up04;
let tank3up05;
let tank3upright01;
let tank3upright02;
let tank3upright03;
let tank3upright04;
let tank3upright05;
let tank3upright06;
let tank3death = false;
//Tank4 imgs
let tank4img;
let tank4imgright;
let tank4up00;
let tank4up01;
let tank4up02;
let tank4up03;
let tank4up04;
let tank4up05;
let tank4upright01;
let tank4upright02;
let tank4upright03;
let tank4upright04;
let tank4upright05;
let tank4upright06;
let tank4death = false;
//Sound Effects
let tankfire;
let mainMenuMusic;
let TankDeath;
let TankExplosion;

//LeaderBoard
let player1wintally = 0;
let player2wintally = 0;
let player3wintally = 0;
let player4wintally = 0;
let LeaderBoardimg;

function preload() {
  //Play Scene Background
  Background1 = loadImage("node_modules/p5/lib/Skyscrapper.png");
  startScreen = loadImage("node_modules/p5/lib/StartScreen.png");
  TankShooting = loadImage("node_modules/p5/lib/TankShooting.png");
  DeathScreen = loadImage("node_modules/p5/lib/SkullCrossbone.png");
  title = loadImage("node_modules/p5/lib/Title.png");
  //Sound
  tankfire = loadSound("node_modules/p5/lib/Fire.wav");
  mainMenuMusic = loadSound("node_modules/p5/lib/Menumusic.mp3");
  TankDeath = loadSound("node_modules/p5/lib/TankDeath.wav");
  TankExplosion = loadSound("node_modules/p5/lib/explosion.mp3");
  //Tank 1 imgs
  tank1img = loadImage("node_modules/p5/lib/tank1.png");
  tank1imgright = loadImage("node_modules/p5/lib/tank1right.png");
  tank1up00 = loadImage("node_modules/p5/lib/tank1up00.png");
  tank1up01 = loadImage("node_modules/p5/lib/tank1up01.png");
  tank1up02 = loadImage("node_modules/p5/lib/tank1up02.png");
  tank1up03 = loadImage("node_modules/p5/lib/tank1up03.png");
  tank1up04 = loadImage("node_modules/p5/lib/tank1up04.png");
  tank1up05 = loadImage("node_modules/p5/lib/tank1up05.png");
  tank1upright01 = loadImage("node_modules/p5/lib/tank1upright01.png");
  tank1upright02 = loadImage("node_modules/p5/lib/tank1upright02.png");
  tank1upright03 = loadImage("node_modules/p5/lib/tank1upright03.png");
  tank1upright04 = loadImage("node_modules/p5/lib/tank1upright04.png");
  tank1upright05 = loadImage("node_modules/p5/lib/tank1upright05.png");
  tank1upright06 = loadImage("node_modules/p5/lib/Tank1upright06.png");
  //Tank 2 imgs
  tank2img = loadImage("node_modules/p5/lib/tank2.png");
  tank2imgright = loadImage("node_modules/p5/lib/tank2right.png");
  tank2up00 = loadImage("node_modules/p5/lib/tank2up00.png");
  tank2up01 = loadImage("node_modules/p5/lib/tank2up01.png");
  tank2up02 = loadImage("node_modules/p5/lib/tank2up02.png");
  tank2up03 = loadImage("node_modules/p5/lib/tank2up03.png");
  tank2up04 = loadImage("node_modules/p5/lib/tank2up04.png");
  tank2up05 = loadImage("node_modules/p5/lib/tank2up05.png");
  tank2upright01 = loadImage("node_modules/p5/lib/tank2upright01.png");
  tank2upright02 = loadImage("node_modules/p5/lib/tank2upright02.png");
  tank2upright03 = loadImage("node_modules/p5/lib/tank2upright03.png");
  tank2upright04 = loadImage("node_modules/p5/lib/tank2upright04.png");
  tank2upright05 = loadImage("node_modules/p5/lib/tank2upright05.png");
  tank2upright06 = loadImage("node_modules/p5/lib/Tank2upright06.png");
  //Tank 3 imgs
  tank3img = loadImage("node_modules/p5/lib/tank3.png");
  tank3imgright = loadImage("node_modules/p5/lib/tank3right.png");
  tank3up00 = loadImage("node_modules/p5/lib/tank3up00.png");
  tank3up01 = loadImage("node_modules/p5/lib/tank3up01.png");
  tank3up02 = loadImage("node_modules/p5/lib/tank3up02.png");
  tank3up03 = loadImage("node_modules/p5/lib/tank3up03.png");
  tank3up04 = loadImage("node_modules/p5/lib/tank3up04.png");
  tank3up05 = loadImage("node_modules/p5/lib/tank3up05.png");
  tank3upright01 = loadImage("node_modules/p5/lib/tank3upright01.png");
  tank3upright02 = loadImage("node_modules/p5/lib/tank3upright02.png");
  tank3upright03 = loadImage("node_modules/p5/lib/tank3upright03.png");
  tank3upright04 = loadImage("node_modules/p5/lib/tank3upright04.png");
  tank3upright05 = loadImage("node_modules/p5/lib/tank3upright05.png");
  tank3upright06 = loadImage("node_modules/p5/lib/Tank3upright06.png");
  //Tank 4 imgs
  tank4img = loadImage("node_modules/p5/lib/tank4.png");
  tank4imgright = loadImage("node_modules/p5/lib/tank4right.png");
  tank4up00 = loadImage("node_modules/p5/lib/tank4up00.png");
  tank4up01 = loadImage("node_modules/p5/lib/tank4up01.png");
  tank4up02 = loadImage("node_modules/p5/lib/tank4up02.png");
  tank4up03 = loadImage("node_modules/p5/lib/tank4up03.png");
  tank4up04 = loadImage("node_modules/p5/lib/tank4up04.png");
  tank4up05 = loadImage("node_modules/p5/lib/tank4up05.png");
  tank4upright01 = loadImage("node_modules/p5/lib/tank4upright01.png");
  tank4upright02 = loadImage("node_modules/p5/lib/tank4upright02.png");
  tank4upright03 = loadImage("node_modules/p5/lib/tank4upright03.png");
  tank4upright04 = loadImage("node_modules/p5/lib/tank4upright04.png");
  tank4upright05 = loadImage("node_modules/p5/lib/tank4upright05.png");
  tank4upright06 = loadImage("node_modules/p5/lib/Tank4upright06.png");
  //Game Start Video
  Vid = createVideo("node_modules/p5/lib/AirDrop.mp4");
  Vid.hide();
}

function setup() {
  createCanvas(1000, 1000);
  background(TankShooting);

  world.gravity.y = 10;

  //Random number gen
  ran1 = random(100, 1500);
  ran2 = random(100, 1500);
  ran3 = random(100, 1500);
  ran4 = random(100, 1500);
  ran5 = random(100, 1500);
  ran6 = random(100, 1500);

  continuebutton = createButton("Continue");
  continuebutton.position(460, 280);
  continuebutton.mouseClicked(continueb);
  continuebutton.hide();
}

function draw() {
  background(Background1);

  //Terrain & tank Collision FireGroup 1
  for (let i = 0; i < newterrainSegment1.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment1[i])) {
      fire1.remove();
      newterrainSegment1[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment2.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment2[i])) {
      fire1.remove();
      newterrainSegment2[i].y += 50;
    }
  }

  for (let i = 0; i < newterrainSegment3.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment3[i])) {
      fire1.remove();
      newterrainSegment3[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment4.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment4[i])) {
      fire1.remove();
      newterrainSegment4[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment5.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment5[i])) {
      fire1.remove();
      newterrainSegment5[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment6.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment6[i])) {
      fire1.remove();
      newterrainSegment6[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (firstFire1 == true && fire1.collides(newterrainSegment7[i])) {
      fire1.remove();
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (tank1.collides(newterrainSegment7[i])) {
      tank1.rotation = 0;
    }
  }
  //Fire 1 Tank Collision
  if (firstFire1 == true && fire1.collides(tank2)) {
    fire1.remove();
    tankhealth2 += -50;
    TankDeath.play();
  }
  if (firstFire1 == true && fire1.collides(tank3)) {
    fire1.remove();
    tankhealth3 += -50;
    TankDeath.play();
  }

  if (firstFire1 == true && fire1.collides(tank4)) {
    fire1.remove();
    tankhealth4 += -50;
    TankDeath.play();
  }

  //Tank health Destroyed
  if (tankhealth1 == 0) {
    tank1.remove();
    tank1death = true;
    if (tank1death == true) {
      TankExplosion.play();
      tank1death = false;
      tankhealth1 = -1;
    }
  }

  if (tankhealth2 == 0) {
    tank2.remove();
    tank2death = true;
    if (tank2death == true) {
      tank2death = false;
      TankExplosion.play();
      tankhealth2 = -1;
    }
  }

  if (tankhealth3 == 0) {
    tank3.remove();
    tank2death = true;
    if (tank2death == true) {
      TankExplosion.play();
      tank2death = false;
      tankhealth3 = -1;
    }
  }

  if (tankhealth4 == 0) {
    tank4.remove();
    tank4death = true;
    if (tank4death == true) {
      TankExplosion.play();
      tank4death = false;
      tankhealth4 = -1;
    }
  }

  //Win Requirments player1

  if (tankhealth2 == -1 && tankhealth3 == -1 && tankhealth4 == -1) {
    if (wintally == false) {
      alert("Player 1 Wins!");
      currentState = MainMenuScreen;
      player1wintally += 1;
      wintally = true;
      homebuttonclicked();
    }
  }
  //Win Requirments player2

  if (tankhealth1 == -1 && tankhealth3 == -1 && tankhealth2 == -1) {
    if (wintally == false) {
      alert("Player 2 Wins!");
      currentState = MainMenuScreen;
      player2wintally += 1;
      wintally = true;
      homebuttonclicked();
    }
  }
  //Win Requirments player3

  if (tankhealth1 == -1 && tankhealth2 == -1 && tankhealth4 == -1) {
    if (wintally == false) {
      alert("Player 3 Wins!");
      currentState = MainMenuScreen;
      player3wintally += 1;
      wintally = true;
      homebuttonclicked();
    }
  }
  //Win Requirments player4

  if (tankhealth1 == -1 && tankhealth2 == -1 && tankhealth3 == -1) {
    if (wintally == false) {
      alert("Player 4 Wins!");
      currentState = MainMenuScreen;
      player4wintally += 1;
      wintally = true;
      homebuttonclicked();
    }
  }
  //Terrain & tank Collision FireGroup 2
  for (let i = 0; i < newterrainSegment1.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment1[i])) {
      fire2.remove();
      newterrainSegment1[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment2.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment2[i])) {
      fire2.remove();
      newterrainSegment2[i].y += 50;
    }
  }

  for (let i = 0; i < newterrainSegment3.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment3[i])) {
      fire2.remove();
      newterrainSegment3[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment4.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment4[i])) {
      fire2.remove();
      newterrainSegment4[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment5.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment5[i])) {
      fire2.remove();
      newterrainSegment5[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment6.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment6[i])) {
      fire2.remove();
      newterrainSegment6[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (firstFire2 == true && fire2.collides(newterrainSegment7[i])) {
      fire2.remove();
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (tank4.collides(newterrainSegment7[i])) {
      tank4.rotation = 0;
    }
  }

  //Fire 2 Tank Collision
  if (firstFire2 == true && fire2.collides(tank2)) {
    fire2.remove();
    tankhealth2 += -50;
    TankDeath.play();
  }
  if (firstFire2 == true && fire2.collides(tank3)) {
    fire2.remove();
    tankhealth3 += -50;
    TankDeath.play();
  }

  if (firstFire2 == true && fire2.collides(tank1)) {
    fire2.remove();
    tankhealth1 += -50;
    TankDeath.play();
  }

  //Terrain & tank Collision FireGroup 3
  for (let i = 0; i < newterrainSegment1.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment1[i])) {
      fire3.remove();
      newterrainSegment1[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment2.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment2[i])) {
      fire3.remove();
      newterrainSegment2[i].y += 50;
    }
  }

  for (let i = 0; i < newterrainSegment3.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment3[i])) {
      fire3.remove();
      newterrainSegment3[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment4.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment4[i])) {
      fire3.remove();
      newterrainSegment4[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment5.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment5[i])) {
      fire3.remove();
      newterrainSegment5[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment6.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment6[i])) {
      fire3.remove();
      newterrainSegment6[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (firstFire3 == true && fire3.collides(newterrainSegment7[i])) {
      fire3.remove();
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (tank3.collides(newterrainSegment7[i])) {
      tank3.rotation = 0;
    }
  }

  //Fire 3 Tank Collision
  if (firstFire3 == true && fire3.collides(tank4)) {
    fire3.remove();
    tankhealth4 += -50;
    TankDeath.play();
  }
  if (firstFire3 == true && fire3.collides(tank2)) {
    fire3.remove();
    tankhealth2 += -50;
    TankDeath.play();
  }

  if (firstFire3 == true && fire3.collides(tank1)) {
    fire3.remove();
    tankhealth1 += -50;
    TankDeath.play();
  }
  //FireGroup4
  //Terrain & tank Collision FireGroup 4
  for (let i = 0; i < newterrainSegment1.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment1[i])) {
      fire4.remove();
      newterrainSegment1[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment2.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment2[i])) {
      fire4.remove();
      newterrainSegment2[i].y += 50;
    }
  }

  for (let i = 0; i < newterrainSegment3.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment3[i])) {
      fire4.remove();
      newterrainSegment3[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment4.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment4[i])) {
      fire4.remove();
      newterrainSegment4[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment5.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment5[i])) {
      fire4.remove();
      newterrainSegment5[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment6.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment6[i])) {
      fire4.remove();
      newterrainSegment6[i].y += 50;
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (firstFire4 == true && fire4.collides(newterrainSegment7[i])) {
      fire4.remove();
    }
  }
  for (let i = 0; i < newterrainSegment7.length; i++) {
    if (tank2.collides(newterrainSegment7[i])) {
      tank2.rotation = 0;
    }
  }

  //Fire 3 Tank Collision
  if (firstFire4 == true && fire4.collides(tank4)) {
    fire4.remove();
    tankhealth4 += -50;
    TankDeath.play();
  }
  if (firstFire4 == true && fire4.collides(tank3)) {
    fire4.remove();
    tankhealth3 += -50;
    TankDeath.play();
  }

  if (firstFire4 == true && fire4.collides(tank1)) {
    fire4.remove();
    tankhealth1 += -50;
    TankDeath.play();
  }

  //Frame States

  if (currentState == Loading) {
    LoadingScreen();
  }
  if (currentState == MainMenuScreen) {
    MainMenu();
    menubardrawn = false;
  }
  if (currentState == Play && isgameready == false) {
    drawgame();
    gameScene();
    gameplayed = true;
    isgameready = true;
  }
  if (currentState == gameloadingscene) {
    gameloading();
  }
  if (currentState == LeaderBoard) {
    LeaderBoardScreen();
  }
  if (frameCount == 90) {
    continuebutton.show();
  }

  if (
    frameCount >= 365 &&
    continuebuttonclicked == true &&
    playbuttonclicked1 == true
  ) {
    currentState = Play;
    startbuttoniscreated = false;
  }
  //Menu Bar draw & Button & Logic
  if (currentState == Play && menubardrawn == false) {
    menubar = new Sprite(500, 10, 1000, 35);
    menubar.collider = "none";
    menubardrawn = true;
    menubar.colour = "Grey";
    Vid.noLoop();
  }

  if (currentState == gameloadingscene && startbuttonhid == false) {
    buttonStart.remove();
    //buttonLeaderBoard.remove();
    startbuttonhid = true;
    Vid.loop();
  }

  if (currentState == MainMenuScreen && startbuttoniscreated == false) {
    buttonStart = createButton("Start");
    buttonStart.position(480, 430);
    buttonStart.size(100);
    buttonStart.mouseClicked(playbuttonclicked);

    if (gameplayed == true) {
      buttonLeaderBoard = createButton("Leaderboard");
      buttonLeaderBoard.position(480, 470);
      buttonLeaderBoard.size(100);
      buttonLeaderBoard.mouseClicked(LeaderBoardbutton);
    }

    startbuttoniscreated = true;
  }

  //Tank 3 Ai Fire
  if (firstFire1 == true && tankhealth3 > 0) {
    if (millis() >= 4000 + timer) {
      Fire3();
      firstFire3 = true;
      timer = millis();
    }
  }

  //Tank 2 Ai Fire
  if (firstFire1 == true && tankhealth2 > 0) {
    if (millis() >= 4000 + timer2) {
      Fire4();
      firstFire4 = true;
      timer2 = millis();
    }
  }

  //Tank controls function call

  Tankcontols1();
  Tankcontols4();
}

function gameloading() {
  background("Grey");

  image(Vid, 0, 0, 1000, 1000);

  textSize(80);
  fill("red");
  text("Get Ready To Battle!", 130, 900);
}

function drawgame() {
  background(Background1);

  //Generation For towers
  for (let i = 0; i < random(20, 300); i += 5) {
    terrainSegment1 = new Sprite(5 + i, 950, 5, ran1);
    terrainSegment1.colour = "purple";
    terrainSegment1.collider = "static";
    newterrainSegment1.push(terrainSegment1);
  }

  for (let i = 0; i < random(30, 120); i += 5) {
    terrainSegment2 = new Sprite(600 + i, 950, 5, ran2);
    terrainSegment2.colour = "black";
    terrainSegment2.collider = "static";
    newterrainSegment2.push(terrainSegment2);
  }

  for (let i = 0; i < random(30, 300); i += 5) {
    terrainSegment3 = new Sprite(400 + i, 950, 5, ran3);
    terrainSegment3.colour = "blue";
    terrainSegment3.collider = "static";
    newterrainSegment3.push(terrainSegment3);
  }

  for (let i = 0; i < random(20, 300); i += 5) {
    terrainSegment4 = new Sprite(200 + i, 950, 5, ran4);
    terrainSegment4.colour = "orange";
    terrainSegment4.collider = "static";
    newterrainSegment4.push(terrainSegment4);
  }

  for (let i = 0; i < random(10, 400); i += 5) {
    terrainSegment5 = new Sprite(800 + i, 950, 5, ran5);
    terrainSegment5.colour = "Green";
    terrainSegment5.collider = "static";
    newterrainSegment5.push(terrainSegment5);
  }

  for (let i = 0; i < random(10, 400); i += 5) {
    terrainSegment6 = new Sprite(950 + i, 950, 5, ran6);
    terrainSegment6.colour = "Green";
    terrainSegment6.collider = "static";
    newterrainSegment6.push(terrainSegment6);
  }

  for (let i = 0; i < 1000; i += 5) {
    terrainSegment7 = new Group();
    terrainSegment7 = new Sprite(1 + i, 1000, 5, 10);
    terrainSegment7.colour = "Grey";
    terrainSegment7.collider = "static";
    newterrainSegment7.push(terrainSegment7);
  }

  //Sliders and Home button creation
  homebutton = createButton("Home");
  homebutton.position(20, 5);
  homebutton.size(80, 20);
  homebutton.mouseClicked(homebuttonclicked);

  //Slider 1
  shotpower1 = createSlider(1, 16, 10, 1);
  shotpower1.position(240, 5);
  shotpower1.size(80, 20);

  let text1 = new Sprite(170, 20, 5, 5);
  text1.text = "Shot Power: P1";
  text1.textSize = 15;
  text1.collider = "none";

  let text3 = new Sprite(440, 20, 5, 5);
  text3.text = "(Aim Up/Down):W,S (Move):A,D (Shoot):Space";
  text3.textSize = 10;
  text3.colour = "grey";
  text3.collider = "none";

  //Slider 2
  shotpower2 = createSlider(1, 16, 10, 1);
  shotpower2.position(690, 5);
  shotpower2.size(80, 20);

  let text2 = new Sprite(630, 20, 5, 5);
  text2.text = "Shot Power: P2";
  text2.textSize = 15;
  text2.collider = "none";

  let text4 = new Sprite(880, 20, 5, 5);
  text4.text = "(Aim Up/Down):8,5 (Move):4,6 (Shoot):Ctrl";
  text4.textSize = 10;
  text4.colour = "grey";
  text4.collider = "none";
}

function LoadingScreen() {
  background(TankShooting);
  textSize(32);
  fill("white");
  text("Loading...", 250, 250);
  text("Please Wait", 250, 300);
}

function MainMenu() {
  background(startScreen);
  textSize(50);
  fill("red");
  titleS = new Sprite(520, 320, 300, 100);
  titleS.img = title;
  titleS.collider = "none";
  mainMenuMusic.loop();
  noLoop();
}

function gameScene() {
  background(Background1);
  textSize(100);
  fill("red");

  //Tank Creation
  Tanks = new Group();
  tank1 = new Sprite(215, 800 - ran4, 50, 50);
  tank1.colour = "purple";
  tank1.img = tank1img;
  tank2 = new Sprite(25, 800 - ran1, 50, 50);
  tank2.colour = "black";
  tank2.img = tank2img;
  tank3 = new Sprite(815, 800 - ran5, 50, 50);
  tank3.colour = "blue";
  tank3.img = tank3img;
  tank4 = new Sprite(630, 800 - ran2, 50, 50);
  tank4.colour = "green";
  tank4.img = tank4img;
  loop();
}

function LeaderBoardScreen() {
  background("red");
  fill("white");
  text("Total Wins: ", 400, 300);
  text("Player 1: " + player1wintally, 400, 400);
  text("Player 2: " + player2wintally, 400, 500);
  text("Player 3: " + player3wintally, 400, 600);
  text("Player 4: " + player4wintally, 400, 700);
  buttonStart.hide();
  buttonLeaderBoard.hide();
  if (currentState == LeaderBoard) {
    frameCount = 100;
  }
  //loop();
}

function LeaderBoardbutton() {
  currentState = LeaderBoard;

  titleS.remove();
  mainMenuMusic.stop();
  loop();
}

function continueb() {
  currentState = MainMenuScreen;
  continuebuttonclicked = true;
  continuebutton.hide();
}

function homebuttonclicked() {
  console.log("clicked");
  currentState = MainMenuScreen;
  frameCount = 95;

  allSprites.remove();
  shotpower1.remove();
  shotpower2.remove();
  buttonStart.show();
  //buttonLeaderBoard.show();
  isgameready = false;
  startbuttonhid = false;
  firstFire1 = false;
  buttonLeaderBoardshown = true;
}

function playbuttonclicked() {
  currentState = gameloadingscene; // Change state to Play when the button is clicked
  // Start the draw loop
  mainMenuMusic.stop();
  frameCount = 90;
  tankhealth1 = 100;
  tankhealth2 = 100;
  tankhealth3 = 100;
  tankhealth4 = 100;
  titleS.remove();
  if (buttonLeaderBoardshown == true) {
    buttonLeaderBoard.hide();
    buttonLeaderBoardshown = false;
  }
  wintally = false;
  playbuttonclicked1 = true;
  loop();
}

function Tankcontols1() {
  if (kb.pressing("a")) {
    tank1.vel.x = -0.4;
  } else if (kb.pressing("d")) {
    tank1.vel.x = 0.4;
  }
  if (kb.pressed("space") && firstFire1 == false) {
    Fire1();
    firstFire1 = true;
    timesincelastfire1 = frameCount;
  }
  if (kb.pressed("space") && timesincelastfire1 <= frameCount - 200) {
    Fire1();
  } else if (kb.pressing("w")) {
    fire1direction += 0.5;
  } else if (kb.pressing("s")) {
    fire1direction += -0.5;
  }
  //Left Tank img

  if (fire1direction >= -169 && fire1direction <= -165) {
    tank1.img = tank1img;
  }

  if (fire1direction >= -165 && fire1direction <= -155) {
    tank1.img = tank1up00;
  }

  if (fire1direction >= -155 && fire1direction <= -135) {
    tank1.img = tank1up01;
  }
  if (fire1direction >= -135 && fire1direction <= -115) {
    tank1.img = tank1up03;
  }

  if (fire1direction >= -115 && fire1direction <= -95) {
    tank1.img = tank1up04;
  }

  if (fire1direction <= -170) {
    fire1direction = -170;
  }

  if (fire1direction >= 0) {
    fire1direction = 0;
  }
  //right Tank img
  if (fire1direction <= -10 && fire1direction >= -25) {
    tank1.img = tank1upright01;
  }

  if (fire1direction <= -25 && fire1direction >= -45) {
    tank1.img = tank1upright02;
  }
  if (fire1direction <= -45 && fire1direction >= -65) {
    tank1.img = tank1upright03;
  }

  if (fire1direction <= -65 && fire1direction >= -85) {
    tank1.img = tank1upright04;
  }

  if (fire1direction <= -85 && fire1direction >= -89) {
    tank1.img = tank1upright05;
  }

  if (fire1direction >= -89 && fire1direction <= -90) {
    tank1.img = tank1upright06;
  }

  if (fire1direction <= -1 && fire1direction >= -10) {
    tank1.img = tank1imgright;
  }
}

//tank 1
function Fire1() {
  fire1 = new Group();
  fire1 = new Sprite(tank1.position.x, tank1.position.y - 10, 2, 2);
  fire1.collider = "dynamic";
  fire1.vel.y = shotpower1.value();
  //fire1.speed.y = -2;
  fire1.direction = fire1direction;
  timesincelastfire1 = frameCount;
  tankfire.play();
}

//Tank 2
function Fire4() {
  fire4 = new Sprite(tank2.position.x, tank2.position.y - 10, 2, 2);
  tankfire.play();
  fire4.collider = "dynamic";
  fire4.vel.y = random(-10, -4);
  //fire2.speed.y = 4;
  fire4.direction = random(-100, -10);
  //timesincelastfire4 = frameCount;
  //Left Tank img

  if (fire4.direction >= -169 && fire4.direction <= -165) {
    tank2.img = tank2img;
  }

  if (fire4.direction >= -165 && fire4.direction <= -155) {
    tank2.img = tank2up00;
  }

  if (fire4.direction >= -155 && fire4.direction <= -135) {
    tank2.img = tank2up01;
  }
  if (fire4.direction >= -135 && fire4.direction <= -115) {
    tank2.img = tank2up03;
  }

  if (fire4.direction >= -115 && fire4.direction <= -95) {
    tank2.img = tank2up04;
  }

  if (fire4.direction <= -170) {
    fire4direction = -170;
  }

  if (fire4.direction >= 0) {
    fire4direction = 0;
  }
  //right Tank img
  if (fire4.direction <= -10 && fire4.direction >= -25) {
    tank2.img = tank2upright01;
  }

  if (fire4.direction <= -25 && fire4.direction >= -45) {
    tank2.img = tank2upright02;
  }
  if (fire4.direction <= -45 && fire4.direction >= -65) {
    tank2.img = tank2upright03;
  }

  if (fire4.direction <= -65 && fire4.direction >= -85) {
    tank2.img = tank2upright04;
  }

  if (fire4.direction <= -85 && fire4.direction >= -89) {
    tank2.img = tank2upright05;
  }

  if (fire4.direction >= -89 && fire4.direction <= -90) {
    tank2.img = tank2upright06;
  }

  if (fire4.direction <= -1 && fire4.direction >= -10) {
    tank2.img = tank2imgright;
  }
}

//Tank 4 Player 2
function Fire2() {
  fire2 = new Sprite(tank4.position.x, tank4.position.y - 10, 2, 2);
  tankfire.play();
  fire2.collider = "dynamic";
  fire2.vel.y = shotpower2.value();
  //fire2.speed.y = 4;
  fire2.direction = fire2direction;
  timesincelastfire2 = frameCount;
}

//Tank 3
function Fire3() {
  fire3 = new Sprite(tank3.position.x, tank3.position.y - 10, 2, 2);
  tankfire.play();
  fire3.collider = "dynamic";
  fire3.vel.y = random(-10, -4);
  //fire2.speed.y = 4;
  fire3.direction = random(-170, -70);
  //timesincelastfire3 = frameCount;
  //Left Tank img

  if (fire3.direction >= -169 && fire3.direction <= -165) {
    tank3.img = tank3img;
  }

  if (fire3.direction >= -165 && fire3.direction <= -155) {
    tank3.img = tank3up00;
  }

  if (fire3.direction >= -155 && fire3.direction <= -135) {
    tank3.img = tank3up01;
  }
  if (fire3.direction >= -135 && fire3.direction <= -115) {
    tank3.img = tank3up03;
  }

  if (fire3.direction >= -115 && fire3.direction <= -95) {
    tank3.img = tank3up04;
  }

  if (fire3.direction <= -170) {
    fire3direction = -170;
  }

  if (fire3.direction >= 0) {
    fire3direction = 0;
  }
  //right Tank img
  if (fire3.direction <= -10 && fire3.direction >= -25) {
    tank3.img = tank3upright01;
  }

  if (fire3.direction <= -25 && fire3.direction >= -45) {
    tank3.img = tank3upright02;
  }
  if (fire3.direction <= -45 && fire3.direction >= -65) {
    tank3.img = tank3upright03;
  }

  if (fire3.direction <= -65 && fire3.direction >= -85) {
    tank3.img = tank3upright04;
  }

  if (fire3.direction <= -85 && fire3.direction >= -89) {
    tank3.img = tank3upright05;
  }

  if (fire3.direction >= -89 && fire3.direction <= -90) {
    tank3.img = tank3upright06;
  }

  if (fire3.direction <= -1 && fire3.direction >= -10) {
    tank3.img = tank3imgright;
  }
}

function Tankcontols4() {
  if (kb.pressing("4")) {
    tank4.vel.x = -0.4;
  } else if (kb.pressing("6")) {
    tank4.vel.x = 0.4;
  }
  if (kb.pressed("ctrl") && firstFire2 == false) {
    Fire2();
    firstFire2 = true;
    timesincelastfire2 = frameCount;
  }
  if (kb.pressed("ctrl") && timesincelastfire2 <= frameCount - 200) {
    Fire2();
  } else if (kb.pressing("8")) {
    fire2direction += 0.5;
  } else if (kb.pressing("5")) {
    fire2direction += -0.5;
  }

  //Left Tank img

  if (fire2direction >= -169 && fire2direction <= -165) {
    tank4.img = tank4img;
  }

  if (fire2direction >= -165 && fire2direction <= -155) {
    tank4.img = tank4up00;
  }

  if (fire2direction >= -155 && fire2direction <= -135) {
    tank4.img = tank4up01;
  }
  if (fire2direction >= -135 && fire2direction <= -115) {
    tank4.img = tank4up03;
  }

  if (fire2direction >= -115 && fire2direction <= -95) {
    tank4.img = tank4up04;
  }

  if (fire2direction <= -170) {
    fire2direction = -170;
  }

  if (fire2direction >= 0) {
    fire2direction = 0;
  }
  //right Tank img
  if (fire2direction <= -10 && fire2direction >= -25) {
    tank4.img = tank4upright01;
  }

  if (fire2direction <= -25 && fire2direction >= -45) {
    tank4.img = tank4upright02;
  }
  if (fire2direction <= -45 && fire2direction >= -65) {
    tank4.img = tank4upright03;
  }

  if (fire2direction <= -65 && fire2direction >= -85) {
    tank4.img = tank4upright04;
  }

  if (fire2direction <= -85 && fire2direction >= -89) {
    tank4.img = tank4upright05;
  }

  if (fire2direction >= -89 && fire2direction <= -90) {
    tank4.img = tank4upright06;
  }

  if (fire2direction <= -1 && fire2direction >= -10) {
    tank4.img = tank4imgright;
  }
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground ,tee,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone();
	mango1=new Mango();
	mango2=new Mango();
	mango3=new Mango();
	mango4=new Mango();
	mango5=new Mango();
	mango6=new Mango();
	mango7=new Mango();
	mango8=new Mango();
	mango9=new Mango();
	mango10=new Mango();

	attach=new Throw(stones.body,{x:100,y:465});
	
	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mousex,y:mouseY});
}

function mouseReleashed(){
	attach.fly();

}
function detectCollision(lstones,lmango){
   
   if(lstones.body.position.x-lmango.body.position.x<lmango.diameter+ lstones.diameter
	&& lmango.body.positio.x - lstones.body.postion.x < lmango.diameter+ lstones.diameter
	&&lstones.body.position.y-lmango.body.position.y<lmango.diameter+ lstones.diameter
	&& lmango.body.positio.y - lstones.body.postion.y < lmango.diameter+ lstones.diameter)
	Matter.body.setStatic(lmango.body,false);
   
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attac.Launch(stones.body);
	}
}
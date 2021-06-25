var n1, n2;

function setup(){
  createCanvas(400,400)
  num1=createInput()
  num1.position(5,60)
  
  num2=createInput()
  num2.position(200,60)

  //button cre=ations

  b1=createButton("Add")
  b1.position(10,200)
  b1.mousePressed(add)

  b2=createButton("Multiply")
  b2.position(100,200)
  b2.mousePressed(mul)

  b3=createButton("Subtract")
  b3.position(200,200)
  b3.mousePressed(sub)

  b4=createButton("Divide")
  b4.position(300,200)
  b4.mousePressed(division)

  textAlign(CENTER)
  textSize(15)
}

function draw(){

  background("white")

  text("num 1", 70,50)
  text("num 2", 270,50)
  n1=parseInt(num1.value())

  n2=parseInt(num2.value())
}

//function-
function add(){
  console.log(n1+n2)
}

function mul(){
  console.log(n1*n2)
}

function sub(){
  console.log(n1-n2)
}

function division(){
  console.log(n1/n2)
}
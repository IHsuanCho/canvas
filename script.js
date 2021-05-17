var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d')

canvas.width= 400
canvas.height= 400

var mouse = {
  x: 200,
  y: 200
}

canvas.addEventListener("mousemove",function(evt) 
{
  mouse.x = evt.offsetX
  mouse.y = evt.offsetY
})

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  //座標繪製
   ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每50格畫一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)//
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸起點
    ctx.fillText(pos,10,pos)   
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()

  /*基座_下*/
  ctx.beginPath()
  ctx.moveTo(50,300)
  ctx.lineTo(350,300)
  ctx.lineTo(350,350)
  ctx.lineTo(50,350)
  ctx.closePath()
  ctx.fillStyle="#4F9D9D"
  ctx.fill()
  
  /*基座_上*/
  ctx.beginPath()
  ctx.moveTo(50,280)
  ctx.lineTo(350,280)
  ctx.lineTo(350,300)
  ctx.lineTo(50,300)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  /*七根柱子*/
  ctx.beginPath()
  ctx.moveTo(50,200)
  ctx.lineTo(60,200)
  ctx.lineTo(60,280)
  ctx.lineTo(50,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(95,200)
  ctx.lineTo(105,200)
  ctx.lineTo(105,280)
  ctx.lineTo(95,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(145,200)
  ctx.lineTo(155,200)
  ctx.lineTo(155,280)
  ctx.lineTo(145,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(195,200)
  ctx.lineTo(205,200)
  ctx.lineTo(205,280)
  ctx.lineTo(195,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(245,200)
  ctx.lineTo(255,200)
  ctx.lineTo(255,280)
  ctx.lineTo(245,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(295,200)
  ctx.lineTo(305,200)
  ctx.lineTo(305,280)
  ctx.lineTo(295,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(340,200)
  ctx.lineTo(350,200)
  ctx.lineTo(350,280)
  ctx.lineTo(340,280)
  ctx.closePath()
  ctx.fillStyle="#3D7878"
  ctx.fill()
  
 
 /*中間座*/
  ctx.beginPath()
  ctx.moveTo(45,190)
  ctx.lineTo(355,190)
  ctx.lineTo(355,230)
  ctx.lineTo(45,230)
  ctx.closePath()
  ctx.fillStyle="#336666"
  ctx.fill() 
  
  /*半圓*/
  ctx.arc(200,200,100,Math.PI*2,Math.PI,true)
  ctx.fillStyle="#336666"
  ctx.fill() 
  
  /*圓上梁*/
  ctx.beginPath()
  ctx.moveTo(170,80)
  ctx.lineTo(180,80)
  ctx.lineTo(180,130)
  ctx.lineTo(170,130)
  ctx.closePath()
  ctx.fillStyle="#336666"
  ctx.fill() 
  
  ctx.beginPath()
  ctx.moveTo(230,80)
  ctx.lineTo(220,80)
  ctx.lineTo(220,130)
  ctx.lineTo(230,130)
  ctx.closePath()
  ctx.fillStyle="#336666"
  ctx.fill() 
  
  /*圓上豎*/
  ctx.beginPath()
  ctx.moveTo(170,70)
  ctx.lineTo(230,70)
  ctx.lineTo(230,80)
  ctx.lineTo(170,80)
  ctx.closePath()
  ctx.fillStyle="#336666"
  ctx.fill()
  
 /*旗桿*/
  ctx.beginPath()
  ctx.moveTo(200,20)
  ctx.lineTo(200,70)
  ctx.lineWidth = 1.5
  ctx.strokeStyle ="black"
  ctx.stroke()
  
/*旗面*/
  ctx.beginPath()
  ctx.moveTo(201,20)
  ctx.lineTo(250,20 -(time%10))
  ctx.lineTo(250,50 -(time%6))
  ctx.lineTo(201,50)
  ctx.closePath()
  ctx.fillStyle="#C4E1E1"
  ctx.fill()
  
 /*車子*/
  ctx.fillStyle="#D6D6AD"
  let carx = time%440-40
  ctx.fillRect(carx,330,40,25)
  ctx.strokeRect(carx,330,40,25)

  ctx.beginPath()
  ctx.arc(carx+10,355,6,0,Math.PI*2)
  ctx.arc(carx+30,355,6,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill() 
 
/*確認滑鼠事件有抓取到*/
  ctx.beginPath()
  ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}
//draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;


        function drawBall() {
            //drawing code
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
            
        }
            
            

        

        function draw() {
            ctx.clearRect(0, 0, canvas.width ,canvas.height);
            drawBall();
            x += dx;
            y += dy;
            
            if(x+dx>canvas.width-ballRadius || x+dx<ballRadius)
            {
              dx=-dx
            }
            
            if(y+dy >canvas.height-ballRadius ||y+dy < ballRadius)
            {
              dy=-dy;
            }
            }
        
        setInterval(draw, 10);
        /* 
        Example canvas/javascript code. Draws a square, cirdle, and arc.
         const canvas = document.getElementById("myCanvas");
         const ctx = canvas.getContext("2d");

         ctx.beginPath();
         ctx.rect(20, 40, 50, 50);
         ctx.fillStyle = "#FF0000";
         ctx.fill();
         ctx.closePath();

         ctx.beginPath();
         ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
         ctx.fillStyle = "green";
         ctx.fill();
         ctx.closePath();

         ctx.beginPath();
         ctx.rect(160, 10, 100, 40);
         ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
         ctx.stroke();
         ctx.closePath();*/
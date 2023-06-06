canvas= document.getElementById("myCanvas") 
ctx= canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 4;
ctx.arc(208, 265, 50 ,0 ,2 * Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 4;
ctx.arc(150, 200, 50 ,0 ,2 * Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 4;
ctx.arc(265, 200, 50 ,0 ,2 * Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 4;
ctx.arc(318, 265, 50 ,0 ,2 * Math.PI);
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 4;
ctx.arc(380, 200, 50 ,0 ,2 * Math.PI);
ctx.stroke()

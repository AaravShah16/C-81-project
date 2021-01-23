canvas = document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();



ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(290, 200, 40, 0, 2*Math.PI);
ctx.stroke();



ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(380, 200, 40, 0, 2*Math.PI);
ctx.stroke();



ctx=canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(245, 250, 40, 0, 2*Math.PI);
ctx.stroke();


ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(340, 250, 40, 0, 2*Math.PI);
ctx.stroke();
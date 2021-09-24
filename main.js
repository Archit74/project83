width_mobile=screen.width;
var last_position_of_x,last_position_of_y;
cavas=document.getElementById("myCanvas");
ctx=cavas.getContext("2d");
colour="black";
width="1";
new_width_mobile=width_mobile-30;
new_height_mobile=screen.heigth-300;
if(width_mobile<992){
document.getElementById("myCanvas").width=new_width_mobile;
document.getElementById("myCanvas").height=new_height_mobile;
document.body.style.overflow = "hidden";
}
cavas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e){
    console.log("my_touchstart");
    colour =document.getElementById("input_colour").value;
    width = document.getElementById("input_width").value;
last_position_of_x = e.touches[0].clientX - cavas.offsetLeft;
last_position_of_y = e.touches[0].clientY - cavas.offsetTop;
}
cavas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e){

    current_position_of_touch_x = e.touches[0].clientX - cavas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - cavas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;
}
function clear_Area() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
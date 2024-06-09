let dux_click = document.getElementById('dux');
let red_click = document.getElementById('red');
let grey_click = document.getElementById('grey');
let bike = document.getElementById('gt');

dux_click.onclick = function(){
    bike.style.backgroundImage = "url(gt1.png)";
}

red_click.onclick = function(){
    bike.style.backgroundImage = "url(gt2.png)";
}

grey_click.onclick = function(){
    bike.style.backgroundImage = "url(gt3.png)";
}
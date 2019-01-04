/*
* @Author: lenovo
* @Date:   2018-12-12 21:29:26
* @Last Modified by:   lenovo
* @Last Modified time: 2018-12-27 21:06:11
*/
// 顶部悬浮
window.onload=function(){
	var div_1=document.getElementsByClassName("div-1")[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			div_1.style.position='fixed'
		}else{
			div_1.style.position='static'
		}
	}
}
//话费充值
var huafei=document.getElementById("huafei");
for(var i=10;i<=100;i++){
	var aa=document.createElement("option");
	aa.innerHTML=i;
	i=i+9;
	aa.className="bb";
	huafei.appendChild(aa);
}
var jine=document.getElementById("jine");
jine.innerHTML="10";
huafei.onchange=function(){
	jine.innerHTML=huafei.value;
}
//轮播图
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var box = document.getElementById('js_lunbo');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var index = 1;
var timer = setInterval(next, 3000);
var isMoving = false;
box.onmouseover = function(){
	clearInterval(timer);
}
box.onmouseout = function(){
	timer = setInterval(next, 3000);
}
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-6400px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}

//快讯
var div5_ul=document.getElementById("div5-ul");
function a(){
		var top=parseInt(getStyle(div5_ul,"top"));
		if(top==-380){
			top=-16;
			div5_ul.style.top=top+"px";
		}
		top--;
		div5_ul.style.top=top+"px";
	}
var time=setInterval(a,30);
div5_ul.onmouseout=function(){
	 time=setInterval(a, 30);
}
div5_ul.onmouseover=function(){
	clearInterval(time);
}         

//边部悬浮
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var div3=document.getElementById("div3");
var div4=document.getElementById("div4");
function show1(){
	var w=45;
	var a=setInterval(function(){
	var	v=parseInt(div1.style.width);
	if(v<100){
		w+=5;
		div1.style.width=w+"px";
	}
	else{
		div1.style.width="100px"
		clearInterval(a);
	}},10);
}
function unshow1(){
	var w=100;
	var a=setInterval(function(){
	var	v=parseInt(div1.style.width);
	if(v>45){
		w-=5;
		div1.style.width=w+"px";
	}
	else{
		div1.style.width="45px";
		clearInterval(a);
	}},10);
}
function show2(){
	var w=45;
	var a=setInterval(function(){
	var	v=parseInt(div2.style.width);
	if(v<100){
		w+=5;
		div2.style.width=w+"px";
	}
	else{
		div2.style.width="100px"
		clearInterval(a);
	}},10);
}
function unshow2(){
	var w=100;
	var a=setInterval(function(){
	var	v=parseInt(div2.style.width);
	if(v>45){
		w-=5;
		div2.style.width=w+"px";
	}
	else{
		div2.style.width="45px";
		clearInterval(a);
	}},10);
}
function show3(){
	var w=45;
	var a=setInterval(function(){
	var	v=parseInt(div3.style.width);
	if(v<100){
		w+=5;
		div3.style.width=w+"px";
		div3.innerHTML='<img src="任务所需小图/img/app.png" alt=""><img src="任务所需小图/img/erwei.png" alt="" style="margin-left:5px">';
	}
	else{
		div3.style.width="100px"
		clearInterval(a);
	}},10);	
}
function unshow3(){
	var w=100;
	var a=setInterval(function(){
	var	v=parseInt(div3.style.width);
	if(v>45){
		w-=5;
		div3.style.width=w+"px";
	}
	else{
		div3.style.width="45px";
		div3.innerHTML='<img src="任务所需小图/img/app.png" alt=""><img src="任务所需小图/img/serwei.png" style="margin-left: 10px;margin-top: 40px;" alt="">';
		clearInterval(a);
		}},10);	
}
function show4(){
	var w=45;
	var a=setInterval(function(){
	var	v=parseInt(div4.style.width);
	if(v<100){
		w+=5;
		div4.style.width=w+"px";
	}
	else{
		div4.style.width="100px"
		clearInterval(a);
	}},10);
}
function unshow4(){
	var w=100;
	var a=setInterval(function(){
	var	v=parseInt(div4.style.width);
	if(v>45){
		w-=5;
		div4.style.width=w+"px";
	}
	else{
		div4.style.width="45px";
		clearInterval(a);
	}},10);
}         

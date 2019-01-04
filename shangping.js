/*
* @Author: lenovo
* @Date:   2018-12-24 11:02:48
* @Last Modified by:   Fanningyuan
* @Last Modified time: 2019-01-04 11:07:49
*/
//净含量
var js1=document.getElementById("js_1");
var js2=document.getElementById('js_2');
var js3=document.getElementById('js3');
js1.onclick=function(){
	js1.style.border='1px solid red';
	js1.style.background='url(任务所需小图/img/duigou.png)no-repeat right bottom';
	js2.style='none';
	js3.innerHTML='150ml';
}
js2.onclick=function(){
	js2.style.border='1px solid red';
	js2.style.background='url(任务所需小图/img/duigou.png)no-repeat right bottom';
	js1.style='none';
	js3.innerHTML='200ml';
}

//放大镜
var js4=document.getElementById('js4');
var js5=document.getElementById('js5');
var js6=document.getElementById('js6');
var js7=document.getElementById('js7');
var js8=document.getElementById('js8');
var slider = document.getElementById("slider");
var box = document.getElementById('box'); 
var js_bigimg=document.getElementById('js_bigimg');
var Bimg=document.getElementById("Bimg");
js6.onmouseover=function(){
	js6.style.border='1px solid red';
	js7.style.border='none';
	js4.children[0].src ='任务所需小图/img/pp0.jpeg';
	js_bigimg.children[0].src='任务所需小图/img/pp0.jpeg';
}
js7.onmouseover=function(){
	js7.style.border='1px solid red';
	js6.style.border='none';
	js4.children[0].src ='任务所需小图/img/pp1.jpeg';
	js_bigimg.children[0].src='任务所需小图/img/pp1.jpeg';
}
    js4.onmousemove=function(ev){
		var ev=ev||event;
		  
		var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
		  
		var oMaxw=js4.offsetWidth-slider.offsetWidth;
		var oMaxh=js4.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = js_bigimg.offsetWidth - Bimg.offsetWidth; 
		var oBmaxh = js_bigimg.offsetHeight - Bimg.offsetHeight; 
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
js4.onmouseover=function(){
	slider.style.display="block";
	js_bigimg.style.display="block";
}
js4.onmouseout=function(){
	slider.style.display="none";
	js_bigimg.style.display="none";
}

//数量
var jia=document.getElementById('jia');
var jian=document.getElementById('jian');
var num1=document.getElementById('num_input');
var num=parseInt(num1.value);
num1.onchange=function(){
	if(num>5){
		input.value=5;
		input.innerHTML="5";
	}
}
jian.onclick=function(){
	jia.style.cursor="pointer";
	if(num<1){
		jian.style.cursor="not-allowed";
	}else{
		num--;
		num1.value=num;
		num1.innerHTML=num;
	}
}
jia.onclick=function(){
	jian.style.cursor="pointer";
	if(num>=5){
		jia.style.cursor="not-allowed";
	}else{
		num++;
		num1.value=num;
		num1.innerHTML=num;
		jia.style.cursor="pointer";
	}
}

//罩盖
var jiaru=document.getElementById("jiaru");
var jiaru1=document.getElementById("jiaru1");
jiaru.onclick=function(){
	jiaru1.style.display="block";
}
function jiaruxiaoshi(){
	jiaru1.style.display="none";
}
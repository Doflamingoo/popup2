function show(popupdiv){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//scrollTop兼容
    var scrollLeft = document.documentElement.scrollLeft ||window.pageXOffset|| document.body.scrollLeft;//scrollLeft兼容
	var Idiv=document.getElementById(popupdiv);
	var testH3 = Idiv.getElementsByTagName("h3")[0];
	Idiv.style.display="block";
	testH3.style.cursor="move";//将头部鼠标光标改成“可移动”光标
	//以下部分要将弹出层居中显示
	Idiv.style.left=(document.documentElement.clientWidth-Idiv.clientWidth)/2+scrollLeft+"px";
	Idiv.style.top=(document.documentElement.clientHeight-Idiv.clientHeight)/2+scrollTop-50+"px";
	//以下部分使整个页面至灰不可点击
	var procbg = document.createElement("div"); //首先创建一个div
	procbg.setAttribute("id","mybg"); //定义该div的id
	//用csstext设置遮罩样式
	procbg.style.cssText="background:#000000;width:100%;height:1000px;position:fixed;top:0;left:0;z-index:500;opacity:0.6;filter:Alpha(opacity=70);";
	//背景层加入页面
	document.body.appendChild(procbg);
	//取消滚动条
	document.body.style.overflow = "hidden"; 
	//以下部分实现弹出层的拖拽效果
	var posX;
	var posY;
	testH3.onmousedown = function(e){
		if(!e) e = window.event; //IE
		posX = e.clientX - parseInt(Idiv.style.left);
		posY = e.clientY - parseInt(Idiv.style.top);
		document.onmousemove = mousemove;
	}
	document.onmouseup = function(){
		document.onmousemove = null;
	}
	function mousemove(ev){
		if(ev==null) ev = window.event;//IE
		Idiv.style.left = (ev.clientX - posX) + "px";
		Idiv.style.top = (ev.clientY - posY) + "px";
	}
}

//关闭弹出层
function closeDiv(popupdiv){ 
	var Idiv=document.getElementById(popupdiv);
	Idiv.style.display="none";
	document.body.style.overflow = "auto"; //恢复页面滚动条
	var body = document.getElementsByTagName("body");
	var mybg = document.getElementById("mybg");
	body[0].removeChild(mybg);
}
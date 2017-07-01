$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});
$(function() {
	$('[data-toggle="popover"]').popover()
});

function onKeyDown() {
	if ((event.keyCode == 116) || (window.event.ctrlKey) || (window.event.shiftKey) || (event.keyCode == 122)) {
		event.keyCode = 0;
		event.returnValue = false;
	}
}

function yxl() {
	if (window.event.altKey) {
		window.event.returnValue = false;
	}
}
document.onkeydown = yxl;

function click(e) {
	if (document.all) {
		if (event.button == 2 || event.button == 3) {
			alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
			oncontextmenu = 'return false';
		}
	}
	if (document.layers) {
		if (e.which == 3) {
			oncontextmenu = 'return false';
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
	if (window.event.keyCode == 123) {
		window.event.returnValue = false;
		return (false);
	}
}
window.onload=function(){
	var submenuList = document.querySelectorAll(".submenuwithbg")[1];
	var li = submenuList.children;
	for(var i=0;i<li.length;i++){
		var text = li[i].innerText.replace(/\s+/g,'').toLowerCase();
		li[i].className = 'back '+text;
	}
}





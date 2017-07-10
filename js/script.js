
window.onload=function(){
	var submenuList = document.querySelectorAll(".submenuwithbg")[1];
	var li = submenuList.children;
	for(var i=0;i<li.length;i++){
		var text = li[i].innerText.replace(/\s+/g,'').toLowerCase();
		li[i].className = 'back '+text;
	}
}





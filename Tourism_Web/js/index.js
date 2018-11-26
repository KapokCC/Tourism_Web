var a=[5,22,24,27,37,4,9,815]
var i=0;
window.onload=function(){
	setInterval("轮播()",1000)
}
function 轮播(){
	var src=`img/mianhuabao/${a[i++%(a.length-1)]}.jpg`
	document.getElementById("img").src=src;
}
//var aa=[1,3,89]
//var i=0;
//window.onload=function(){
//	setInterval("gundong()",1000)
//}
//function gundong(){
//	var src=`img/${aa[i++%(aa.length-1)]}.jpg`
//	document.getElementById("img1").src=src;
//}

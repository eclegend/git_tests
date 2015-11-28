function showhid(id)
{
	var el = document.getElementById(id);
	if(el.style.display=="none")
		el.style.display="block";
	else
		el.style.display="none";
}
window.addEventListener("load",function(){
	var load=document.getElementById("load");
	document.body.removeChild(load);
});

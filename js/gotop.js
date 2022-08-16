window.addEventListener("scroll",Display);
function Display()
{
	var display=document.body.scrollTop||document.documentElement.scrollTop;
	if(display>=200)
	{
		gotop.style.display="block";
	}
	else
	{
		gotop.style.display="none";
	}
	gotop.onclick=function()
	{
		window.scrollTo({
			top:0,
			behavior:"smooth"
		})
	}
}
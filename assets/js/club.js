
var p=0;
function page(i){
	p+=i;
	if(p>2){p=0;}
	if(p<0){p=2;}
	document.getElementById("club_content").style.marginLeft=p*(-100)+"%"
}
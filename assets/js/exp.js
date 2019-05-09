
var user_input= document.getElementById('grade');

//user_input.oninput(GradeSelet(user_input.value));

GradeSelet();
function GradeSelet(){
	console.log(user_input.value);
	var g=parseInt(user_input.value)-1;
	document.getElementById('small').style.opacity=0;
	document.getElementById('medium').style.opacity=0;
	document.getElementById('high').style.opacity=0;
	document.getElementById('college').style.opacity=0;
	
	switch(user_input.value) {

		case "1":
			console.log(g);
			document.getElementById('small').style.opacity=1;
			break;
		case "2":
			console.log(g);
			document.getElementById('medium').style.opacity=1;
			break;
		case "3":
			console.log(g);
			document.getElementById('high').style.opacity=1;
			break;
		case "4":
			console.log(g);
			document.getElementById('college').style.opacity=1;
			break;
		default:
			alert("錯誤代碼：exp，請聯絡網頁設計者以解決!!");
	}
	document.getElementById('exp_content').style.marginLeft=-100*g+"%";
}

var tabInto;
var tabContent;

window.onload=function(){
	tabContent=document.getElementsByClassName('tabContent');
	tabInto=document.getElementsByClassName('tabInto');
	hideTabsContent(1);
}
function hideTabsContent(a){
	for(var i=a; i<tabContent.length; i++){
		tabContent[i].classList.remove('showTab');
		tabContent[i].classList.add('hideTab');
		tabInto[i].classList.remove('whiteborder');
	}
}
document.getElementById('tabs2').onclick = function(event){
	var target=event.target;
	if(target.className=='tabInto'){
		for(var i=0; i<tabInto.length; i++){
			if(target == tabInto[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hideTab')){
		hideTabsContent(0);
		tabInto[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hideTab');
		tabContent[b].classList.add('showTab');
	}
}
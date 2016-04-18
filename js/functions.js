'use strict';

let App = {
	init: function(){
		this.controlsCameraFunction();
	},
	controlsCameraFunction: function(){
		var camerasItems  = document.querySelectorAll(".controlsCamera > span");

		for (var i = 0; i < camerasItems.length; i++) {
			camerasItems[i].onclick = function(e){
				console.log(e.target.classList);
				console.log(this);
			}
		}
	}
};

window.onload = function(){
App.init();
}
'use strict';

let App = {
	field: null,
	toggle: true,

	init: function(){
		this.field = document.querySelector('.field');
		this.controlsCameraFunction();
	},
	controlsCameraFunction: function(){
		var camerasItems  = document.querySelectorAll(".controlsCamera > .control");

		for (var i = 0; i < camerasItems.length; i++) {
			camerasItems[i].onclick = function(e){
				var cameraPerspective = this.getAttribute('camera');

				if(cameraPerspective == "normal"){
					App.field.className = "field";
				}else if(cameraPerspective == "front"){
					App.field.className = "field viewer front";
				}else if(cameraPerspective == "back"){
					App.field.className = "field viewer back";
				}else if(cameraPerspective == "side_left"){
					App.field.className = "field viewer side_left";
				}else if(cameraPerspective == "side_right"){
					App.field.className = "field viewer side_right";
				}

				// if(App.toggle){
				// 	App.field.className = "field viewer";
				// 	App.toggle = !App.toggle;
				// }else{
				// 	App.field.className = "field";
				// 	App.toggle = !App.toggle;
				// }
			}
		}
	}
};

window.onload = function(){
	App.init();
}
'use strict';

let App = {
	field: null,
	toggle: true,

	init: function(){
		this.field = document.querySelector('.field');
		this.controlsCameraFunction();
		// this.getLocalTeam();
		this.movePlayers();
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
	},
	
	getLocalTeam: function(){
		var httpRequest = new XMLHttpRequest();
		// httpRequest.setRequestHeader('Content-Type', 'application/json');
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://tools.fifaguide.com/api/club/45');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(null);
		// debugger
		console.log(xhr);
		
		xhr.onreadystatechange = function () {
		
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xhr.responseText); // 'This is the returned text.'
		    } else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
		    }
		  }
		};

	},
	
	movePlayers: function(){
		$('.field .player').draggable({
			containment: "parent",
			drag: function(event, ui){
		      $(event.target).addClass("active");
		   	},
		   	stop: function(event, ui){
		      $(event.target).removeClass("active");
		   	}
		});
	}
};

window.onload = function(){
	App.init();
}
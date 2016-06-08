'use strict';

let App = {
	field: null,
	toggle: true,

	init: function(){
		this.field = document.querySelector('.field');
		this.controlsCameraFunction();
		// this.getLocalTeam();
		this.movePlayers();
		this.windowPress();
	},
	controlsCameraFunction: function(){
		$('.controlsCamera > .control').click(function(e){
			var cameraPerspective = $(this).attr('camera');

			if(cameraPerspective == "normal"){
				App.field.className = "field";
			}else if(cameraPerspective == "front"){
				App.field.className = "field _3d front";
			}else if(cameraPerspective == "back"){
				App.field.className = "field _3d back";
			}else if(cameraPerspective == "side_left"){
				App.field.className = "field _3d side_left";
			}else if(cameraPerspective == "side_right"){
				App.field.className = "field _3d side_right";
			}

			// if(App.toggle){
			// 	App.field.className = "field viewer";
			// 	App.toggle = !App.toggle;
			// }else{
			// 	App.field.className = "field";
			// 	App.toggle = !App.toggle;
			// }
		});
		
		$('.sideField').unbind('click').click(function(){
			$('.sideField').removeClass('active');
			$(this).addClass('active');
			var cameraPerspective = $(this).attr('camera');
			
			if(cameraPerspective == "normal"){
				App.field.className = "field";
			}else if(cameraPerspective == "front"){
				App.field.className = "field _3d front";
			}else if(cameraPerspective == "back"){
				App.field.className = "field _3d back";
			}else if(cameraPerspective == "side_left"){
				App.field.className = "field _3d side_left";
			}else if(cameraPerspective == "side_right"){
				App.field.className = "field _3d side_right";
			}
		});
		
		$('.cameraField').unbind('click').click(function(){
			$('.sideField').removeClass('active');
			$(this).addClass('active');
			App.field.className = "field";
		});
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
	},
	
	// event window when press keyboards
	windowPress: function(){
		$(document).keydown(function(event){
			var code = event.keyCode; // get the code
			console.log(code);

			if(code == 49) // num 1
				$('.controlsCamera > .control').eq(0).click();
			else if(code == 50) // num 2
				$('.controlsCamera > .control').eq(1).click();
			else if(code == 51) // num 3
				$('.controlsCamera > .control').eq(2).click();
			else if(code == 52) // num 4
				$('.controlsCamera > .control').eq(3).click();
			else if(code == 53) // num 5
				$('.controlsCamera > .control').eq(4).click();
		});
	},
};

window.onload = function(){
	App.init();
}
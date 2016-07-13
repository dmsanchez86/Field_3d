'use strict';

var timeoutPanel = null;

let App = {
	field: null,
	toggle: true,

	init: function(){
		this.field = document.querySelector('.field');
		this.controlsCameraFunction();
		this.movePlayers();
		this.windowPress();
		this.openPanel();
		this.submenu();

		setTimeout(function(){
			$('.loader').fadeOut(700);
		},500);
	},

	controlsCameraFunction: function(){		
		$('.sideField').unbind('click').click(function(){
			$('.sideField,.cameraField').removeClass('active');
			$(this).addClass('active');
			var cameraPerspective = $(this).attr('camera');
			
			if($('.field').hasClass('animation')) return;

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
	
	windowPress: function(){
		$(document).keydown(function(event){
			var code = event.keyCode; // get the code

			if(code == 65) // num 5
				$('.panel > ul > li:last-child').click();

			if(code == 83) // num 5
				$('.panel > ul > li:last-child').prev().click();

			if($('.field').hasClass('animation'))return;

			if(code == 49) // num 1
				$('.sideField').eq(0).click();
			else if(code == 50) // num 2
				$('.sideField').eq(1).click();
			else if(code == 51) // num 3
				$('.sideField').eq(2).click();
			else if(code == 52) // num 4
				$('.sideField').eq(3).click();
			else if(code == 53) // num 5
				$('.cameraField').click();
		});
	},

	openPanel: function(){
		$('.panel li.header').unbind('click').click(function(){
			$('.panel').toggleClass('open');

			clearTimeout(timeoutPanel);

			timeoutPanel = setTimeout(function(){
				$('.panel').removeClass('open');
			}, 30000);
		});
	},

	submenu: function(){
		$('.submenu li').unbind('click').click(function(){
			var ref = $(this).parent().attr('ref');
			var val = $(this).attr('value');

			$(this).parent().find('li').removeClass('active');

			$(this).addClass('active');
			
			if(ref == "perspective"){
				App.setPerspective(val);
			}

			if(ref == "ground"){
				App.setGround(val);
			}

			if(ref == "style"){
				App.setStyle(val);
			}
		});
	},

	setPerspective: function(value){
		$('body').attr('perspective', '_'+value);
	},

	setGround: function(value){
		$('body').attr('ground', '_'+value);
	},

	setStyle: function(value){
		$('body').attr('style', '_'+value);
	}
};

window.onload = function(){
	App.init();

	$('#perspectiveRange').unbind('change').change(function(){
		$('body').css({
			'perspective': $(this).val() + "px"
		});
	});
}
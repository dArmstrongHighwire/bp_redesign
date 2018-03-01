$(document).ready(function(){
	displayDropdownOnClick();
	hideSubDropdownIfNotInUse();
	hideSubDropdownWhenOtherSubDropdownIsInUse();
	hideDropdownsIfClickIsOutsideOfNavBar();
});

function displayDropdownOnClick(){
	$('.dropdown button').on("click", function(e){
		$(this).next('div').toggle();
	
		$('.dropbtn').on('click', function(e){
			$( ".dropbtn" ).each(function() {
				if(!$(this).is(':focus')){
					$(this).next('div').hide();
				}
			});
			$( ".sub-dropbtn" ).each(function() {
				if(!$(this).is(':focus')){
					$(this).next('div').hide();
				}
			});
		});
	});
}

function hideSubDropdownIfNotInUse(){
	$('.dropdown-content a').on('click', function(e){
		var subDropdownLinkHasBeenClicked = false;
		$(".sub-dropdown-content").each(function(){
			$(".sub-dropdown-content a").each(function(){
				if($(this).is(':focus')){
				 subDropdownLinkHasBeenClicked = true;
				}
			});
			if(!subDropdownLinkHasBeenClicked){
				$(this).hide();	
			}
		});
	});
}

function hideSubDropdownWhenOtherSubDropdownIsInUse(){
	$('.sub-dropbtn').on('click', function(e){
		$( ".sub-dropbtn" ).each(function() {
			if(!$(this).is(':focus')){
				$(this).next('div').hide();
			}
		});
	});
}

function hideDropdownsIfClickIsOutsideOfNavBar(){
	$(document).on("click", function(event){
		if (!document.getElementById('nav-bar').contains(event.target)){
			$('.dropdown button').each(function(){
				$(this).next('div').hide();
			}); 
		}
    });
}
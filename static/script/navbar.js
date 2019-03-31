const $ = require('jquery')

$(function(){
	// search btn
	$('#navbar-search').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('#navbar-form').addClass('d-lg-none')
		}else{
			$(this).addClass('active')
			$('#navbar-form').removeClass('d-lg-none')
		}
	})

	// add shadow
	$('#navbarSupportedContent').on('show.bs.collapse', function () {
		$('body').append('<div class="tc_bg"></div>')
	})
	$('#navbarSupportedContent').on('hide.bs.collapse', function () {
		$('.tc_bg').remove()
	})

	// subnav
	$('[data-toggle="dropdownSubNav"]').click(function(e){
		var theEvent = e || window.event
		theEvent.stopPropagation()
		$('[data-toggle="dropdownSubNav"]').removeClass('active')
		$('.subNav').hide()
		if($($(this).attr('data-target')).is(':hidden')){
			$($(this).attr('data-target')).slideDown()
			$(this).addClass('active')
		}else{
			$($(this).attr('data-target')).slideUp()
			$(this).removeClass('active')
		}
	})
	$('.subNav').click(function(e){
		var theEvent = e || window.event
		theEvent.stopPropagation()
	})
	$('body').click(function(){
		$('.subNav').slideUp()
		$('[data-toggle="dropdownSubNav"]').removeClass('active')
	})
})
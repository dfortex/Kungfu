$(document).ready(function()
{
	$('#myTab a').click(function(e)
	{
		e.preventDefault();
		$(this).tab('show');
	});
});
$(document).ready(function()
{
	$('.flip').click(function()
	{
		$(this).next('.panel').slideToggle();
	});	
});

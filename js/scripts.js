$(function() {
	$("#datepickerBegin, #datepickerEnd").datepicker({
		dateFormat: "yy-mm-dd"
	});
});

function submitDatesForm() {
	var dateBegin = $('#datepickerBegin').val(), 
		dateEnd = $('#datepickerEnd').val();

	if(!dateBegin || !dateEnd) {
		alert('Необходимо выбрать диапазон дат');
		return;
	}

	// преобразуем в js-формат
	var dateBeginObj = new Date(dateBegin.split('-')[0], dateBegin.split('-')[1], dateBegin.split('-')[2]);
	var dateEndObj = new Date(dateEnd.split('-')[0], dateEnd.split('-')[1], dateEnd.split('-')[2]);

	// преобразуем в unix-формат
	var dateBeginUnix = dateBeginObj.getTime() / 1000;
	var dateEndUnix = dateEndObj.getTime() / 1000;

	console.log(dateBeginUnix, dateEndUnix);

	/*return {
		'dateBeginUnix': dateBeginUnix,
		'dateEndUnix': dateEndUnix
	}*/
};
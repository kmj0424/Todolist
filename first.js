$('input[name="dates"]').daterangepicker()


$('input[name="single"]').daterangepicker({
    singleDatePicker: true,
});

//create a new date range picker
$('#daterange').daterangepicker({ startDate: '03/05/2005', endDate: '03/06/2005' });

//change the selected date range of that picker
$('#daterange').data('daterangepicker').setStartDate('03/01/2014');
$('#daterange').data('daterangepicker').setEndDate('03/31/2014');
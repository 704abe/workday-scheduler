var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

$('#09').val(localStorage.getItem('9am task'));
$('#10').val(localStorage.getItem('10am task'));
$('#11').val(localStorage.getItem('11am task'));
$('#12').val(localStorage.getItem('12pm task'));
$('#13').val(localStorage.getItem('1pm task'));
$('#14').val(localStorage.getItem('2pm task'));
$('#15').val(localStorage.getItem('3pm task'));
$('#16').val(localStorage.getItem('4pm task'));
$('#17').val(localStorage.getItem('5pm task'));

const ids = $('#form').children();
console.log(typeof ids, ids);
ids.toArray().forEach(checkTime);

function checkTime(id) {
    console.log(id);
    var timeValue = moment($(id).attr('id'), ['HH']).format('HH');
    var currentTime = moment().format('HH');

    console.log(typeof currentTime, currentTime);
    console.log(typeof timeValue, timeValue);
    if (timeValue == moment().format('hh')){
        $(id).addClass('present');
    } else if (timeValue < currentTime) {
        console.log('hello');
        $(id).addClass('past');
    } else {
        $(id).addClass('future');
    }
};

$('#9amBtn').on('click', function(){
    var text = $('#09').val();
    localStorage.setItem('9am task', text);
});

$('#10amBtn').on('click', function(){
    var text = $('#10').val();
    localStorage.setItem('10am task', text);
});

$('#11amBtn').on('click', function(){
    var text = $('#11').val();
    localStorage.setItem('11am task', text);
});

$('#12pmBtn').on('click', function(){
    var text = $('#12').val();
    localStorage.setItem('12pm task', text);
});

$('#1pmBtn').on('click', function(){
    var text = $('#13').val();
    localStorage.setItem('1pm task', text);
});

$('#2pmBtn').on('click', function(){
    var text = $('#14').val();
    localStorage.setItem('2pm task', text);
});

$('#3pmBtn').on('click', function(){
    var text = $('#15').val();
    localStorage.setItem('3pm task', text);
});

$('#4pmBtn').on('click', function(){
    var text = $('#16').val();
    localStorage.setItem('4pm task', text);
});

$('#5pmBtn').on('click', function(){
    var text = $('#17').val();
    localStorage.setItem('5pm task', text);
});

var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

$('#9am').val(localStorage.getItem('9am task'));
$('#10am').val(localStorage.getItem('10am task'));
$('#11am').val(localStorage.getItem('11am task'));
$('#12pm').val(localStorage.getItem('12pm task'));
$('#1pm').val(localStorage.getItem('1pm task'));
$('#2pm').val(localStorage.getItem('2pm task'));
$('#3pm').val(localStorage.getItem('3pm task'));
$('#4pm').val(localStorage.getItem('4pm task'));
$('#5pm').val(localStorage.getItem('5pm task'));

function present(){
    if (moment().isSame(moment())){
        console.log('hello');
        $('#9am').addClass('present');
    } else {
        console.log('goodbye');
    };
}

// var checkTime = function () {
//     var time = $(".time").value;

//     var hour = moment(time, "LT");
//     console.log(hour);

//     //remove any old classes from element
//     $(".time-block").removeClass(".present .past .future");

//     // apply new class if task is near/over due date
//     if (moment().isAfter(hour)) {
//         $(".time-block").addClass(".past");
//     } else if (moment().isBefore(time)) {
//         $(".time-block").addClass(".future");
//     } else {
//         $(".time-block").addClass(".present");
//     }
// }

$('#9amBtn').on('click', function(){
    var text = $('#9am').val();
    localStorage.setItem('9am task', text);
});

$('#10amBtn').on('click', function(){
    var text = $('#10am').val();
    localStorage.setItem('10am task', text);
});

$('#11amBtn').on('click', function(){
    var text = $('#11am').val();
    localStorage.setItem('11am task', text);
});

$('#12pmBtn').on('click', function(){
    var text = $('#12pm').val();
    localStorage.setItem('12pm task', text);
});

$('#1pmBtn').on('click', function(){
    var text = $('#1pm').val();
    localStorage.setItem('1pm task', text);
});

$('#2pmBtn').on('click', function(){
    var text = $('#2pm').val();
    localStorage.setItem('2pm task', text);
});

$('#3pmBtn').on('click', function(){
    var text = $('#3pm').val();
    localStorage.setItem('3pm task', text);
});

$('#4pmBtn').on('click', function(){
    var text = $('#4pm').val();
    localStorage.setItem('4pm task', text);
});

$('#5pmBtn').on('click', function(){
    var text = $('#5pm').val();
    localStorage.setItem('5pm task', text);
});

// checkTime();
// present();
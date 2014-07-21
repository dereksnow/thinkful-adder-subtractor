$(document).ready(function() {
    $('input:text').keydown(function() {
        $('.result').removeClass('error').hide();
    });
    $('input:button').click(function() {
        var num1 = +$('#num1').val();
        var num2 = +$('#num2').val();
        var result = "";
        var op = "plus";
        if (validInt(num1) && validInt(num2)) {
            if ($(this).attr('id') == 'add') {
                result = num1 + num2;
            } else if ($(this).attr('id') == 'sub') {
                result = num1 - num2;
                op = "minus";
            }
            $('.op').empty().append(op);
            $('.result').empty().append(num1 + " " + op + " " + num2 + " is " + result).show();

        } else {
            $('.result').empty().append("Error - You must enter an integer for X and Y.").addClass('error').show();
        }
    });

});


function validInt(num) {
    var result = (num && (typeof num === 'number') && (num % 1 === 0));
    return result;
}

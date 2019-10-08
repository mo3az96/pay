$(document).ready(function () {


    $('.check').click(function () {
        var x = $('.price').val();
        $('.radio').prop('checked', false)
        console.log(x)
        $('.form').hide();
        if (x < 300) {
            $('.less300').show();
            $('.more300').change(function () {
                if ($(this).is(':checked')) {
                    // Do something...
                    alert("You can't");
                    $(this).prop('checked', false)
                };
            });
        } else {
            $('.less300').hide();
        }

    });


})
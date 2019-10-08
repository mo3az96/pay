$(document).ready(function () {


    $('.check').click(function () {
        var x = $('.price').val();
        $('.radio').prop('checked', false)
        console.log(x)
        $('.form').hide();


        if (x < 300) {
            $('.more300').hide();
        } else {
            $('.more300').show();
            $('.more300').change(function () {
                if ($(this).is(':checked')) {
                    alert("done");
                    $(this).prop('checked', false)
                };
            });
        }

    });


})
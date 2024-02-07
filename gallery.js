$('.thumbnail2').click(function() {
    $('.modal-body2').empty();
    $($(this).parents('div').html()).appendTo('.modal-body2');
    $('#modal2').modal({
        show: true
    });
});

$('#modal2').on('show.bs.modal', function() {
    $('.col-6,.row .thumbnail2').addClass('blur');
});

$('#modal2').on('hide.bs.modal', function() {
    $('.col-6,.row .thumbnail2').removeClass('blur');
});
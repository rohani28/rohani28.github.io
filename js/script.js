// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi herf
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');


});
// ハンバーガーメニュー
$('#hamburger_button').click(function () {
  if ($('#hamburger').hasClass('open')) {
    $('#hamburger').removeClass('open')
    $('.hamburger-bars').removeClass('fa-times').addClass('fa-bars')
  } else {
    $('#hamburger').addClass('open')
    $('.hamburger-bars').removeClass('fa-bars').addClass('fa-times')
  }
})

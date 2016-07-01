function checkFormErrors () {
  if ($errorFields.length) {
    var $firstError = $errorFields.first();

    $main.animate({
         scrollTop:$firstError.offset().top
    }, 'slow');
  }
}

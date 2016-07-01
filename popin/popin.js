function popin(mentionsToShow) {

        var overlay = $('.overlay');
        var modal = $('#popup');
        var close = $('.close');

        function removeModal() {
            modal.removeClass('show');
            modal.find('p').css('display', 'none');
        }
 
        function removeModalHandler() {
            removeModal(); 
        }
   
        modal.addClass('show');
        $('p[data-ml='+ mentionsToShow + ']').css('display', 'block');
        overlay.unbind("click");

        overlay.bind("click", removeModalHandler);

        close.click(function(e) {
            e.stopPropagation();
            removeModalHandler();
        });

    }

function popin() { // affiche la modal avec un overlay

        var overlay = $('.overlay');

        var modal = $('#popup');
        var close = $('.close');
 

        function removeModal() {
            modal.removeClass('show');
        }
 
        function removeModalHandler() {
            removeModal(); 
        }
   
        modal.addClass('show');
        overlay.unbind("click");

        overlay.bind("click", removeModalHandler);

        close.click(function(e) {
            e.stopPropagation();
            removeModalHandler();
        });

    }

$(function() {
        $(document).on('click', '.material-card > .mc-btn-action',function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');
            var x = document.getElementsByClassName('.material-card');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');
                
                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');
                for(i in x){
                    if(i!=card)
                        i.style.opacity=0;
                }

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });
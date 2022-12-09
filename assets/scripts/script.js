function setAnimation() {
    $('.count.pending').each(function() {
        var isElementInView = Utils.isElementInView($(this), false);    
        if (isElementInView) {
            $(this).removeClass('pending');
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                $(this).text(Math.ceil(now));
                }
            });
        }
    });
}

// This to take you to the place of the tab you clicked in the page
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});

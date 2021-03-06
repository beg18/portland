$(function() {
    /* ===============================
     accordion-mobile-navigation070817
     ================================*/
    function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
    };

    function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
    };

    function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
    };

    init()


    $(".js-card-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this),
            answerId = $this.attr("href");

        if( !$this.hasClass("active") ) {
            $(".js-card-content").slideUp();
            $(".js-card-title").removeClass("active");
        }

        $this.toggleClass("active");
        $(answerId).slideToggle();

    });



    /* iCheck https://github.com/fronteed/icheck
     https://ruseller.com/lessons/les1676/demo/
     ========================*/

    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green',
    });
    

});

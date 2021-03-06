$(document).ready(function() {

    //Fix mobile AddressBar
    function hideAddressBar() {
        setTimeout(function () {
            document.body.style.height = window.outerHeight + 'px';
            document.getElementById('menu').style.height = window.outerHeight + 'px';
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 1100);
        }, 1000);
        return false;
    }
    window.onload = function () {
        hideAddressBar();
        window.addEventListener("orientationchange", function () {
            hideAddressBar();
        }, false);
    };

    //Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    //MMENU
    $(function() {
        $('nav#menu').mmenu({
            extensions	: [ 'theme-dark' ],
            pageScroll : true,
            setSelected	: {
                hover: true
            },
            counters	: true,
            searchfield : {
                placeholder		: 'Поиск'
            },
            iconbar		: {
                add 		: true,
                size		: 40,
                top 		: [
                    '<a href="#cover"><span class="main-icon-sidebar fa fa-bars"></span></a>'
                ],
                bottom 		: [
                    '<a class="zoomUp"><span class="fa fa-search-plus"></span></a>',
                    '<a class="zoomDown"><span class="fa fa-search-minus"></span></a>',
                    '<a href="https://agrarnik.com/" title="Вернуться на сайт" ><span class="fa fa-reply"></span></a>',
                    '<a href="https://agrarnik.com/index.php?option=com_sppagebuilder&view=page&id=7&Itemid=433" title="Архив номеров"><span class="fa fa-file-text"></span></a>',
                    '<a href="https://www.facebook.com/AgrarNikwelcome/" title="Страница Facebook" ><span class="fa fa-facebook-square"></span></a>'
                ]
            },
            sidebar		: {
                collapsed		: {
                    use 			: '(min-width: 320px)',
                    size			: 40
                },
                expanded		: {
                    use 			: '(min-width: 992px)',
                    size			: 25
                }
            },
            navbars		: [
                {
                    content		: [ '' ]
                }, {
                    content		: [ ' ' ]
                },{
                    content		: [ 'searchfield' ]
                },{
                    content		: [ 'prev', 'breadcrumbs', 'close']
                }
            ]
        }, {
            searchfield : {
                clear 		: true
            },
            navbars		: {
                breadcrumbs	: {
                    removeFirst	: true
                }
            }
        });
    });

    // Изменяет номер газеты в шабке страниц
    (function () {
        var p   = document.getElementsByClassName('nomer'),
            txt = $('.number-nespaper').text();

        for (var i=0; i<p.length; i++) {
            p[i].innerHTML = txt;
        }
    })();

    // Button Zoom Page
    $(function () {
        $('.zoomUp').on('click', function () {
            $('.s-newspaper').addClass('zoomActive');
        });
        $('.zoomDown').on('click', function () {
            $('.s-newspaper').removeClass('zoomActive');
        });
    });


    //E-mail Ajax Send
    $("#c-Form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://agrarnik.info/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            swal("Спасибо", "Ваше сообщение отправлено.", "success");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //E-mail Ajax Send FROM MODAL WINDOW
    $("#s-Form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://sub.agrospravka.net/index.php?option=com_acymailing&ctrl=sub",
            data: th.serialize()
        }).always(function() {
            swal("Спасибо", "Вам было отправлено письмо для подтверждения подписки. Пожалуйста, перейдите по ссылке в письме для активации подписки", "warning");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // Popup Form Subscribe
    setTimeout(function () {
        var form = document.getElementById('Sform');

        swal({
            title: "Хотите получать информацию о новых выпусках электронной газеты ?",
            icon: "warning",
            buttons: ["Отмена", "Подписаться"],
        })
            .then(function(willDelete) {
                if (willDelete) {
                    swal({content: form, button: false}).then($('#Sform').css('display', 'block'));
                }
            });
         $.cookie('Sform', true, {
             expires: 1,
             path: '/'
         });
    }, 30000);

    // Page Scroll To ID
    $("a[href*='#']").mPageScroll2id({
        scrollSpeed: 500,
        scrollingEasing: "easeOutQuint",
        scrollEasing: "easeInOutQuint",
        autoScrollSpeed: false,
        layout: "vertical"
    });

    // Video Popup
    $(".js-modal-video").modalVideo({channel:'youtube'});

});


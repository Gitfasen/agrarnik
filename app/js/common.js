$(document).ready(function() {

    //Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    //MMENU
    $(function() {
        $('nav#menu').mmenu({
            wrappers: ["bootstrap4"],
            extensions	: [ 'theme-dark' ],
            pageScroll : true,
            scrollBugFix: { fix: true},
            setSelected	: {
                hover: true
            },
            counters	: false,
            dividers: {
                "fixed": true
            },
            iconbar		: {
                add 		: true,
                size		: 40,
                top 		: [
                    '<a href="#page" title="Закрыть"><span class="main-icon-sidebar fa fa-times"></span></a>',
                    '<br />',
                    '<a class="iconbar__top subscribe" title="Подписаться"><span class="fa fa-envelope"></span></a>',
                    '<a class="iconbar__top zoomUp" title="Увеличить"><span class="fa fa-search-plus"></span></a>',
                    '<a class="iconbar__top zoomDown" title="Уменьшить"><span class="fa fa-search-minus"></span></a>',
                    '<a class="iconbar__top" href="https://agrarnik.com/agrovopros/" title="Агровопрос"><span class="fa fa-question-circle"></span></a>',
                    '<a class="iconbar__top" href="https://agrarnik.com/index.php?option=com_sppagebuilder&view=page&id=7&Itemid=433" title="Архив номеров"><span class="fa fa-file-text"></span></a>',
                    '<a class="iconbar__top" href="https://www.facebook.com/AgrarNikwelcome/" title="Страница Facebook" ><span class="fa fa-facebook-square"></span></a>'
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
                    content		: [ '' ]
                },{
                    content		: [ 'prev' ]
                }
            ]
            }, {
                navbars		: {
                    breadcrumbs	: {
                        removeFirst	: true
                    }
                }
            });
    });

    // Изменяет номер газеты в шабке страниц
    $('.nomer').text('№14 (323)');

    //Настройки для попапа страниц
    $('.page-popup').magnificPopup({
        type: 'image',
    });
    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        dots: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive:{
            0 :{
                items:1
            },
            600 :{
                items:3
            },
            1000 :{
                items:4
            }
        }
    });

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
    $(function () {
        $('.subscribe').on('click', function () {
            var form = document.getElementById('Sform');

            swal({
                title: "Хотите получать информацию о новых выпусках электронной газеты ?",
                icon: "warning",
                buttons: ["Отмена", "Подписаться"],
            }).then(function(willDelete) {
                if (willDelete) {
                    swal({content: form, button: false}).then($('#Sform').css('display', 'block'));
                }
            });
        });

    });

    // Page Scroll To ID
    $("a[href*='#']").mPageScroll2id({
        scrollSpeed: 500,
        scrollingEasing: "easeOutQuint",
        scrollEasing: "easeInOutQuint",
        autoScrollSpeed: false,
        layout: "vertical"
    });

    // Video Popup
    $(".js-modal-video").modalVideo({
        channel:'youtube',
        autoplay: 1
    });

    $(function () {
        var bt = document.getElementsByClassName('bt-footer');
        for (var i = 0; i < bt.length; i++) {
            var content = bt[i].innerHTML;
            if (content.length < 55) {
                $(bt[i]).css('display', 'none');
            }
        }
    });

    $('.popup').magnificPopup({
        type:'iframe',
        srcAction: 'iframe_src',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<div style="overflow: auto!important; -webkit-overflow-scrolling: touch!important;"><iframe class="mfp-iframe" frameborder="0" allowfullscreen style="width:100%; height:100%;overflow:scroll;"></iframe></div>'+
            '</div>',
        },
        callbacks: {
            open: function () {
                if ($(".mfp-iframe").is(":visible")) {
                    $('html, body').css('overflow', 'hidden');
                    $('html, body').css('overflow', 'hidden');
                }
            },
            close: function() {
                $('html').css('overflow', 'scroll');
            }
        },
        midClick: true
    });

    $(function () {
        setTimeout(function () {
            //$("#menu").before("<div class=\"banner\"><img src='img/b.png' alt='alt'></div>");
        }, 3000);
        setTimeout(function () {
            $(".banner").remove();
        }, 43000);
    });
});


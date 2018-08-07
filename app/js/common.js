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
            counters	: true,
            iconbar		: {
                add 		: true,
                size		: 40,
                top 		: [
                    '<a href="index.html"><span class="main-icon-sidebar fa fa-home"></span></a>'
                ],
                bottom 		: [
                    '<a class="subscribe"><span class="fa fa-rss"></span></a>',
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
                    content		: [ 'prev', 'breadcrumbs', 'close']
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
        callbacks: {
            open: function () {
                if ($(".mfp-iframe").is(":visible")) {
                    console.log('ok');
                    $('html').css('overflow', 'hidden');
                }
            },
            close: function() {
                $('html').css('overflow', 'scroll');
            }
        },
        midClick: true
    });



});


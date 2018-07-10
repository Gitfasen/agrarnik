$(document).ready(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
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
                    '<a href="#cover"><span class="fa fa-home"></span></a>'
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

    $(function () {
        $('.zoomUp').on('click', function () {
            $('.s-newspaper').addClass('zoomActive');
        });
        $('.zoomDown').on('click', function () {
            $('.s-newspaper').removeClass('zoomActive');
        });
    });

    $(function () {
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
                url: "https://agrarnik.info/mail.php",
                data: th.serialize(),
            }).done(function() {
                swal("Спасибо", "Вы подписаны на свежий выпуск электронной газеты", "success");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    });

    function sPopup() {
        var form = document.getElementById('Sform');
        swal({
            title: "Хотите получать информацию о новых выпусках электронной газеты ?",
            icon: "warning",
            buttons: ["Отмена", "Подписаться"],
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal({content: form, button: false}).then($('#Sform').css('display', 'block'));
                }
            });
    };

    $(function () {
        // var date = new Date();
        // var minutes = 30;
        // date.setTime(date.getTime() + (minutes * 60 * 1000));
        // if (!$.cookie('Sform')) {
            setTimeout(sPopup, 15000);
        // }
        // $.cookie('Sform', true, {
        // 	expires: date,
        // 	path: '/'
        // });

    });


    $("a[href*='#']").mPageScroll2id();

});





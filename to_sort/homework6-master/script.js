
        $(function() {
            $('#button').click(function(){
                $('#callback').html('');
                $.post('validator.php', {
                    username: $('#login').val(),
                    password: $('#password').val(),
                    email: $('#email').val(),
                    gender: $('#gender').val(),
                    credit_card: $('#card').val(),
                    bio: $('#bio').val(),
                    birth: $('#date').val(),
                }, function (callBack) {
                    if ($.parseJSON(callBack).result === true) {
                        $('#callback').removeClass('callback-wrong').addClass('callback-succeeded');
                        $('#callback').append('Валидация пройдена')}
                    else {
                        event.preventDefault();
                        $('#callback').removeClass('callback-succeeded').addClass('callback-wrong');
                        $('#callback').append('Валидация не пройдена' + '<br>');
                        for (var key in $.parseJSON(callBack).error){
                            $('#callback').append(key + ': ' + $.parseJSON(callBack).error[key] + '<br>');
                        }
                    }
                    })
                })

              $('#date').datepicker ({
                monthNames :[ "Январь" , "Февраль" , "Март" , "Апрель" , "Май" , "Июнь" , "Июль" , "Август" , "Сентябрь" , "Октябрь", "Ноябрь" , "Декабрь" ],
                monthNamesShort: ["Янв" , "Февь" , "Мар" , "Апр" , "Май" , "Июн" , "Июл" , "Авг" , "Сен" , "Окт", "Ноя" , "Дек"] ,
                dayNamesMin :[ "Вс" , "Пн" , "Вт" , "Ср" , "Чт" , "Пт" , "Сб" ],
                firstDay : 1 ,
                defaultDate: -5840,
                dateFormat : "yy-mm-dd",
                changeYear:true,
                yearRange: 'c-90:c+0',
                changeMonth:true,
                showOn: "both",
                buttonImage: "img/calendar.png",
                buttonImageOnly: true,
                buttonText: "Выберите дату"
                });

            $( "#progressbar" ).progressbar({
              classes: {
                "ui-progressbar": "highlight"
              },
              value: 15
               });
            var progress = $( "#progressbar" ).progressbar('value');
            console.log(progress);
            $('.progressValue').html('прогресс заполнения формы: ' + progress + ' %');


            $('#login').blur(function () {
              var reg = /\d{6}/;
              console.log(reg.test($('#login').val()));
              if (reg.test($('#login').val())) {
              console.log('тру');
            }
          })
    })

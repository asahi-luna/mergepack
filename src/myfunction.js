function showWholeScreenImg(src) {
    $('body').append($(
        `<div class="whole-screen-box">
        <style type="text/css">
            .whole-screen-box{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }
            .whole-screen-img{
                height: 90%;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .close-btn-box{
                height: 90%;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .close-btn{
                width: 20px;
                height: 20px;
                position: absolute;
                top: 0;
                right: -20px;
                background: url("./img/close.png") no-repeat center center;
                cursor: pointer;
            }
        </style>
        <img class="whole-screen-img" src="${src}">
        <div class="close-btn-box">
            <div class="close-btn"></div>
        </div>
        <script type="text/javascript">
            $('.close-btn-box').width($('.whole-screen-img').width());
            $('.close-btn-box').height($('.whole-screen-img').height());
            $('.close-btn').click(function () {
                $('.whole-screen-box').remove();
            })
        </script>
    </div>`
    ));
}

function showWholeScreenVideo(src){
    $('body').append($(
        `<div class="whole-screen-box">
        <style type="text/css">
            .whole-screen-box{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }
            .whole-screen-img{
                height: 90%;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .close-btn-box{
                height: 90%;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: black;
            }
            .close-btn{
                width: 20px;
                height: 20px;
                position: absolute;
                top: 0;
                right: -20px;
                background: url("./img/close.png") no-repeat center center;
                cursor: pointer;
            }
        </style>
        <div class="close-btn-box">
            <div class="close-btn"></div>
        </div>
        <video autoplay loop muted class="whole-screen-img" src="${src}"></video>
        <script type="text/javascript">
            $('.close-btn-box').width($('.whole-screen-img').width());
            $('.close-btn-box').height($('.whole-screen-img').height());
            $('.close-btn').click(function () {
                $('.whole-screen-box').remove();
            })
        </script>
    </div>`
    ));
}
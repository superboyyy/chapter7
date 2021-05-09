$(document).ready(function(){
    var index = 1;
    $(".adver").mouseover(function () {
        $(".arrowLeft").show();
        $(".arrowRight").show();
    })
    $(".adver").mouseout(function () {
        $(".arrowLeft").hide();
        $(".arrowRight").hide();
    })
    $(".arrowRight").click(function () {
        index++;
        if (index > 3) {
            index = 3;
            alert("已经是最后一张图片了");
        }
        $(".adver").css("background", "url(images/"+index+".jpg)");
        $("li:nth-of-type("+index+")").css("background","orange").siblings().css("background", "#333333");
    })
    $(".arrowLeft").click(function () {
        index--;
        if (index < 1) {
            index = 1;
            alert("这是第一张图片了");
        }
        $(".adver").css("background", "url(images/"+index+".jpg)");
        $("li:nth-of-type("+index+")").css("background","orange").siblings().css("background", "#333333");
    })
})
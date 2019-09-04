var str = '',
    oContent = document.getElementsByClassName('content')[0],
    oSecond = document.getElementsByClassName('second')[0],
    oMinute = document.getElementsByClassName('minute')[0],
    oHour = document.getElementsByClassName('hour')[0];

function init() {
    fillHtml();
    showTime();
}
init();

// 生成dom结构
function fillHtml() {
    for(var i = 1; i <= 12; i++) {
        str += '<li class="num" style="transform: rotate('+i*30+'deg)">\
                    <span style="transform: rotate(-'+i*30+'deg)";>'+i+'</span>\
                </li>';
    }
    oContent.innerHTML = str;
}
// 更新时间
function showTime() {
    var newDate = new Date();
    // 秒
    var second = newDate.getSeconds();
    var msec = newDate.getMilliseconds();
    var fillSec = second + msec/1000;
    oSecond.style.transform = 'rotate('+fillSec*6+'deg)';
    // 分
    var minute = newDate.getMinutes();
    var fillMin = minute + fillSec/60;
    oMinute.style.transform = 'rotate('+fillMin*6+'deg)';
    // 时
    var hour = newDate.getHours();
    var fillHou = hour + fillMin/60;
    oHour.style.transform = 'rotate('+fillHou*30+'deg)';

    setTimeout(showTime, 16.7);
}

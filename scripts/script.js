var settings = {
    'timeout': 10000, // millisecond
    'url': '/ajax/session.php',
    'sessionParam': 'js_popup'
};

function showPopup() {
    alert('i\'am popup)');
}

function checkSession(t) {
    var dateTime = Date.now() + settings.timeout;
    $.post(settings.url, {session_param_name: settings.sessionParam, popup_time: dateTime, currentTime: Date.now()}).done(
        function (data) {
            if (data) {
                if (data == 'yes') {
                    showPopup();
                    clearInterval(t);
                } else if (data == 'clear')
                    clearInterval(t);
            }
        }
    );
}

$(function () {
    var t = setInterval(function() {checkSession(t)}, 1000);
});
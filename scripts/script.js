var settings = {
    'timeout': 3000,
    'url': '/ajax/session.php',
    'sessionParam': 'js_popup'
};

function showPopup() {
    alert('i\'am popup)');
}

function checkSession() {
    $.post(settings.url, {session_param_name: settings.sessionParam}).done(
        function (data) {
            if (data && data == 'yes')
                showPopup();
        }
    );
}

$(function () {
    setTimeout(function() {checkSession()}, settings.timeout);
});
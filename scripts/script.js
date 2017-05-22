var settings = {
    'url': '/ajax/session.php'
};

function showPopup() {
    alert('i\'am popup)');
}

function checkSession(t) {
    $.post(settings.url).done(
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
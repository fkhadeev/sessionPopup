<?php
session_start();

if (isset($_POST['session_param_name']) && isset($_POST['popup_time']) && isset($_POST['currentTime'])) {
    if (!isset($_SESSION[$_POST['session_param_name']])) {
        $_SESSION[$_POST['session_param_name']] = $_POST['popup_time'];
        echo 'no';
    } elseif ($_SESSION[$_POST['session_param_name']] == 'none')
        echo 'clear';
    elseif ($_SESSION[$_POST['session_param_name']] <= $_POST['currentTime']) {
        $_SESSION[$_POST['session_param_name']] = 'none';
        echo 'yes';
    }
}
<?php
session_start();

if (isset($_POST['session_param_name']) && !isset($_SESSION[$_POST['session_param_name']])) {
    $_SESSION[$_POST['session_param_name']] = 1;
    echo 'yes';
} else {
    echo 'no';
}
<?php
session_start();

$settings = [
    'timeout' => 5, // sec
    'sessionParam' => 'js_popup'
];

$popupTime = time() + $settings['timeout'];
$currentTime = time();

if (!isset($_SESSION[$settings['sessionParam']])) {
    $_SESSION[$settings['sessionParam']] = $popupTime;
    echo 'no';
} elseif ($_SESSION[$settings['sessionParam']] == 'none')
    echo 'clear';
elseif ($_SESSION[$settings['sessionParam']] <= $currentTime) {
    $_SESSION[$settings['sessionParam']] = 'none';
    echo 'yes';
}
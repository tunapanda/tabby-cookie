<?php

/*
Plugin Name: Tabby Cookie
Plugin URI: http://github.com/limikael/tabby-cookie
Description: Make Tabby Responsive Tabs stay on the active tab on reload.
Version: 0.0.1
*/

/**
 * Enqueue scripts.
 */
function tabby_cookie_enqueue_scripts() {
	wp_enqueue_script("jquery");
	wp_enqueue_script("tabby-cookie");
}

add_action("wp_enqueue_scripts","tabby_cookie_enqueue_scripts");

wp_register_script("tabby-cookie",plugins_url("tabby-cookie.js",__FILE__));
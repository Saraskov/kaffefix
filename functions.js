<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'parent-style'; // This is 'atra-style' for the Astra theme.
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
};

/**Ændre sidebar widget titler fra H2 til H3 
 * Javascript kopieret fra https://gist.github.com/deckerweb/4682113 */
add_filter( 'widget_title', 'ddw_custom_widget_title_headline' );
/**
 * @author David Decker - DECKERWEB
 * @link   http://deckerweb.de/twitter
 */
function ddw_custom_widget_title_headline( $title ) {
	return '<h3>' . $title . '</h3>';
}

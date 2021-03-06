define( [
	"jquery",
	"ui/widgets/autocomplete"
], function( $ ) {

module( "autocomplete: methods" );

test( "destroy", function( assert ) {
	expect( 1 );
	assert.domEqual( "#autocomplete", function() {
		$( "#autocomplete" ).autocomplete().autocomplete( "destroy" );
	} );
} );

test( "search, close", function() {
	expect( 6 );
	var data = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "python", "c", "scala", "groovy", "haskell", "perl" ],
		element = $( "#autocomplete" ).autocomplete( {
			source: data,
			minLength: 0
		} ),
		menu = element.autocomplete( "widget" );

	ok( menu.is( ":hidden" ), "menu is hidden on init" );

	element.autocomplete( "search" );
	ok( menu.is( ":visible" ), "menu is visible after search" );
	equal( menu.find( ".ui-menu-item" ).length, data.length, "all items for a blank search" );

	element.val( "has" ).autocomplete( "search" );
	equal( menu.find( ".ui-menu-item" ).text(), "haskell", "only one item for set input value" );

	element.autocomplete( "search", "ja" );
	equal( menu.find( ".ui-menu-item" ).length, 2, "only java and javascript for 'ja'" );

	element.autocomplete( "close" );
	ok( menu.is( ":hidden" ), "menu is hidden after close" );
} );

test( "widget", function( assert ) {
	expect( 2 );
	var element = $( "#autocomplete" ).autocomplete(),
		widgetElement = element.autocomplete( "widget" );
	equal( widgetElement.length, 1, "one element" );
	assert.hasClasses( widgetElement, "ui-menu" );
} );

} );

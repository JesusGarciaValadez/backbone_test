/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
( function ( $, window, document, undefined ) {

    var _BackboneTest    = window._BackboneTest,
    // Use the correct document accordingly with window argument (sandbox)
    document    = window.document,
    location    = window.location,
    navigator   = window.navigator,
    // Map over BackboneTest in case of overwrite
    _BackboneTest    = window.BackboneTest;
    // Define a local copy of BackboneTest
    BackboneTest = function() {
        if ( !( this instanceof BackboneTest ) ) {
            // The BackboneTest object is actually just the init constructor 'enhanced'
            return new BackboneTest.fn.init();
        }
        return BackboneTest.fn.init();
    };

    BackboneTest.overlay;
    BackboneTest.closer;
    BackboneTest.radio;
    BackboneTest.tool;
    BackboneTest.song;
    BackboneTest.view;

    //  Object prototyping
    BackboneTest.fn = BackboneTest.prototype = {
        /**
         *
         *  @function:  !constructor
         *  @description:   Constructor method
         *  @author: @_Chucho_
         *
         */
        //  Método constructor
        constructor:    BackboneTest,
        /**
         *
         *  @function:  !init
         *  @description:   Inicializer method
         *  @author: @_Chucho_
         *
         */
        //  !Método inicializador
        init:           function ( ) {
            
        },
        Song:           Backbone.Model.extend( {} ),
        SongView:       Backbone.View.extend( {
            tagName:      "li",
            className:    "title",
            id:           "song",
            render: function ( ) {
                var song    = this.model;
                var title   = song.get( 'titulo' );
                var author  = song.get( 'autor' );

                this.$el.html( "<p>" + title + "</p>" + "<p>" + author + "</p>" );
            }
        } ),
    };

    // Give the init function the BackboneTest prototype for later instantiation
    BackboneTest.fn.init.prototype = BackboneTest.fn;

    BackboneTest = BackboneTest.fn;

    // Expose BackboneTest to the global object
    window.BackboneTest  = BackboneTest;
} ) ( jQuery, window, document );
//  @codekit-prepend "plugins.js";
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
    
    var storage, deviceWidth, isPortable, typeOfDevice, minDeviceWidth  = 320, maxDeviceWidth = 568, timeLapseOfCarrousel    = 6000;

    //  Revisa la disponibilidad de localStorage
    if( 'localStorage' in window && window.localStorage !== null ) {
        storage = localStorage;
    } else {
        try {
            if ( localStorage.getItem ) {
                storage = localStorage;
            }
        } catch( e ) {
            storage = {};
        }
    }

    //  When DOM is loaded
    $( function ( ) {

        window.navigator.userAgent = userAgent    = ( window.navigator.userAgent );
        //( deviceWidth >= minDeviceWidth && deviceWidth <= maxDeviceWidth ) ? isPortable  = true : isPortable  = false;
        ( userAgent.indexOf( 'iPhone ' ) || userAgent.indexOf( 'Android' ) ) ? isPortable  = true : isPortable  = false;

        window.typeOfDevice = typeOfDevice  = ( isPortable ) ? "mobile" : "desktop";

        window.isPortable   = isPortable;

        if ( isPortable ) { //  Si es un móvil...


        } //  Si es un móvil...
    } );

    //  When page is finished loaded
    $( 'document' ).ready( function ( e ) {
        BackboneTest.Song       = Backbone.Model.extend( { } );
        BackboneTest.SongView   = Backbone.View.extend( {
            events: {
                "click .test": "add"
            },
            el: $( ".songs" ),
            tagName: "li",
            className: "title",
            id: "song",
            template: Handlebars.compile( $( '#song-template' ).html() ),
            initialize: function() {
                this.listenTo( this.model, "change", this.render, this );
            },
            render: function ( ) {
                var html    = this.template( this.model.toJSON() );
                this.$el.html( html );
            },
            add: function ( e ) {
                alert(this.model.get("autor"));
            }
        } );
        BackboneTest.Songs      = Backbone.Collection.extend( {
            model: BackboneTest.Song
        } );

        BackboneTest.song1      = new BackboneTest.Song( {
            autor: "Metallica",
            titulo: "One"
        } );
        BackboneTest.song2      = new BackboneTest.Song( {
            author: "Metallica",
            titulo: "Shoot Me Again"
        } );
        BackboneTest.song3      = new BackboneTest.Song( {
            author: "Korn",
            titulo: "Here to Stay"
        } );
        BackboneTest.song4      = new BackboneTest.Song( {
            author: "Korn",
            titulo: "Silent Hill"
        } );

        BackboneTest.song       = new BackboneTest.SongView( { 
            model: BackboneTest.song1
        } );

        BackboneTest.song.add( { autor: "Creed", titulo: "With arms wide open" } );
        BackboneTest.song.render();
        BackboneTest.song1.set( { autor: "Creed", titulo: "Don't give up upon us" } );

        /*BackboneTest.songs              = new BackboneTest.Songs( [
            BackboneTest.song1,
            BackboneTest.song2,
            BackboneTest.song3,
            BackboneTest.song4
        ] );
        BackboneTest.songs.on( 'reset', function ( e ) {
            console.log( 'Me han reseteado' );
        } );
        BackboneTest.songs.on( 'add', function ( e ) {
            console.log( 'Uno nuevo!!!' );
        } );

        BackboneTest.songs.add( { autor: "Metallica", titulo: "Some kind of monster" } );
        BackboneTest.songs.forEach( function ( s ) {
          console.log( s.toJSON() );
        } );
        console.log( BackboneTest.songs.where( { titulo: "One" } ) );
        console.log( BackboneTest.songs.length );
        BackboneTest.songs.at(0).toJSON();*/

    } );
} ) ( jQuery, window, document );
/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    name: 'PWA',

    extend: 'PWA.Application',

    requires: [
        'PWA.*'
    ],

    // The name of the initial view to create. The main view will
    // be added to the Ext.Viewport.
    //
    mainView: 'PWA.view.main.Main'
});

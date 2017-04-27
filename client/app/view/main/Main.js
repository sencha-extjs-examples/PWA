/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('PWA.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.field.Text',
        'PWA.view.main.List',
        'PWA.view.main.MainController',
        'PWA.view.main.MainModel'
    ],
 
    controller: 'main',
    viewModel: 'main',
    layout: 'fit',

    items: [
        {
            docked: 'top',
            style: 'padding: 10px; background-color: red; color: white',
            xtype: 'component',
            html: 'OFFLINE MODE',
            hidden: true,
            bind: {
                hidden: '{online}'
            }
        },
        {
            xtype: 'container',
            reference: 'main',
            layout: 'card',
            items: [{
                xtype: 'mainlist',
                reference: 'list'
            }, {
                xtype: 'person',
                reference: 'person'
            }]
        }
    ]
});

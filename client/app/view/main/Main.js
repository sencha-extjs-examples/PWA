/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property.
 */
Ext.define('PWA.view.main.Main', {
    extend: 'Ext.Panel',
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

    layout: {
        type: 'card',
        animation: {
            type: 'slide'
        }
    },

    header: {
        ui: 'dark-header',
        title: {
            bind: {
                margin: '{title === "Profile" ? "0 0 0 5" : "0 0 0 20"}'
            }
        },
        items: [{
            xtype: 'button',
            ui: 'dark flat large',
            docked: 'left',
            iconCls: 'x-fa fa-chevron-left',
            handler: 'onBackTap',
            hidden: true,
            bind: {
                hidden: '{title !== "Profile"}'
            }
        }]
    },

    bind: {
        title: '{title}'
    },

    items: [{
        docked: 'top',
        style: 'padding: 10px; background-color: red; color: white',
        xtype: 'component',
        html: 'OFFLINE MODE',
        hidden: true,
        bind: {
            hidden: '{online}'
        }
    }, {
        xtype: 'mainlist',
        reference: 'list'
    }, {
        xtype: 'person',
        reference: 'person'
    }]
});

/*
 * File: app/view/main/Main.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PWA.view.main.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main.main',

    requires: [
        'PWA.view.main.MainViewModel',
        'PWA.view.main.MainViewController',
        'PWA.view.main.List',
        'PWA.view.person.Person',
        'Ext.dataview.List'
    ],

    controller: 'main.main',
    viewModel: {
        type: 'main.main'
    },
    header: {
        ui: 'dark-header',
        title: {
            bind: {
                margin: '{title === "Profile" ? "0 0 0 5" : "0 0 0 20"}'
            }
        },
        items: [
            {
                xtype: 'button',
                ui: 'dark flat large',
                docked: 'left',
                iconCls: 'x-fa fa-chevron-left',
                handler: 'onBackTap',
                hidden: true,
                bind: {
                    hidden: '{title !== "Profile"}'
                }
            }
        ]
    },

    layout: {
        type: 'card',
        animation: 'slide'
    },
    bind: {
        title: '{title}'
    },
    items: [
        {
            xtype: 'component',
            style: 'padding: 10px; background-color: red; color: white',
            docked: 'top',
            html: 'OFFLINE MODE',
            bind: {
                hidden: '{online}'
            }
        },
        {
            xtype: 'main.list',
            reference: 'list'
        },
        {
            xtype: 'person.person',
            reference: 'person'
        }
    ]

});
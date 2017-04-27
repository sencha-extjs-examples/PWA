/**
 * This view is an example list of people.
 */
Ext.define('PWA.view.main.List', {
    extend: 'Ext.Panel',
    xtype: 'mainlist',

    cls: 'home-events',

    requires: [
        'Ext.plugin.PullRefresh'
    ],

    title: 'Employee Directory',

    header: {
        ui: 'dark-header',
        items: {
            ui: 'dark flat large',
            xtype: 'button',
            docked: 'left',
            iconCls: 'x-fa fa-bars',
            handler: 'onBackTap',
            margin: '0 5 0 0'
        }
    },

    layout: 'fit',

    items: {
        xtype: 'list',

        bind: {
            store: '{personnel}'
        }, 

        plugins: [{
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Pull down to refresh'
        }],

        itemTpl: [
            '<div class="item-wrapper">',
                '<div class="content">',
                    '<div class="picture large" style="background-image:url({picture})"></div>',
                    '<div class="details">',
                        '<div class="person-name">{firstname} {lastname}</div>',
                        '<div class="person-title">{title}</div>',
                    '</div>',
                '</div>',
            '</div>'
        ],

        itemConfig: {
            ui: 'cards',
            header: {
                ui: 'cards'
            }
        },

        listeners: {
            itemtap: 'onItemSelected'
        }
    }
});

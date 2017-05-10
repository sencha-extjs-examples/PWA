/**
 * This view is an example list of people.
 */
Ext.define('PWA.view.main.List', {
    extend: 'Ext.dataview.List',
    xtype: 'mainlist',

    requires: [
        'Ext.plugin.PullRefresh'
    ],

    bind: '{personnel}',
    cls: 'home-events',
    grouped: true,
    infinite: true,
    loadingText: '',

    indexBar: {
        platformConfigs: {
            desktop: {
                autoHide: true
            },
            '!desktop': {
                autoHide: false
            }
        }
    },

    plugins: {
        pullrefresh: {
            pullText: 'Pull down to refresh'
        }
    },

    itemConfig: {
        ui: 'cards',
        header: {
            ui: 'cards'
        }
    },

    listeners: {
        itemtap: 'onItemSelected'
    },

    itemTpl: '<div class="item-wrapper">' +
        '<div class="content">' +
            '<div class="picture large" style="background-image:url({picture})"></div>' +
            '<div class="details">' +
                '<div class="person-name">{firstname} {lastname}</div>' +
                '<div class="person-title">{title}</div>' +
            '</div>' +
        '</div>' +
    '</div>'
});

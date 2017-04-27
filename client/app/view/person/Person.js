Ext.define('PWA.view.person.Person', {
    extend: 'Ext.Panel',
    xtype: 'person',

    requires: [
        'PWA.view.person.*'
    ],

    controller: 'person',

    viewModel: {
        type: 'person'
    },

    baseCls: 'person',
    title: 'Profile',

    header: {
        ui: 'dark-header',
        items: {
            ui: 'dark flat large',
            xtype: 'button',
            docked: 'left',
            iconCls: 'x-fa fa-chevron-left',
            handler: 'onBackTap',
            margin: '0 5 0 0'
        }
    },

    scrollable: true,

    items: [{
        xtype: 'person-header'
    }, {
        xtype: 'person-details',
        ui: 'block',
        bind: {
            record: '{record}'
        }
    }],

    updateRecord: function(record) {
        alert(record);
        this.getViewModel().set('record', record);
    }
});

Ext.define('PWA.view.person.Person', {
    extend: 'Ext.Container',
    xtype: 'person',

    requires: [
        'PWA.view.person.*'
    ],

    controller: 'person',

    viewModel: {
        type: 'person'
    },

    cls: 'person',
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
        this.getViewModel().set('record', record);
    }
});

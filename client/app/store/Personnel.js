Ext.define('PWA.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',

    model: 'PWA.model.Person',

    proxy: {
        type: 'ajax',

        // @sw-cache { urlPattern: "\\/portraits\\/.*", handler: "networkFirst", options: { cache: { name: "images", maxEntries: 100 } } }
        // @sw-cache { handler: "networkFirst", options: { cache: { name: "api" } } }
        url: '/personnel.json',

        reader: {
            type: 'json'
        }
    },

    grouper: {
        groupFn: function(record) {
            return record.get('lastname')[0];
        }
    },

    sorters: [{
        property: 'lastname'
    }, {
        property: 'firstname'
    }]
});

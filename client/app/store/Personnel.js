Ext.define('PWA.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'PWA.model.Person',

    autoLoad: true,

    proxy: {
        type: 'ajax',

        // @sw-cache { urlPattern: "\\/portraits\\/.*", handler: "networkFirst", options: { cache: { name: "images", maxEntries: 100 } } }
        // @sw-cache { handler: "networkFirst", options: { cache: { name: "api" } } }
        url: '/personnel.json',

        reader: {
            type: 'json'
        }
    }

});

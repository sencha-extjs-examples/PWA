/*
 * File: app/store/Personnel.js
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

/*
    TODO: The url in the class:


    // @sw-cache { urlPattern: "\\/portraits\\/.*", handler: "networkFirst", options: { cache: { name: "images", maxEntries: 100 } } }
    // @sw-cache { handler: "networkFirst", options: { cache: { name: "api" } } }


*/
Ext.define('PWA.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',

    requires: [
        'PWA.model.Person',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Grouper'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Personnel',
            autoLoad: true,
            model: 'PWA.model.Person',
            proxy: {
                type: 'ajax',
                url: '/personnel.json',
                reader: {
                    type: 'json'
                }
            },
            grouper: {
                groupFn: function(item) {
                    return item.get('lastname')[0];
                }
            },
            sorters: [
                {
                    property: 'latname'
                },
                {
                    property: 'firstname'
                }
            ]
        }, cfg)]);
    }
});
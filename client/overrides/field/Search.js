Ext.define('App.override.field.Search', {
    override: 'Ext.field.Search',

    config: {
        triggers: {
            search: {
                handler: 'onSearchIconTap',
                scope: 'this'
            }
        }
    },

    onSearchIconTap: function() {
        this.focus();
    }
});

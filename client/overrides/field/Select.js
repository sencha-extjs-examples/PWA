Ext.define('App.override.field.Select', {
    override: 'Ext.field.Select',

    /**
     * FIX: https://sencha.jira.com/browse/EXTJS-19390
     * NOTE: using cachedValue instead of initialConfig
     */
    applyValue: function (value) {
        var me = this,
            ret = me.callParent(arguments),
            store = me.getStore(),
            loaded = store && store.isLoaded();

        if (ret === null && !loaded) {
            me.cachedValue = value;
        } else if (loaded) {
            me.cachedValue = null;
        }

        return ret;
    },

    /**
     * FIX: the initial selection is dropped if set before the store is loaded. The override
     * above partially fix this issue by setting it back to the original value, however since
     * the 'selection' config is twoWayBindable, the bound view model value would become null
     * until the store is loaded, which is not the expected behavior.
     */
    updateSelection: function() {
        var store = this.getStore();
        if (store && store.isLoaded()) {
            this.callParent(arguments);
        }
    }
});

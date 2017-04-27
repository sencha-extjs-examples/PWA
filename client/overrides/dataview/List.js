Ext.define('App.overrides.dataview.List', {
    override: 'Ext.dataview.List',

    /**
     * [FIX] Don't call updateHeaderMap when list items are not available.
     */
    updateHeaderMap: function() {
        if (this.listItems.length) {
            this.callParent();
        }
    }
});

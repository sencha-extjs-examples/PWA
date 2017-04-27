/**
 * [BUG] cell not updated when empty or invalid dataIndex
 */
Ext.define('App.overrides.Grid.cell.Cell', {
    override: 'Ext.grid.cell.Cell',

    setValue: function() {
        this.callParent(arguments);

        // tpl may contain fields other than the one referenced by dataIndex, in which
        // case we still want to update the cell content even if the dataIndex value
        // hasn't changed, so let's call updateValue() and bypass value equality check.
        this.writeValue();
    },

    // disable default implementation
    updateValue: Ext.emptyFn
});

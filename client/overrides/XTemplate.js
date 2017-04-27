Ext.define('App.overrides.XTemplate', {
    override: 'Ext.XTemplate',

    /**
     * [FIX] Don't convert the result to string if only one value, allowing , for
     * instance, to build ObjectTemplate with number properties and still be able
     * to use formatters (e.g. {value:round}).
     */
    apply: function(values, parent, xindex, xcount) {
        var buffer = this.applyOut(values, [], parent, xindex, xcount);
        return buffer.length === 1 ? buffer[0] : buffer.join('');
    }
});

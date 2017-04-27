Ext.define('App.override.form.Panel', {
    override: 'Ext.form.Panel',

    /**
     * Basic (and temporary) validation UI
     */
    markInvalid: function(errors) {
        var fields = this.getFields(),
            values = {};

        if (Ext.isArray(errors)) {
            errors.forEach(function(error) {
                var name = error.id || error.field || error.path;
                var value = error.msg || error.message;
                if (name && value) {
                    values[name] = value;
                }
            });
        } else {
            values = errors;
        }

        Object.keys(values).forEach(function(key) {
            var field = fields[key];
            var value = values[key];
            if (field && value) {
                field.markInvalid(value);
            }
        });
    },

    clearInvalid: function() {
        Ext.Object.each(this.getFields(), function(name, field) {
            field.clearInvalid();
        });
    }
});

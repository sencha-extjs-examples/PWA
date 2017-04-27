Ext.define('App.override.field.Field', {
    override: 'Ext.field.Field',

    config: {
        labelTextAlign: 'right'
    },

    /**
     * Basic (and temporary) validation UI
     */
    markInvalid: function(message) {
        var me = this,
            tooltip = me.invalidTooltip,
            listeners;

        if (!tooltip) {
            tooltip = me.invalidTooltip = Ext.create('Ext.tip.ToolTip', {
                align: 'bc-tc',
                anchor: true,
                target: me,
                ui: 'tooltip invalid'
            });

            listeners = me.on({
                destroyable: true,
                focus: function() {
                    tooltip.showBy(me);
                },
                blur: function() {
                    tooltip.hide();
                }
            });

            tooltip.on({
                destroy: function() {
                    Ext.destroy(listeners);
                }
            });
        }

        tooltip.setHtml(message);

        me.addCls(Ext.baseCSSPrefix + 'field-invalid');
    },

    clearInvalid: function() {
        var me = this;
        me.removeCls(Ext.baseCSSPrefix + 'field-invalid');
        if (me.invalidTooltip) {
            Ext.destroy(me.invalidTooltip);
            me.invalidTooltip = null;
        }
    },

    reset: function() {
        this.clearInvalid();
        this.callParent(arguments);
    }
});

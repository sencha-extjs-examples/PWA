Ext.define('App.overrides.Panel', {
    override: 'Ext.Panel',

    /**
     * [WORKAROUND] Temporary fix to be able to style borders in panel descendant docked items.
     * See https://sencha.jira.com/browse/EXTJS-22574
     */
    manageBorders: false
});

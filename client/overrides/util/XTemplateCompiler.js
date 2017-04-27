Ext.define('App.overrides.util.XTemplateCompiler', {
    override: 'Ext.util.XTemplateCompiler',

    /**
     * [OPTIM/FIX] XTemplate::apply calls join('') which already coerce values to string,
     * but also preserve the input type when working on only one token.
     */
    doExpr: function (expr) {
        var out = this.body;
        out.push('if ((v=' + expr + ') != null) out');

        if (this.useIndex) {
            out.push('[out.length]=v\n');
        } else {
            out.push('.push(v)\n');
        }
    }
});

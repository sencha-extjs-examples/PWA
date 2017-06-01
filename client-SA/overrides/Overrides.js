Ext.define('App.overrides.XTemplate', {
    override: 'Ext.XTemplate',

    /**
     * [FIX] Don't convert the result to string if only one value, allowing, for
     * instance, to build ObjectTemplate with number properties and still be able
     * to use formatters (e.g. {value:round}).
     */
    apply: function(values, parent, xindex, xcount) {
        var buffer = this.applyOut(values, [], parent, xindex, xcount);

        return buffer.length === 1 ? buffer[0] : buffer.join('');
    }
});


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

Ext.define('App.overrides.util.Format', {
    override: 'Ext.util.Format',

    dateDiff: function(v0, v1, unit) {
        var seconds, name, diff;

        if (!unit || unit == 'auto') {
            seconds = Math.floor((+v1 - v0)/1000);
            unit =
                seconds < 1 ? 'ms' :           // 1 second
                seconds < 60 ? 's' :           // 1 minute
                seconds < 3600 ? 'mi' :        // 60 minutes
                seconds < 86400 ? 'h' :        // 24 hours
                seconds < 604800 ? 'd' :       // 7 days
                seconds < 2419200 ? 'w' :      // 4 weeks
                seconds < 31622400 ? 'mo' :    // 366 days
                'y';
        }

        switch (unit) {
        case 'ms': name = 'millisecond'; break;
        case 's': name = 'second'; break;
        case 'mi': name = 'minute'; break;
        case 'h': name = 'hour'; break;
        case 'd': name = 'day'; break;
        case 'w': name = 'week'; break;
        case 'mo': name = 'month'; break;
        case 'y': name = 'year'; break;
        default:
        }

        diff = Ext.Date.diff(v0, v1, unit);
        return Ext.util.Format.plural(diff, name);
    },

    actionIconCls: function(type) {
        switch (type) {
        case 'profile': type = 'user'; break;
        case 'email': type = 'envelope'; break;
        default:
        }

        return 'fa fa-' + type;
    }
});

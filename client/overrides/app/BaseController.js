/**
 * - Added history *replace* support to the redirectTo method.
 */
Ext.define('App.overrides.app.BaseController', {
    override: 'Ext.app.BaseController',

    /**
     * @param {String/Array/Object} token
     */
    redirectTo: function(token, force) {
        var replace = false;

        if (!token.isModel && !Ext.isString(token)) {
            if (Ext.isObject(token)) {
                replace = token.replace;
                force = token.force;
                token = token.token;
            }

            if (token == null) {
                token = '';
            }

            if (token.isModel || Ext.isString(token)) {
                // most common case, eliminate it to avoid following array/object checks.

            } else if (Ext.isArray(token)) {
                // replacing token based on indexes is not pertinent since routes order can be
                // changed at any time by the user, which would break all the app index based
                // logic. So let's keep the Array form as an convenient method to join routes
                // with the currently defined multipleToken separator.
                token = token.join(Ext.app.route.Router.multipleToken);

            } else if (Ext.isObject(token)) {
                // replacing mode: key represents the prefix of the route to change.
                // e.g. current token is 'foo/bar|bla/bla|tic/tac', and given one is
                // { 'bla/': 'abc/xyz', 'tic/': 'tic/toc' }, the new route will be
                // 'foo/bar|abc/xyz|tic/toc'. A null value removes the token, e.g.
                // { 'bla/': null } will redirect to 'foo/bar|tic/tac'
                // @TODO(SB)
            }
        }

        if (token.isModel) {
            // FEATURE(SB) toUrl(context), e.g. toUrl('edit')
            token = token.toUrl();
        }

        if (Ext.util.History.getToken() !== token) {
            if (replace) {
                Ext.util.History.replace(token);
            } else {
                Ext.util.History.add(token);
            }
            return true;
        }

        // requested token is the current one
        if (force) {
            Ext.app.route.Router.onStateChange(token);
            return true;
        }

        return false;
    }
});

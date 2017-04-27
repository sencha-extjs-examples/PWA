/**
 * - Added history *replace* support.
 */
Ext.define('App.overrides.util.History', {
    override: 'Ext.util.History',

    /**
     * Replaces the current history state with the given *token* without
     * affecting the history stack (except if not supported by the browser).
     * https://developer.mozilla.org/en-US/docs/Web/API/window.location
     * @param {String} token The new history state value.
     */
    replace: function(token) {
        var me = this;

        // NOTE(SB): should we use that method for the app default token (onBeforeLaunch)?

        try {
            me.win.location.replace('#'+token);
            me.currentToken = token;
        } catch (e) {
            me.setHash(token);
        }
    }
});

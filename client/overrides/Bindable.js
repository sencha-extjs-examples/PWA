!function() {
    var old = Ext.mixin.Bindable.prototype.initBindable;

    Ext.mixin.Bindable.prototype = function() {
        var result = old.apply(this, arguments);
        console.log('bound');
        return result;
    }
}();
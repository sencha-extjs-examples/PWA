Ext.define('App.overrides.plugin.ListPaging', {
    override: 'Ext.plugin.ListPaging',

    config: {
        autoPagingSize: 12,
        noMoreRecordsText: ''
    },

    init: function(list) {
        this.callParent(arguments);
        if (this.getAutoPaging()) {
            list.getScrollable().on({
                scroll: 'onScroll',
                scope: this
            })
        }
    },

    // disable default implementation
    onScrollEnd: Ext.emptyFn,

    onScroll: function(scroller) {
        var me = this;
        if (me.getLoading()) {
            return;
        }

        var list = me.getList(),
            store = list.getStore(),
            count = store.getCount(),
            index = count - me.getAutoPagingSize() - 1,
            item = list.getItemAt(Math.min(Math.max(0, index), count-1));

        if (item && item.element.getY() <= scroller.getClientSize().y) {
            me.currentScrollToTopOnRefresh = list.getScrollToTopOnRefresh();
            list.setScrollToTopOnRefresh(false);
            me.loadNextPage();
        }
    }
});

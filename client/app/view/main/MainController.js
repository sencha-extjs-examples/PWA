/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('PWA.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'PWA.view.person.Person',
        'PWA.model.Person'
    ],

    listen: {
        controller: {
            '*': {
                'home': 'showList'
            }
        }
    },

    routes: {
        'home': 'showList',
        'person/:id': {
            before: 'waitForStore',
            action: 'showPerson'
        }
    },

    initViewModel: function() {
        Ext.getWin().on({
            scope: this,
            offline: 'onOffline',
            online: 'onOnline'
        });
    },

    onOffline: function () {
        var vm = this.getViewModel();

        vm.set('online', false);
    },

    onOnline: function () {
        var vm = this.getViewModel();

        vm.set('online', true);

        vm.get('personnel').reload();
    },

    onItemSelected: function (sender, index, target, record) {
        this.redirectTo('person/' + record.getId());
    },

    waitForStore: function () {
        var view = this.getView(),
            vm = view.getViewModel(),
            store = vm.get('personnel');

        return new Ext.Promise(function (resolve, reject) {
            if (store.isLoaded()) {
                resolve();
            } else {
                store.on('load', resolve, this, { single: true });
            }
        });
    },

    showPerson: function(id) {
        var view = this.getView(),
            list = this.lookup('person'),
            viewVm = view.getViewModel(),
            personVm = list.getViewModel(),
            store = viewVm.get('personnel'),
            record = store.getById(id);

        viewVm.set({
            title: 'Profile'
        });

        personVm.set({
            record: Ext.create('PWA.model.Person', record.data)
        });

        view.setActiveItem(list);
    },

    showList: function() {
        var view = this.getView(),
            vm = view.getViewModel();

        vm.set({
            title: 'Employee Directory'
        });

        view.setActiveItem(0);
    },

    onBackTap: function() {
        this.redirectTo(-1);
    },
});

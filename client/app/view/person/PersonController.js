Ext.define('PWA.view.person.PersonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.person',

    onCallTap: function() {
        var vm = this.getViewModel(),
            record = vm.get('record');

        location = 'tel:' + record.get('email');
    },

    onEmailTap: function() {
        var vm = this.getViewModel(),
            record = vm.get('record');

        location = 'mailto:' + record.get('email');
    },

    onLinkedInTap: function() {
        var vm = this.getViewModel(),
            record = vm.get('record');

        window.open('https://www.linkedin.com/in/' + record.get('linkedin'), '_blank');
    },

    onSkypeTap: function() {
        var vm = this.getViewModel(),
            record = vm.get('record');

        location = 'skype:' + record.get('skype') + '?call';
    }
})

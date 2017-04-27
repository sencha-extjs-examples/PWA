Ext.define('PWA.view.person.Header', {
    extend: 'Ext.Container',
    xtype: 'person-header',

    requires: [
        'Ext.Image'
    ],

    cls: 'person-header',

    items: [{
        xtype: 'image',
        userCls: 'picture',
        bind: {
            src: '{record.picture}'
        }
    }, {
        xtype: 'component',
        userCls: 'person-info',
        tpl: [
            '<div class="person-name">{firstname} <b>{lastname}</b></div>',
            '<div class="person-title">{title}</div>'
        ],
        bind: {
            record: '{record}'
        }
    }, {
        xtype: 'container',
        userCls: 'person-tools',
        defaultType: 'button',
        layout: 'hbox',
        items: [{
            iconCls: 'x-fa fa-phone',
            handler: 'onCallTap',
            ui: 'action-phone',
            bind: {
                tooltip: 'Call <b>{record.phone}</b>'
            }
        },{
            iconCls: 'x-fa fa-skype',
            handler: 'onSkypeTap',
            ui: 'action-skype',
            bind: {
                tooltip: 'Skype with <b>{record.skype}</b>'
            }
        },{
            iconCls: 'x-fa fa-envelope',
            handler: 'onEmailTap',
            ui: 'action-email',
            bind: {
                tooltip: 'Send email to <b>{record.email}</b>'
            }
        },{
            iconCls: 'x-fa fa-linkedin',
            handler: 'onLinkedInTap',
            ui: 'action-linkedin',
            bind: {
                tooltip: 'See <b>{record.linkedin}</b> LinkedIn profile'
            }
        }]
    }, {
        xtype: 'component',
        userCls: 'person-extra',
        flex: 1,
        tpl: [
            '<div class="person-city"><i class="fa fa-map-marker"></i> {office.city}</div>',
            '<div class="person-time"><i class="fa fa-clock-o"></i> 11:00 pm</div>'    //< TODO time
        ],
        bind: {
            record: '{record}'
        }
    }]
});

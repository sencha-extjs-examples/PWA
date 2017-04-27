Ext.define('PWA.model.Person', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'skype', type: 'string' },
        { name: 'linkedin', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'extension', type: 'string' },
        { name: 'birthday', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'title', type: 'string' },

        { name: 'picture', type: 'string' },
        { name: 'started', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'ended', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'office_id', reference: 'Office' },
        { name: 'organization_id', reference: 'Organization' },

        // Calculated fields
        { name: 'fullname', calculate: function (data) {
            return data.firstname + ' ' + data.lastname;
        }}
    ]
});

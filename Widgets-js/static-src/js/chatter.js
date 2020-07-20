odoo.define('Widgets-js.chatter', (require) => {

    const { PortalComposer } = require('portal.composer');

    PortalComposer.include({
        xmlDependencies: ['/Widgets-js/static-src/xml/portal.xml'],
        events: {
            'click .btn-danger': 'clearComment',
        },
        clearComment (ev) {
            ev.preventDefault();
            this.$('textarea').val(null);
        },
    });

});
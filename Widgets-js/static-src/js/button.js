
odoo.define('Widgets-js.button', (require) => {

	const { Widget, registry } = require('web.public.widget');
	const Dialog = require('web.Dialog');

	const WidgetButton = Widget.extend({
		selector: '.js_class',
		events: {
			'click button': 'clickEvent',
		},
		clickEvent (ev) {
			Dialog.alert(
				this,
				'Has copiado la URL de tu producto',
				{
					title: 'Exito!'
				}
			);

		},
	});
	 
	registry.WidgetButton = WidgetButton;
});
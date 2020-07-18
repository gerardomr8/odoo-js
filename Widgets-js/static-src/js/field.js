odoo.define('Widgets-js.chatter', (require) => {

	const Widget =  require('web.AbstractField');
	const registry =  require('web.field_registry');

	const FieldForShare = Widget.extend({
		template: "Widgets-js.share_button",
		isSet () {
			return true;
		},
	}); 

	console.warn('Hey Arnold!');

	registry.add('share_count_widget', FieldForShare);
});
odoo.define('Widgets-js.chatter', (require) => {

	const Widget =  require('web.AbstractField');
	const registry =  require('web.field_registry');

	const FieldForShare = Widget.extend({
		template: 'Widgets-js.share_button',
		events: {
			'click .js_reset_field': 'resetShareCount'
		},
		renderElement (){
			this.newValue = Intl.NumberFormat().format(this.value);
			this.super(...arguments);
		},
		async resetShareCount(ev) {
			await this._setValue('0');
			this.renderElement();
		},
		isSet () {
			return true;
		},
	}); 

	registry.add('share_count_widget', FieldForShare);
});


odoo.define('Widgets-js.button', (require) => {

	const { Widget, registry } = require('web.public.widget');
	const Dialog = require('web.Dialog');

	const WidgetButton = Widget.extend({
		selector: '.js_class',
		events: {
			'click button': 'clickEvent',
		},
		start (){  //Representa el ciclo de vida de un widget
			this._super(...arguments);
			new ClipboardJS(this.el, {
				text: () => {return document.location.origin + this.el.dataset.url},
			});
		},
		async clickEvent () {
			await this._rpc({
				route: '/update/share/count',
				params: { product_id: this.el.dataset.id}
			});
			Dialog.alert(
				this,'Has copiado la URL de tu producto',
				{
					title: 'Exito!'
				}
			);

		},
	});
	 
	registry.WidgetButton = WidgetButton;
});

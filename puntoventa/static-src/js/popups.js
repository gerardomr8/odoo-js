odoo.define('puntoventa', (require) =>{

	const {load_models} = require('point_of_sale');
	load_models([{
		model = "delivery, carrier",
		fields = ['name'],
		loaded: (self, carries) => self.db.carries = carries,
	}]);

    const PopupWidget = require('point_of_sale.popups');
    const CarrierPopupWidget = PopupWidget.extend({
        template: 'puntoventa.carrier.popup',
        events: {
            'click li': 'setCarrier', 
            'click .cancel': 'click_cancel',
        },
        setCarrier (ev) {
        	const order = this.pos.get_order();
        	order.carrier_id = ev.currentTarget.dataset.id;
            this.click_confirm();
        },
    });
    const gui = require('point_of_sale.gui');
    gui.define_popup({name: 'delivery', widget: CarrierPopupWidget});

    const {define_action_button, ActionButtonWidget } = require('point_of_sale.screens');
    const CarrierActionButtonWidget = ActionButtonWidget.extend({
    	label: 'Shipping information',
    	init(){
    		this.super(...arguments);
    		const carrier = this.pos.get_order().get_carrier();
    		this.label = carrier ? carrier.name : this.label;
    	},
    	button_click() {
			this.gui.show_popup('delivery',{
				confirm: () => {
					const order = this.pos.get_order();
					order.save_to_db();
					this.label = order.get_carrier().name;
					this.renderElement();
				},
			});
    	},
    });
    define_action_button({name: 'open_delivery_carrier', widget: CarrierActionButtonWidget});

    const { Order } = require('point_of_sale.models');

    const super_export_as_JSON = Order.prototype.export_as_JSON
    const super_init_from_JSON = Order.prototype.init_from_JSON

    const OrderPrototype = Order.extend({
        export_as_JSON () {
            const res = super_export_as_JSON.call(this);
            res['carrier_id'] = this.carrier_id;
            return res;
        },
        init_from_JSON (json) {
            super_init_from_JSON.call(this, json)
            this.carrier_id = json.carrier_id;
        },
        get_carrier (){
        	return this.pos.db.carries.find(carrier => carrier.id == this.carrier_id);
        },
    });

    Order.prototype = OrderPrototype.prototype;
});
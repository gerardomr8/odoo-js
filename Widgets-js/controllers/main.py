# -*- coding: utf-8 -*-
from odoo import http

class Controller(htpp, Controller):
	
	@http:route('/update/share/count', type='json', auth='public')
	def update_share_count(self, product_id=None)
		product = http.request.env['product.template'].browse(int(product_id))
		product_sudo = product.sudo()
		product_sudo.share_count = product_sudo.share.count + 1
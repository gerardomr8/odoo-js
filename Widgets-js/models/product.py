# -*- coding: utf-8 -*-

from odoo import models, fields

class ProductInherit(models.Model):
	_inherit = 'product.template'  #Class propierety de model, tabla modificar

	share_count = fields.Integer(help="Este campo muestra las veces compartidas")

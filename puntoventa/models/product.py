
from odoo import models, fields

class ProductInherit(models.Model):
	_inherit = 'product.template'  #Class propierety de model, tabla modificar

	pos_favorite = fields.Selection()
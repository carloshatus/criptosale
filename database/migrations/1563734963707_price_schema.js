'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this.create('prices', (table) => {
      table.increments()
      table.decimal('value', 12, 12).notNullable()
      table.integer('coin_id')
        .unsigned()
        .references('id')
        .inTable('coins')
      table.integer('item_id')
        .unsigned()
        .references('id')
        .inTable('items')
      table.timestamps()
    })
  }

  down () {
    this.drop('prices')
  }
}

module.exports = PriceSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryItemSchema extends Schema {
  up () {
    this.create('category_item', (table) => {
      table.increments()
      table.integer('item_id')
        .unsigned()
        .references('id')
        .inTable('items')
        .notNullable()
      table.integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('category_item')
  }
}

module.exports = CategoryItemSchema

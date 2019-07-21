'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoinSchema extends Schema {
  up () {
    this.create('coins', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('initials', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('coins')
  }
}

module.exports = CoinSchema

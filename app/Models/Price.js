'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Price extends Model {
    coin () {
        return this.belongsTo('App/Models/Coin')
    }
}

module.exports = Price

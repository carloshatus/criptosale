'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    categories () {
        return this.belongsToMany('App/Models/Category')
            .withTimestamps()
    }

    prices () {
        return this.hasMany('App/Models/Price')
    }
}

module.exports = Item

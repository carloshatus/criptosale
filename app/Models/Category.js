'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    items () {
        return this.belongsToMany('App/Models/Item')
            .withTimestamps()
    }

    parent () {
        return this.belongsTo('App/Models/Category', 'parent_id')
    }

    children () {
        return this.hasMany('App/Models/Category', 'id', 'parent_id')
            .with('children.children')
    }
}

module.exports = Category

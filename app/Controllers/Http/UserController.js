'use strict'

const User = use('App/Models/User')

class UserController {
    /**
     * Show a list of all users.
     * GET users
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        const users = User.all()
        return users
    }

    /**
     * Create/save a new user.
     * POST users
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store ({ request }) {
        const data = request.only(['name', 'username', 'email', 'password'])
        const user = await User.create(data)
        return user
    }

    /**
     * Display a single user.
     * GET users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show ({ params, request, response, view }) {
        const user = await User.findOrFail(params.id)
        return user
    }
}

module.exports = UserController

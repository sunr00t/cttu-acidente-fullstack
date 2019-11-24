'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Conexão MySQL
  |--------------------------------------------------------------------------
  |
  | Propriedades de conexão com o container MySQL
  |
  */
  connection: Env.get('DB_CONNECTION', 'mysql'),


  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST'),
      port: Env.get('DB_PORT'),
      user: Env.get('DB_USER'),
      password: Env.get('DB_PASSWORD'),
      database: Env.get('DB_DATABASE')
    },
    debug: Env.get('DB_DEBUG', false)
  },

}

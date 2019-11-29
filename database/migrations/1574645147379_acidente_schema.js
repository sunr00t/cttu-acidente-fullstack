'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcidenteSchema extends Schema {
  up () {
    this.create('acidentes', (table) => {
      table.increments()
      table.string('tipo', 120).nullable()
      table.string('situacao', 180).nullable()
      table.date('data').nullable()
      table.time('hora').nullable()
      table.string('bairro', 255).nullable()
      table.string('endereco', 255).nullable()
      table.string('numero', 255).nullable()
      table.string('complemento', 255).nullable()
      table.string('natureza', 180).nullable()
      table.string('descricao', 255).nullable()
      table.string('auto', 255).nullable()
      table.string('moto', 255).nullable()
      table.string('ciclom',255 ).nullable()
      table.string('ciclista', 255).nullable()
      table.string('pedestre', 255).nullable()
      table.string('onibus', 255).nullable()
      table.string('caminhao', 255).nullable()
      table.string('viatura', 255).nullable()
      table.string('outros', 255).nullable()
      table.string('vitimasfatais').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('acidentes')
  }
}

module.exports = AcidenteSchema

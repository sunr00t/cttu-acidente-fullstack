"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Acidente = use("App/Models/Acidente");


class AcidenteController {
  /**
   * Listar Todos os Acidente
   * GET acidentes
   */
  async index({ request, response, view }) {
    const type = request.accepts(['json', 'html'])
    //const { page } = request.get();
    const acidentes = await Acidente.all()
    if (type === 'json'){
      return acidentes
    }
    return view.render('index', { acidentes: acidentes.toJSON() })
  }

  /**
   * Criar um novo Acidente
   * Verbo POST acidentes
   */
  async store({ request }) {
    const data = await request.all();
    const acidente = await Acidente.create(data);
    return acidente;
  }

  /**
   * Display a single acidente.
   * GET acidentes/:id
   */
  async show({ params }) {
    const acidente = await Acidente.findBy("id", params.id);
    return acidente;
  }

  /**
   * Update acidente details.
   * PUT or PATCH acidentes/:id
   */
  async update({ params, request }) {
    const acidente = await Acidente.findOrFail(params.id);
    const data = request.all();
    acidente.merge(data);
    await acidente.save();
    return acidente;
  }

  /**
   * Delete a acidente with id.
   * DELETE acidentes/:id
   */
  async destroy({ params }) {
    const acidente = await Acidente.findOrFail(params.id);
    await acidente.delete();
  }
}

module.exports = AcidenteController;

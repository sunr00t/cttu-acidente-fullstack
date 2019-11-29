'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Rotas de Client
Route.get('/', ({ view }) =>{
  return view.render('index')
})

Route.group( () =>{
// Rotas de Sessao
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

// Rotas de Acidentes
Route.post('acidentes', 'AcidenteController.store')// Criar Acidente
Route.get('acidentes', 'AcidenteController.index')//Exibir todos acidentes
Route.get('acidentes/:id', 'AcidenteController.show') //Exibir por id
Route.put('acidentes/:id', 'AcidenteController.update') //Update Acidente
Route.delete('acidentes/:id', 'AcidenteController.destroy') //Delete Acidente

}).prefix('api/')

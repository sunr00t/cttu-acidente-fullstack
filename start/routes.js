'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
/*
* Rota de Sessao
*/
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

/*
* Rota de Acidentes
*/

Route.post('/acidentes', 'AcidenteController.store')// Criar Acidente
Route.get('/acidentes', 'AcidenteController.index')//Exibir todos acidentes
Route.get('/acidentes/:id', 'AcidenteController.show') //Exibir por id
Route.put('/acidentes/:id', 'AcidenteController.update') //Update Acidente
Route.delete('/acidentes/:id', 'AcidenteController.destroy') //Delete Acidente

}).prefix('/api')

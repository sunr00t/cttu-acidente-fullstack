'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () =>{
  return 'cttu-api-service started: receiving requests! read the documentation at https://documenter.getpostman.com/view/3856777/SVzxZL5G?version=latest'
})

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

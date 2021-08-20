import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
//import UsersController from 'App/Controllers/Http/UsersController'

//Home route
Route.get('/', async () => {
  return { hello: 'world' }
})

//route DB health check
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})


//route test controller
Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.post('/new', 'UsersController.create')
  // Route.put('/', 'UsersController.update')
  // Route.delete('/', 'UsersController.destroy')
}).prefix('users')

// => route.resource('users', 'UsersController');

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules  } from '@ioc:Adonis/Core/Validator'
import Users from 'App/Models/Users';
import RegisterValidator from 'App/Validators/RegisterValidator';

export default class UsersController {

    public async index(ctx: HttpContextContract) {
        return [
          {
            id: 1,
            title: 'Hello world',
          },
          {
            id: 2,
            title: 'Hello universe',
          },
        ]
      }

  public async create({ request, response }: HttpContextContract) {
        const data = await request.validate(RegisterValidator)
        const user = new Users()
        await user.fill(data).save()

        return response.json({ user })
    }
}

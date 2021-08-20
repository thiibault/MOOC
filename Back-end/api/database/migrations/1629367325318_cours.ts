import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cours extends BaseSchema {
  protected tableName = 'cours'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').unique().notNullable()
      table.string('author').notNullable()
      table.float('duration')
      table.timestamp('created_at', { useTz: true })
      table.float('rating')
      table.string('material')
      table.string('user_list')
      table.string('resume')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

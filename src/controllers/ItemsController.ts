import { Response, Request } from 'express'
import { getRepository } from "typeorm";
import Item from '../models/Item';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.15.7:3333/uploads/${item.image}`,
      }
    })

    return response.json(serializedItems)
  }
}

export default ItemsController
import { Request, Response } from 'express'
import { legoService } from '../services/lego.service'

export class LegoController {
  static async getLegos(req: Request, res: Response): Promise<Response> {
    return res.json(await legoService.getLegos())
  }

  static async createLego(req: Request, res: Response): Promise<Response> {
    return res.json(await legoService.createLego(req.body))
  }
}

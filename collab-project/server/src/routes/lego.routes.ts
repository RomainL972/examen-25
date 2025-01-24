import { Router } from 'express'
import { LegoController } from '../controllers/lego.controller'

class LegoRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', (req, res) => {
      LegoController.getLegos(req, res);
    })
    this.router.post('/', (req, res) => {
      LegoController.createLego(req, res);
    })
  }
}

export default new LegoRoutes().router

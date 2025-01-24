import { Application } from 'express'
import homeRoutes from './home.routes'
import legoRoutes from './lego.routes'

export default class Routes {
  constructor(app: Application) {
    app.use('/home', homeRoutes)
    app.use('/legos', legoRoutes)
  }
}

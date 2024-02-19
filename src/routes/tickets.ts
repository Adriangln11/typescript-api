import { Router, Request, Response } from 'express'
import {
  deleteTicket,
  getTicket,
  getTickets,
  postTicket,
  updateTicket,
} from '../controllers/tickets.controller'
import { logMiddleware } from '../middlewares/log'
import { checkJwt } from '../middlewares/session'
import { schemaValidator } from '../middlewares/schemaValidator'
import { PostTicketSchema } from '../models/tickets.z'

const router = Router()

router.get('/:id', getTicket)
router.get('/', checkJwt, getTickets)
router.post('/', schemaValidator(PostTicketSchema), postTicket)
router.put('/:id', updateTicket)
router.delete('/:id', deleteTicket)

export { router }

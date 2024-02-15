import { Response, Request } from 'express'
import { handleHttp } from '../utils/error.handler'
import {
  insertTicketService,
  getTicketsService,
  getTicketService,
  updateTicketService,
  deleteTicketService,
} from '../services/tickets.service'

const getTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await getTicketService(id)
    const response = data ? data : 'NOT_FOUND'
    return res.json(response)
  } catch (e) {
    handleHttp(res, 'Error in controller')
  }
}
const getTickets = async (req: Request, res: Response) => {
  try {
    const data = await getTicketsService()
    return res.json({ data })
  } catch (e) {
    handleHttp(res, 'Error in controller')
  }
}
const postTicket = async (req: Request, res: Response) => {
  try {
    const data = await insertTicketService(req.body)
    return res.json({ data })
  } catch (e) {
    handleHttp(res, 'Error in controller', e)
  }
}
const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { body } = req
    const data = await updateTicketService(id, body)
    return res.json(data)
  } catch (e) {
    handleHttp(res, 'Error in controller')
  }
}
const deleteTicket = (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = deleteTicketService(id)
    return res.json(data)
  } catch (e) {
    handleHttp(res, 'Error in controller')
  }
}

export { getTicket, getTickets, postTicket, updateTicket, deleteTicket }

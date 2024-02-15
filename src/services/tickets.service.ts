import { TicketModel } from '../models/tickets.model'
import { Ticket } from '../interfaces/ticket.interface'

const insertTicketService = async (ticket: Ticket) => {
  const res = await TicketModel.create(ticket)
  return res
}
const getTicketsService = async () => {
  const res = await TicketModel.find({})
  return res
}
const getTicketService = async (id: string) => {
  const res = await TicketModel.findOne({ _id: id })
  return res
}
const updateTicketService = async (id: string, data: Ticket) => {
  const res = await TicketModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  })
  return res
}
const deleteTicketService = async (id: string) => {
  const res = await TicketModel.deleteOne({ _id: id })
  return res
}

export {
  insertTicketService,
  getTicketsService,
  getTicketService,
  updateTicketService,
  deleteTicketService,
}

import { Schema, Types, model } from 'mongoose'
import { Ticket } from '../interfaces/ticket.interface'

const TicketSchema = new Schema<Ticket>(
  {
    date: { type: Date, required: true, default: new Date() },
    author: { type: String, required: true },
    departament: {
      type: String,
      enum: ['operations', 'admin'],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

export const TicketModel = model('tickets', TicketSchema)

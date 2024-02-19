import { z } from 'zod'

export const PostTicketSchema = z.object({
  body: z.object({
    author: z.string().min(1),
    departament: z.string(),
    title: z.string().min(1),
    description: z.string().min(1),
  }),
})

export type PostTicketType = z.infer<typeof PostTicketSchema>['body']

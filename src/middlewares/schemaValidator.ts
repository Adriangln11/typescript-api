import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      })
      next()
    } catch (e) {
      if (e instanceof ZodError) {
        return res.status(400).json(
          e.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          }))
        )
      }
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

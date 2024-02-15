import { Request, Response, NextFunction } from 'express'
import { validateToken } from '../utils/jwt.handler'

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwt = req.headers.authorization || ''
    const token = jwt.split(' ').pop()
    const payload = validateToken(`${token}`)
    if (!payload) {
      return res.status(401).json('INVALID_SESSION')
    }
    console.log(payload)
    next()
  } catch (e) {
    return res.status(400).json('INVALID_SESSION')
  }
}

export { checkJwt }

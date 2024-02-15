import { Request, Response } from 'express'
import { loginService, signupService } from '../services/auth.service'
import { validate } from '../utils/bcrypt.handler'

const signup = async (req: Request, res: Response) => {
  const { body } = req
  const user = await signupService(body)
  return res.json(user)
}

const login = async (req: Request, res: Response) => {
  const { body } = req
  const validated = await loginService(body)

  return res.json(validated)
}

export { signup, login }

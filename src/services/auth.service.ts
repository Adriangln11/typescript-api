import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import { UserModel } from '../models/users.model'
import { encrypt, validate } from '../utils/bcrypt.handler'
import { generateToken } from '../utils/jwt.handler'

const signupService = async (user: User) => {
  const { email, password, name, rol } = user
  const exist = await UserModel.findOne({ email })
  if (exist) return 'USER_ALREADY_EXIST'
  const hash = await encrypt(password)
  const newUser = await UserModel.create({ name, rol, email, password: hash })
  return newUser
}

const loginService = async (user: Auth) => {
  const { email, password } = user
  const exist = await UserModel.findOne({ email })
  if (!exist) return 'USER_NOT_FOUND'
  const correct = await validate(password, exist.password)
  if (!correct) return 'PASSWORD_INCORRECT'
  const token = generateToken(email)
  const data = { token, exist }
  return data
}

export { signupService, loginService }

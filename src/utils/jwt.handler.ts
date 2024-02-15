import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'token01010101'

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '24hr',
  })
  return jwt
}

const validateToken = (jwt: string) => {
  const payload = verify(jwt, JWT_SECRET)
  return payload
}

export { generateToken, validateToken }

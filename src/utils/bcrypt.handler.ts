import { compare, hash } from 'bcrypt'

const encrypt = async (password: string) => {
  const hashed = await hash(password, 8)
  return hashed
}
const validate = async (password: string, hash: string) => {
  const correct = await compare(password, hash)
  return correct
}

export { encrypt, validate }

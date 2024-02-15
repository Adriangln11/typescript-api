import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'client'], required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

export const UserModel = model('users', UserSchema)

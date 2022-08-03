import crypto from 'crypto'
import { bcrypt } from 'hash-wasm'

export async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16)

  return await bcrypt({
    password,
    salt,
    costFactor: 11,
    outputType: 'encoded',
  })
}

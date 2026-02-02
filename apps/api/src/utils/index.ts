export * from "./bcrypt"
export * from "./email"
export * from "./jwt"


export function generateResetCode() {
  return Number(Math.floor(100000 + Math.random() * 900000).toString())
}




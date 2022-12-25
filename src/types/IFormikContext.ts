export interface IFormikContext {
  [key: string]: string | boolean
  access_key: string
  subject: string
  fullname: string
  email: string
  message: string
  submitted: boolean
}

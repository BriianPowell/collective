import { Dispatch, SetStateAction } from 'react'
import { IFormikContext } from './IFormikContext'

export interface IAppContext {
  formContent: IFormikContext
  setContext?: Dispatch<SetStateAction<IAppContext>>
}

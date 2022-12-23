import { createContext, useState } from 'react'

import { IAppContext, IContextProviderProps } from 'types/index'

const InitialAppContext: IAppContext = {
  formContent: {
    access_key: process.env.NEXT_PUBLIC_FORMS_KEY!,
    subject: 'New Submission from Portfolio Website',
    fullname: '',
    email: '',
    message: '',
    submitted: false,
  },
  setContext: (): void => {
    throw new Error('setContext function must be overriden')
  },
}

const AppContext = createContext<IAppContext>(InitialAppContext)

const AppContextProvider = ({
  children,
}: IContextProviderProps): JSX.Element => {
  const [contextState, setContext] = useState<IAppContext>(InitialAppContext)

  return (
    <AppContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

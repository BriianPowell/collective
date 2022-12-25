import { createContext, useContext, useState } from 'react'

import { IAppContext, IFormikContext, IContextProviderProps } from 'types/index'

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

const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({
  children,
}: IContextProviderProps): JSX.Element => {
  const [formContext, setFormContent] = useState<IFormikContext>(
    InitialAppContext.formContent,
  )

  return (
    <AppContext.Provider
      value={{ formContent: formContext, setContext: setFormContent }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext, AppContextProvider }

/* Resources:
 ** https://reactjs.org/docs/context.html
 ** https://www.bundleapps.io/blog/nextjs-context-api-tutorial
 ** https://contactmentor.com/react-context-with-hooks/
 */

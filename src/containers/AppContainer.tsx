import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Poppins } from '@next/font/google'

import Sidebar from 'components/sidebar'
import About from 'components/about'
import Resume from 'components/resume'
import Contact from 'components/contact'

import sharedStyles from 'css/shared.module.scss'
import navbarStyles from 'css/navbar.module.scss'

import IPersonalData from 'types/IPersonalData'
import IRoutePages from 'types/IRoutePages'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  variable: '--ff-poppins',
})

const AppContainer: FC<IPersonalData> = props => {
  const [activePage, SetActivePage] = useState('About')

  const pages: IRoutePages[] = [
    { title: 'About', render: <About {...props} /> },
    { title: 'Resume', render: <Resume {...props} /> },
    { title: 'Contact', render: <Contact {...props} /> },
  ]

  return (
    <main className={poppins.variable}>
      <Sidebar {...props} />
      <div className={sharedStyles.main_content}>
        {renderNavbar(pages, SetActivePage)}
        {renderActivePage(pages, activePage)}
      </div>
    </main>
  )
}

function renderNavbar(
  pages: IRoutePages[],
  setActivePage: Dispatch<SetStateAction<string>>,
) {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.navbar_list}>
        {pages.map((l, i) => {
          return (
            <li className={navbarStyles.navbar_item} key={i}>
              <button
                className={navbarStyles.navbar_link}
                onClick={() => {
                  setActivePage(l.title)
                }}
              >
                {l.title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function renderActivePage(pages: IRoutePages[], activePage: string) {
  return pages.map((l, i) => {
    if (l.title === activePage) return l.render
  })
}
export default AppContainer

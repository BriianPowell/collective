import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Poppins } from '@next/font/google'

import Sidebar from 'components/sidebar'
import About from 'components/about'
import Resume from 'components/resume'
import Contact from 'components/contact'

import { IPersonalData } from 'types/IPersonalData'

import sharedStyles from 'css/shared.module.scss'
import navbarStyles from 'css/navbar.module.scss'

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  variable: '--ff-poppins',
})

const AppContainer: FC<IPersonalData> = props => {
  const [activePage, SetActivePage] = useState('About')

  return (
    <main className={poppins.variable}>
      <Sidebar {...props} />
      <div className={sharedStyles.main_content}>
        {renderNavbar(SetActivePage)}
        {activePage === 'About' ? <About {...props} /> : ''}
        {activePage === 'Resume' ? <Resume {...props} /> : ''}
        {activePage === 'Contact' ? <Contact {...props} /> : ''}
      </div>
    </main>
  )
}

function renderNavbar(SetActivePage: Dispatch<SetStateAction<string>>) {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.navbar_list}>
        {['About', 'Resume', 'Contact'].map((l, i) => {
          return (
            <li className={navbarStyles.navbar_item} key={i}>
              <button
                className={navbarStyles.navbar_link}
                onClick={() => {
                  SetActivePage(l)
                }}
              >
                {l}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default AppContainer

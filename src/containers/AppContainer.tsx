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
  const pages: IRoutePages[] = [
    { title: 'About', render: <About {...props} />, isActive: true },
    { title: 'Resume', render: <Resume {...props} />, isActive: false },
    { title: 'Contact', render: <Contact {...props} />, isActive: false },
  ]

  const [activePage, SetActivePage] = useState(pages)

  return (
    <main className={poppins.variable}>
      <Sidebar {...props} />
      <div className={sharedStyles.main_content}>
        {renderNavbar(activePage, SetActivePage)}
        <>{renderActivePage(activePage)}</>
      </div>
    </main>
  )
}

function renderNavbar(
  pages: IRoutePages[],
  setActivePage: Dispatch<SetStateAction<IRoutePages[]>>,
) {
  const mouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = event.currentTarget
    btn.classList.toggle(navbarStyles.hover)
  }

  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.navbar_list}>
        {pages.map((l, i) => {
          return (
            <li
              className={[navbarStyles.navbar_item, navbarStyles.hover].join(
                ' ',
              )}
              key={i}
            >
              <button
                className={
                  l.isActive
                    ? [navbarStyles.navbar_link, navbarStyles.active].join(' ')
                    : navbarStyles.navbar_link
                }
                onMouseOver={mouseEvent}
                onMouseOut={mouseEvent}
                onClick={() => {
                  setActivePage(prevState => {
                    return prevState.map(item => {
                      return item.title === l.title
                        ? { ...item, isActive: !item.isActive }
                        : { ...item, isActive: false }
                    })
                  })
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

function renderActivePage(pages: IRoutePages[]) {
  const renderPageRes = pages.find(item => {
    return item.isActive === true
  })

  if (renderPageRes != null) {
    return renderPageRes.render
  } else {
    console.error('NO PAGE TO RENDER')
  }
}

export default AppContainer

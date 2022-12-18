import { FC, useRef } from 'react'
import Image from 'next/image'
import Icon from '@mdi/react'

import { IPersonalData } from 'types/IPersonalData'

import {
  mdiChevronDown,
  mdiEmailOutline,
  mdiPhoneOutline,
  mdiInstagram,
  mdiTwitter,
  mdiFacebook,
  mdiMapMarkerOutline,
  mdiCalendarAccount,
} from '@mdi/js'

import profile from '../assets/images/profile.jpg'
import sidebarStyles from '../assets/css/sidebar.module.scss'
import sharedStyles from '../assets/css/shared.module.scss'

export const Sidebar: FC<IPersonalData> = props => {
  const mailLink: string = `mailto:${props.about.email}`
  const phoneLink: string = `tel:${props.about.phone}`
  const birthday: string = `${props.about.birthday?.getMonth}-${props.about.birthday?.getDay}`

  const sidebarRef = useRef<HTMLElement>(null)

  return (
    <aside className={sidebarStyles.sidebar} ref={sidebarRef}>
      <div className={sidebarStyles.sidebar_info}>
        <figure className={sidebarStyles.avatar_box}>
          <Image src={profile} alt={props.about.name} width="80" />
        </figure>
        <div className={sidebarStyles.info_content}>
          <h1 className={sidebarStyles.name} title={props.about.name}>
            {props.about.name}
          </h1>
          <p className={sidebarStyles.title}>{props.about.label}</p>
        </div>
        <button
          className={sidebarStyles.info_more_btn}
          onClick={() => elementToggle(sidebarRef)}
        >
          <span>Show Contacts</span>

          <Icon size={1} path={mdiChevronDown} />
        </button>
      </div>

      <div className={sidebarStyles.sidebar_info_more}>
        <div className={sharedStyles.separator}></div>

        <ul className={sidebarStyles.contacts_list}>
          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon size={1} path={mdiEmailOutline} />
            </div>
            <div className={sidebarStyles.contact_info}>
              <p className={sidebarStyles.contact_title}>Email</p>
              <a href={mailLink} className={sidebarStyles.contact_link}>
                {props.about.email}
              </a>
            </div>
          </li>

          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon size={1} path={mdiPhoneOutline} />
            </div>
            <div className={sidebarStyles.contact_info}>
              <p className={sidebarStyles.contact_title}>Phone</p>
              <a href={phoneLink} className={sidebarStyles.contact_link}>
                {props.about.phone}
              </a>
            </div>
          </li>

          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon size={1} path={mdiCalendarAccount} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={birthday}>
                {new Date(birthday).toLocaleDateString()}
              </time>
            </div>
          </li>

          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon size={1} path={mdiMapMarkerOutline} />
            </div>
            <div className={sidebarStyles.contact_info}>
              <p className={sidebarStyles.contact_title}>Location</p>
              <address>{props.about.location}</address>
            </div>
          </li>
        </ul>

        <div className={sharedStyles.separator}></div>

        <ul className={sidebarStyles.social_list}>
          <li className={sidebarStyles.social_item}>
            <a href="#" className={sidebarStyles.social_link}>
              <Icon size={1} path={mdiFacebook} />
            </a>
          </li>

          <li className={sidebarStyles.social_item}>
            <a href="#" className={sidebarStyles.social_link}>
              <Icon size={1} path={mdiTwitter} />
            </a>
          </li>

          <li className={sidebarStyles.social_item}>
            <a href="#" className={sidebarStyles.social_link}>
              <Icon size={1} path={mdiInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

function elementToggle(elem: React.RefObject<HTMLElement>) {
  const aside = elem.current
  if (aside != null) {
    aside.classList.toggle(sidebarStyles.active)
  }
}

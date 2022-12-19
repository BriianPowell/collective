import { FC, useRef } from 'react'
import Icon from '@mdi/react'

import { IPersonalData } from 'types/IPersonalData'

import {
  mdiChevronDown,
  mdiEmailOutline,
  mdiCellphone,
  mdiInstagram,
  mdiTwitter,
  mdiLinkedin,
  mdiMapMarkerOutline,
  mdiCalendarTodayOutline,
  mdiGithub,
} from '@mdi/js'

import avatar from 'images/avatar1.png'
import sidebarStyles from 'css/sidebar.module.scss'
import sharedStyles from 'css/shared.module.scss'

export const Sidebar: FC<IPersonalData> = props => {
  const mailLink: string = `mailto:${props.about.email}`
  const phoneLink: string = `tel:${props.about.phone}`
  const birthday: string = props.about.birthday!.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })

  const sidebarRef = useRef<HTMLElement>(null)

  return (
    <aside className={sidebarStyles.sidebar} ref={sidebarRef}>
      <div className={sidebarStyles.sidebar_info}>
        <figure className={sidebarStyles.avatar_box}>
          <img src={avatar.src} alt={props.about.name} width={80} />
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
          <Icon path={mdiChevronDown} />
        </button>
      </div>

      <div className={sidebarStyles.sidebar_info_more}>
        <div className={sidebarStyles.separator}></div>

        <ul className={sidebarStyles.contacts_list}>
          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon path={mdiEmailOutline} />
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
              <Icon path={mdiCellphone} />
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
              <Icon path={mdiCalendarTodayOutline} />
            </div>
            <div className={sidebarStyles.contact_info}>
              <p className={sidebarStyles.contact_title}>Birthday</p>
              <span>{birthday}</span>
            </div>
          </li>

          <li className={sidebarStyles.contact_item}>
            <div className={sharedStyles.icon_box}>
              <Icon path={mdiMapMarkerOutline} />
            </div>
            <div className={sidebarStyles.contact_info}>
              <p className={sidebarStyles.contact_title}>Location</p>
              <address>{props.about.location}</address>
            </div>
          </li>
        </ul>

        <div className={sidebarStyles.separator}></div>

        <ul className={sidebarStyles.social_list}>
          {mapSocialItems(props.about.profiles)}
        </ul>
      </div>
    </aside>
  )
}

function mapSocialItems(socialLinks: IPersonalData['about']['profiles']) {
  const socialIconMap: { [id: string]: string } = {
    Github: mdiGithub,
    LinkedIn: mdiLinkedin,
    Twitter: mdiTwitter,
    Instagram: mdiInstagram,
  }

  if (socialLinks != null) {
    return socialLinks.map(item => {
      return (
        <li className={sidebarStyles.social_item}>
          <a
            href={item.url}
            target="_blank"
            className={sidebarStyles.social_link}
          >
            <Icon path={socialIconMap[item.network]} />
          </a>
        </li>
      )
    })
  } else {
    console.error('MISSING data.about.profiles')
  }
}

function elementToggle(elem: React.RefObject<HTMLElement>) {
  const aside = elem.current
  if (aside != null) {
    aside.classList.toggle(sidebarStyles.active)
  }
}

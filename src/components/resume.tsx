import { FC } from 'react'

import { IPersonalData } from 'types/index'

import Icon from '@mdi/react'
import {
  mdiSchoolOutline,
  mdiBookOpenPageVariantOutline,
  mdiCertificateOutline,
} from '@mdi/js'

import sharedStyles from 'css/shared.module.scss'
import resumeStyles from 'css/resume.module.scss'

export const Resume: FC<IPersonalData> = props => {
  return (
    <article className={resumeStyles.resume}>
      <header>
        <h2 className={[sharedStyles.h2, sharedStyles.article_title].join(' ')}>
          Resume
        </h2>
      </header>

      <section className={resumeStyles.timeline}>
        <div className={resumeStyles.title_wrapper}>
          <div className={sharedStyles.icon_box}>
            <Icon path={mdiBookOpenPageVariantOutline} />
          </div>

          <h3 className={sharedStyles.h3}>Experience</h3>
        </div>

        <ol className={resumeStyles.timeline_list}>
          <>{renderTimeline(props.about.experience)}</>
        </ol>
      </section>

      <section className={resumeStyles.timeline}>
        <div className={resumeStyles.title_wrapper}>
          <div className={sharedStyles.icon_box}>
            <Icon path={mdiSchoolOutline} />
          </div>

          <h3 className={sharedStyles.h3}>Education</h3>
        </div>

        <ol className={resumeStyles.timeline_list}>
          <>{renderTimeline(props.about.education)}</>
        </ol>
      </section>

      <section className={resumeStyles.timeline}>
        <div className={resumeStyles.title_wrapper}>
          <div className={sharedStyles.icon_box}>
            <Icon path={mdiCertificateOutline} />
          </div>

          <h3 className={sharedStyles.h3}>Certificates</h3>
        </div>

        <ul className={resumeStyles.timeline_list}>
          <>{renderCertificates(props.about.certificates)}</>
        </ul>
      </section>
    </article>
  )
}

function renderTimeline(
  data:
    | {
        organization?: string | undefined
        duration?: string | undefined
        title?: string | undefined
        text?: string | undefined
      }[]
    | undefined,
) {
  return data?.map(item => {
    return (
      <li className={resumeStyles.timeline_item} key={item.organization}>
        <h4
          className={[sharedStyles.h4, resumeStyles.timeline_item_title].join(
            ' ',
          )}
        >
          {item.organization}
        </h4>
        <span>
          <b>{item.title}</b>
        </span>
        <span>{item.duration}</span>

        <ol className={resumeStyles.timeline_text}>
          {item.text?.split('//').map((item, k) => {
            if (item != '') return <li key={k}>&#x2022; {item}</li>
          })}
        </ol>
      </li>
    )
  })
}

function renderCertificates(
  data:
    | {
        title?: string | undefined
        organization?: string | undefined
        link?: string | undefined
      }[]
    | undefined,
) {
  return data?.map(item => {
    return (
      <li className={resumeStyles.timeline_item} key={item.title}>
        <h4
          className={[sharedStyles.h4, resumeStyles.timeline_item_title].join(
            ' ',
          )}
        >
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={resumeStyles.social_link}
          >
            {item.title}
          </a>
        </h4>
        <span>
          <b>{item.organization}</b>
        </span>
      </li>
    )
  })
}

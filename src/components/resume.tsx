import { FC } from 'react'

import { IPersonalData } from 'types/index'

import Icon from '@mdi/react'
import { mdiSchoolOutline, mdiBookOpenPageVariantOutline } from '@mdi/js'

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

      {/*<section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style="width: 80%;"></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style="width: 70%;"></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style="width: 90%;"></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style="width: 50%;"></div>
            </div>
          </li>
        </ul>
      </section> */}
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
  console.log(JSON.stringify(data, null, 2))

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

        <p className={resumeStyles.timeline_text}>{item.text}</p>
      </li>
    )
  })
}

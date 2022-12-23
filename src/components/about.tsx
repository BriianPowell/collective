import { FC } from 'react'
import IPersonalData from 'types/IPersonalData'

import aboutStyles from 'css/about.module.scss'
import sharedstyles from 'css/shared.module.scss'

const About: FC<IPersonalData> = props => {
  return (
    <article className={[aboutStyles.about].join(' ')}>
      <header>
        <h2 className={[sharedstyles.h2, sharedstyles.article_title].join(' ')}>
          About me
        </h2>
      </header>

      <section className={aboutStyles.about_text}>
        <p>{props.about.bio!.p1}</p>

        <p>{props.about.bio!.p2}</p>
      </section>
      <section className={aboutStyles.service}>
        <h3 className={[sharedstyles.h3, aboutStyles.service_title].join(' ')}>
          What I&#39;m doing
        </h3>
        <ul className={aboutStyles.service_list}>
          <>{renderServices(props.about.services)}</>
        </ul>
      </section>
    </article>
  )
}

function renderServices(
  services:
    | {
        iconSrc?: string | undefined
        iconSize?: number | undefined
        iconAlt?: string | undefined
        title?: string | undefined
        text?: string | undefined
      }[]
    | undefined,
) {
  return services?.map(item => {
    return (
      <li className={aboutStyles.service_item} key={item.title}>
        <div className={aboutStyles.service_icon_box}>
          <img src={item.iconSrc} alt={item.iconAlt} width={item.iconSize} />
        </div>

        <div className={aboutStyles.service_content_box}>
          <h4
            className={[sharedstyles.h4, aboutStyles.service_item_title].join(
              ' ',
            )}
          >
            {item.title}
          </h4>

          <p className={aboutStyles.service_item_text}>{item.text}</p>
        </div>
      </li>
    )
  })
}

export default About

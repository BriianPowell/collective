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
    </article>
  )
}

export default About

import { FC } from 'react'
import IPersonalData from 'types/IPersonalData'

import aboutStyles from 'css/about.module.scss'
import sharedstyles from 'css/shared.module.scss'

const About: FC<IPersonalData> = props => {
  return (
    <article className={[aboutStyles.about].join(' ')}>
      <header>
        <h2 className={[sharedstyles.h2, aboutStyles.article_title].join(' ')}>
          About me
        </h2>
      </header>

      <section className={aboutStyles.about_text}>
        <p>
          Turpis cursus in hac habitasse. Elit ullamcorper dignissim cras
          tincidunt. Magna etiam tempor orci eu. Et leo duis ut diam. Fringilla
          urna porttitor rhoncus dolor purus. Consequat nisl vel pretium lectus
          quam id leo in. Quis imperdiet massa tincidunt nunc pulvinar.
          Malesuada fames ac turpis egestas maecenas pharetra convallis. Donec
          et odio pellentesque diam volutpat commodo. Justo donec enim diam
          vulputate ut pharetra sit. Curabitur vitae nunc sed velit dignissim
          sodales ut eu sem. A arcu cursus vitae congue mauris rhoncus aenean
          vel. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.
          In cursus turpis massa tincidunt dui. Mattis ullamcorper velit sed
          ullamcorper morbi tincidunt. Risus sed vulputate odio ut. Sit amet
          porttitor eget dolor morbi non. Cursus in hac habitasse platea
          dictumst quisque sagittis. Orci ac auctor augue mauris augue neque.
          Sed cras ornare arcu dui vivamus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </article>
  )
}

export default About

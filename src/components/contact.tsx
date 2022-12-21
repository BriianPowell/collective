import { FC } from 'react'
import Icon from '@mdi/react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

import IPersonalData from 'types/IPersonalData'

import { mdiSendOutline } from '@mdi/js'

import contactStyles from 'css/contact.module.scss'
import sharedStyles from 'css/shared.module.scss'

const Contact: FC<IPersonalData> = props => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY!,
  })

  return (
    <article className={contactStyles.contact}>
      <header>
        <h2 className={[sharedStyles.h2, sharedStyles.article_title].join(' ')}>
          Contact
        </h2>
      </header>

      <section className={contactStyles.mapbox}>
        <figure>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <GoogleMap
              zoom={10}
              center={{ lat: 44, lng: -80 }}
              mapContainerClassName={contactStyles.map_container}
            ></GoogleMap>
          )}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
          ></iframe> */}
        </figure>
      </section>

      <section className={contactStyles.contact_form}>
        <h3 className={[sharedStyles.h3, contactStyles.form_title].join(' ')}>
          Contact Form
        </h3>

        <form action="#" className="form" data-form>
          <div className={contactStyles.input_wrapper}>
            <input
              type="text"
              name="fullname"
              className={contactStyles.form_input}
              placeholder="Full Name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className={contactStyles.form_input}
              placeholder="Email Address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className={contactStyles.textarea_form_input}
            placeholder="Message"
            required
            data-form-input
          ></textarea>

          <button className={contactStyles.form_btn} type="submit">
            <Icon path={mdiSendOutline} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact

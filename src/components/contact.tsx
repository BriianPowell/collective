import { FC, useMemo, useState, useRef } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import ReCAPTCHA from 'react-google-recaptcha'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { IPersonalData, IFormikContext } from 'types/index'

import Icon from '@mdi/react'
import { mdiSendOutline } from '@mdi/js'

import contactStyles from 'css/contact.module.scss'
import sharedStyles from 'css/shared.module.scss'

export const Contact: FC<IPersonalData> = props => {
  const { isLoaded } = useLoadScript({
    id: 'collective-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
  })

  const mapCenter = useMemo(() => ({ lat: 33.660057, lng: -117.99897 }), [])

  const [submitted, setSubmitted] = useState(false)

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
            <div className={contactStyles.loading}>Loading...</div>
          ) : (
            <GoogleMap
              zoom={10}
              center={mapCenter}
              mapContainerClassName={contactStyles.map_container}
              clickableIcons={false}
            ></GoogleMap>
          )}
        </figure>
      </section>

      <section className={contactStyles.contact_form}>
        <h3 className={[sharedStyles.h3, contactStyles.form_title].join(' ')}>
          Contact Form
        </h3>
        <Formik
          initialValues={{
            submitted: submitted,
            access_key: '',
            subject: '',
            fullname: '',
            email: '',
            message: '',
          }}
          onSubmit={(values: IFormikContext, { setSubmitting, resetForm }) => {
            try {
              postFormData(values)
              setSubmitted(true)
            } catch (err) {
              console.log('Error on Web3Forms Call', err)
              resetForm()
              setSubmitted(false)
            }
            setSubmitting(false)
          }}
          validationSchema={yup.object({
            fullname: yup.string().required('Name is required'),
            email: yup
              .string()
              .email('Please enter a valid email address')
              .required('Email is required'),
            message: yup.string().required('Please enter a message for me!'),
          })}
        >
          {({
            isSubmitting,
            isValid,
            dirty,
            values,
            handleChange,
            submitForm,
          }) => (
            <>
              {ReturnForm(
                submitted,
                isSubmitting,
                isValid,
                dirty,
                values,
                handleChange,
                submitForm,
              )}
            </>
          )}
        </Formik>
      </section>
    </article>
  )
}

function ReturnForm(
  submitted: boolean,
  isSubmitting: boolean,
  isValid: boolean,
  dirty: boolean,
  values: IFormikContext,
  handleChange: any,
  submitForm: any,
) {
  let recaptchaRef = useRef<ReCAPTCHA>(null)

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    if (!captchaCode) {
      return
    }
    recaptchaRef.current!.reset()
    submitForm()
  }

  return (
    <Form
      className="form"
      onSubmit={e => {
        e.preventDefault()
        recaptchaRef.current?.execute()
      }}
    >
      <div className={contactStyles.input_wrapper}>
        <Field
          type="checkbox"
          name="botcheck"
          id=""
          className={contactStyles.bot_check}
        />

        <Field
          type="text"
          id="fullname"
          name="fullname"
          className={contactStyles.form_input}
          placeholder="Full Name"
          values={values.fullname}
          onChange={handleChange}
          required
        />

        <Field
          type="email"
          id="email"
          name="email"
          className={contactStyles.form_input}
          placeholder="Email Address"
          values={values.email}
          onChange={handleChange}
          required
        />
      </div>

      <Field
        component="textarea"
        id="message"
        name="message"
        className={contactStyles.textarea_form_input}
        placeholder="Message"
        values={values.message}
        onChange={handleChange}
        required
      ></Field>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
        onChange={onReCAPTCHAChange}
      />
      <button
        className={contactStyles.form_btn}
        type="submit"
        disabled={!dirty || !isValid || isSubmitting || submitted}
      >
        <Icon path={mdiSendOutline} />
        {submitted ? (
          <span>Submitted!</span>
        ) : isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </Form>
  )
}

function postFormData(values: IFormikContext) {
  console.log('Values to Post', JSON.stringify(values, null, 2))
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(values),
  }).then(async response => {
    response.status === 200
      ? console.log(response.status)
      : console.log(response)
  })
}

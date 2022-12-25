import { FC, useMemo, useRef, ChangeEvent, useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import ReCAPTCHA from 'react-google-recaptcha'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { IPersonalData, IFormikContext } from 'types/index'
import { useAppContext } from 'utils/AppContextProvider'

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

  const { formContent, setContext } = useAppContext()
  const [submitted, setSubmitted] = useState(formContent.submitted)

  function setSubmitContext(values: IFormikContext) {
    formContent.email = values.email
    formContent.fullname = values.fullname
    formContent.message = values.message
    formContent.submitted = values.submitted
    setSubmitted(formContent.submitted)
    setContext(formContent)
  }

  function setFieldContext(field: string, value: string) {
    formContent[field] = value
    setContext(formContent)
  }

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
          enableReinitialize
          initialValues={{
            submitted: submitted,
            access_key: formContent.access_key,
            subject: formContent.subject,
            fullname: formContent.fullname,
            email: formContent.email,
            message: formContent.message,
          }}
          onSubmit={(values: IFormikContext, { setSubmitting, resetForm }) => {
            try {
              postFormData(values)
              setSubmitContext({ ...values, submitted: true })
            } catch (err) {
              console.log('Error on Web3Forms Call', err)
              resetForm()
              setSubmitContext({ ...values, submitted: false })
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
            setFieldValue,
            setSubmitting,
            submitForm,
          }) => (
            <>
              {ReturnForm(
                isSubmitting,
                isValid,
                dirty,
                values,
                setFieldContext,
                setFieldValue,
                setSubmitting,
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
  isSubmitting: boolean,
  isValid: boolean,
  dirty: boolean,
  values: IFormikContext,
  handleChange: any,
  setFieldValue: any,
  setSubmitting: any,
  submitForm: any,
) {
  let recaptchaRef = useRef<ReCAPTCHA>(null)

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    if (!captchaCode) {
      return
    }
    recaptchaRef.current!.reset()
    setSubmitting(true)
    submitForm()
  }

  return (
    <Form
      className={contactStyles.form}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFieldValue(e.currentTarget!.name, e.currentTarget!.value)
            handleChange(e.currentTarget!.name, e.currentTarget!.value)
          }}
          required
        />

        <Field
          type="email"
          id="email"
          name="email"
          className={contactStyles.form_input}
          placeholder="Email Address"
          values={values.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFieldValue(e.currentTarget!.name, e.currentTarget!.value)
            handleChange(e.currentTarget!.name, e.currentTarget!.value)
          }}
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
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setFieldValue(e.currentTarget!.name, e.currentTarget!.value)
          handleChange(e.currentTarget!.name, e.currentTarget!.value)
        }}
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
        disabled={!dirty || !isValid || isSubmitting || values.submitted}
      >
        <Icon path={mdiSendOutline} />
        {values.submitted ? (
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
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(values),
  }).then(async response => {
    response.status === 200
      ? console.log(`${response.status} Contact Requested!`)
      : console.log(response)
  })
}

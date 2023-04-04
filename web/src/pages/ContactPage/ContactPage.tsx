import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, Submit, SubmitHandler, TextAreaField, TextField } from '@redwoodjs/forms'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" />
        <label htmlFor="email">Email</label>
        <TextField name="email" />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" />
        <Submit>Save</Submit>
      </Form>
          </>
  )
}

export default ContactPage

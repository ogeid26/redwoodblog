import { Link, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/dist/toast';
import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
  FieldError,
  Label
} from '@redwoodjs/forms'

import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql';

const CREATE_CONTACT = gql `
mutation CreateContactMutation($input: CreateContactInput! ){
  createContact(input: $input) {
    id
  }
}
`

interface FormValues {
  name: string
  email: string
  message: string
}



const ContactPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Form onSubmit={onSubmit} config={{mode: 'onBlur'}}>

        <Label name="name" errorClassName='error'>Name</Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName='error'>
          Email
          </Label>
        <TextField
          name="email"
          validation={
            {required: true,
              pattern: {
                value: /^[^@]+@[^.]+\..+$/,
                message: 'Please enter a valid email adress',
              },
           }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName='error'>Message</Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />


        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

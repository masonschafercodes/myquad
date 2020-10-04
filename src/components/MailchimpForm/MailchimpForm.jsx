import React from 'react';
import './MailchimpForm.css';
import Mailchimp from 'react-mailchimp-form';

const MailchimpForm = () => {
  return (
    <>
      <Mailchimp
        action='https://app.us2.list-manage.com/subscribe/post?u=82bb529ab7ad77899afe452a4&amp;id=91d277d267'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'johnny_appleseed@mail.com',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'Johnny',
            type: 'text',
            required: true
          },
          {
            name: 'LNAME',
            placeholder: 'Appleseed',
            type: 'text',
            required: true
          }
        ]}
        messages={
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        className='mailchimp-sub'
      />
    </>
  );
}

export default MailchimpForm;
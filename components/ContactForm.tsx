import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkbrlwj"); // Use your Formspree form ID
  if (state.succeeded) {
    return <p>Thanks for your message! We ll get back to you soon.</p>;
  }
  return (
    <form onSubmit={handleSubmit} action="https://formspree.io/f/mjkbrlwj" method="POST">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="mt-6 flex justify-center">
        <button type="submit" disabled={state.submitting} className="px-6 py-3 w-full bg-primary text-white font-semibold rounded-full hover:bg-gray-900 transition ease-in-out duration-500">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

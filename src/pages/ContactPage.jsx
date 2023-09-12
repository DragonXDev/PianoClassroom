import React from 'react';

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
      <p className="text-xl mb-8">Feel free to reach out if you're interested in piano lessons or have any questions.</p>

      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;

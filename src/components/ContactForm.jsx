import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-600 to-white m-y-20">
      <h2 className="text-4xl text-white font-mono mt-10  font-semibold mb-4">
        Contact{" "}
      </h2>
      <form
        action="https://getform.io/f/d5dcb9f7-befd-4a5c-8c09-1ec6ce81c420"
        method="POST"
        className=" my-10 bg-gray-200 p-8 rounded-md h-[50%] w-[500px]  shadow-lg shadow-gray-500"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            name="message"
            rows="4"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col items-center bg-[#607274] justify-center m-y-20">
      <h2 className="text-4xl text-white font-mono mt-10  font-semibold mb-4">
        Contact
      </h2>
      <form
        action="https://getform.io/f/d5dcb9f7-befd-4a5c-8c09-1ec6ce81c420"
        method="POST"
        className=" my-10 p-8 w-[60%] sm:w-[40%] md:w-[25%]"
      >
        <div className="mb-4 ">
          <input
            onChange={(e) => setName(e.target.value)}
            className="appearance-none text-md font-mono  border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name={name}
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border font-mono rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name={email}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="appearance-none  border rounded-xl font-mono w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Message"
            name={message}
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#202733] text-white py-3 px-6 font-mono rounded-full focus:outline-none focus:shadow-outline hover:scale-110 ease-in-out duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

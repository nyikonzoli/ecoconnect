"use client";

import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const send = () => {
    const values = {
      name: name,
      email: email,
      phone: phone,
      description: description,
    };
    fetch("https://mail.ecoconnect.hu/mail.php", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="md:flex md:items-center mx-auto max-w-3xl w-full">
      <div className="bg-n0 rounded-md w-full my-6 mx-2 p-6 shadow-lg relative">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="E-mail address like name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="tel" className="sr-only">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              id="tel"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="Phone number like +12345678901"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="desc" className="sr-only">
              Message:
            </label>
            <textarea
              name="description"
              id="desc"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900 resize-none"
              placeholder="Message for us"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            className="px-4 py-2 text-lg font-medium text-center text-white bg-green-600 rounded-md "
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

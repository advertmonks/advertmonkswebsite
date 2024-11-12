"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contactform } from "@/lib/action";
import { useEmailContext } from "@/context/EmailContext";

const ContactPage = () => {
  let { isEmpty } = useEmailContext();
  const initValues = { name: "", email: isEmpty, phone: "" };

  const initState = { isLoading: false, error: "", values: initValues };

  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-purple-500 p-8 rounded-lg shadow-lg">
      {/* Left Side - Text Content */}
      <div className="text-white md:w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4">Ready to Leave Your Mark?</h1>
        <p className="text-lg mb-6">
          Still got some doubts? Let us take care of it.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2">
        <h2 className="text-gray-800 text-lg font-semibold mb-6">
          Drop us an email and let&apos;s start establishing your presence
          today!
        </h2>

        <form action={contactform}  className="space-y-4">
          <div>
            <label htmlFor="company-name" className="sr-only">
              Company Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
              placeholder="Your Name"
              required
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
              placeholder="youremail@gmail.com"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="website-url" className="sr-only">
              Website URL
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
              placeholder="your Number"
              required
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              isLoading={isLoading}
              disabled={!values.name || !values.email || !values.phone}
              className="w-full rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-900"
            >
              Let&apos;s Connect!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

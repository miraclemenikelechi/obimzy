import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";
import "./index.scss";

const SignUp = () => {
  const InitiaState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formValue, setFormData] = useState(InitiaState);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    if (formValue.password2 !== formValue.password) return;
    //   return toast.error("password does not match");
    createNewUser(auth, formValue.email, formValue.password, formValue.name);
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="overflow-auto">
      <div className="grid place-items-center  ">
        <div className="">
          <Link href="/">
            <h3 className="text-xl font-bold text-[black] ">Sign Up</h3>
          </Link>
          <h6 className="text-[1.25rem] font-medium">
            By creating an account or logging in, you understand and agree to
            Obimzy Properties 's <span className="text-[#0743FD]">Terms</span>.
            You also acknowledge our{" "}
            <span className="text-[#0743FD]">Cookie</span> and
            <span className="text-[#0743FD]">Privacy</span> policies. You will
            receive marketing messages from Us and may opt out at any time by
            following the unsubscribe link in our messages, or as detailed in
            our terms.
          </h6>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Full Name
              </label> */}
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label> */}
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={formValue.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              {/* <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label> */}
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            {/* <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password2"
                  value={formValue.password2}
                  onChange={handleChange}
                  placeholder="confirm password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div> */}
            {/* <a href="#" className="text-xs text-purple-600 hover:underline">
                  Forget Password?
                </a> */}
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0743FD] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link
                to="/Signin"
                className="text-purple-600 hover:underline"
                href="#"
              >
                Log in
              </Link>
            </span>
          </div> */}
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              //   onClick={handleGoogleSignup}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SOCKET_SERVER_URI}api/contact`,
        data
      );
      toast.success("Your response is submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sunbmit response");
    }
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label htmlFor="name">Name</label>
    //     <input id="name" {...register('name', { required: true })} />
    //     {errors.name && <span>Name is required</span>}
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input id="email" type="email" {...register('email', { required: true })} />
    //     {errors.email && <span>Email is required</span>}
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message</label>
    //     <textarea id="message" {...register('message', { required: true })} />
    //     {errors.message && <span>Message is required</span>}
    //   </div>
    //   <button type="submit">Send</button>
    // </form>

    <section className="" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex justify-center">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h1 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-4xl">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                We’d love to hear from you! Whether you have a question about
                our services, need assistance, or just want to give feedback,
                feel free to reach out. Fill out the form below, and our team
                will get back to you as soon as possible.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Bengaluru Address
                    </h3>
                    
                    <p className="text-gray-600 dark:text-slate-400">
                      No.14, 3rd Main, 12th Cross, C.P.Layout,
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Bengaluru – 560030
                    </p>

                    <h3 className="mt-2 mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Rohtak Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                    B- 305 Preet Vihar colony,
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                    Rohtak - 124001,
                    </p>
                  </div>
                  
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      <a href="tel:+918708218446">Mobile: +91-8708218446</a>
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      <a href="mailto:contactus@cnes.online">
                        Mail: contactus@cnes.online
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 AM - 06:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday &amp; Sunday: 08:00 AM - 12:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[-35px]">
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-black">
                Ready to Get Started?
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-black dark:text-white"
              >
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                      {errors.name && <span>Name is required</span>}
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                      {errors.email && <span>Email is required</span>}
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="pb-1 text-xs uppercase tracking-wider"
                    />

                    <textarea
                      id="message"
                      {...register("message", { required: true })}
                      name="message"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      defaultValue={""}
                    />
                    {errors.message && <span>Message is required</span>}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

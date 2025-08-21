import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
            
            <ul className="space-y-4">
            <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            
              <li>
                <Link
                  href="/policy"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Refund & Cancellation
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Partners
                </Link>
              </li>

              <li>
                <Link
                  href="/ambassadors"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Ambassadors
                </Link>
              </li>

              <li>
                <Link
                  href="/members"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  CNES Members
                </Link>
              </li>
              <li>
                <Link
                  href="/teacher"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Become a teacher
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/@CNES_online"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/cnes_online/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/centre-for-nutrition-exercise-sciences/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/918708218446?text=Hi"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contact Info</h3>
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2 cursor-pointer">
            Call Us:  <a href="tel:+918708218446">+91-8708218446</a>
            </p>
           
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2 cursor-pointer">
            Bengaluru Address: No.14, 3rd Main, 12th Cross, C.P. Layout, Bengaluru - 560030
            </p>

            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2 cursor-pointer">
            Rohtak Address: B- 305 Preet Vihar colony, Rohtak -124001
            </p>
         
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white  pb-2 cursor-pointer">
            Mail Us:  <a href="mailto:contactus@cnes.online?subject=Inquiry&body=Hello,%20I%20have%20a%20question%20about...">contactus@cnes.online</a>
            </p>
            
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2024 CNES  | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer

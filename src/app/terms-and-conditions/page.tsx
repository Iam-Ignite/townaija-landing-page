import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="bg-[#021639] text-white  px-6">
      <Head>
        <title>Terms and Conditions - Tow Naija</title>
      </Head>
      <Header />
      <div className="md:px-16 px-6 my-10 mx-auto">
        <h1 className="text-center text-yellow-400 text-3xl font-bold mb-6">
          Terms and Conditions of Tow Naija
        </h1>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            1. Introduction
          </h2>
          <p>
            Tow Naija is a mobile application ("App") that connects users
            ("Users") with a network of independent tow vehicle operators
            ("Operators") for towing services in Nigeria. These Terms and
            Conditions ("Terms") govern your use of the App and the services
            provided through it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            2. Acceptance of Terms
          </h2>
          <p>
          By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            3. Eligibility
          </h2>
          <ul className="list-disc ml-6">
            <li>Be at least 18 years old</li>
            <li>Have a valid phone number and email address</li>
            <li>
              Have a valid payment method (if you choose to use in-app payment)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            4. Account Registration
          </h2>
          <p>To use the App, you must create an account ("Account"). You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your Account login credentials.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            5. Services
          </h2>
          <ul className="list-disc ml-6">
            <li>Search for and connect with Operators</li>
            <li>View Operator profiles and ratings</li>
            <li>Request and track towing services</li>
            <li>Make payments via in-app feature</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            6. Operator Services
          </h2>
          <p>
            Operators are independent contractors and not employees of Tow Naija.
            Tow Naija does not control or direct the services provided by Operators.
            You agree that Tow Naija is not responsible for the actions or omissions of Operators.
          </p>
        </section>

        {/* 7. Payment Terms */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            7. Payment Terms
          </h2>
          <ul className="list-disc ml-6">
            <li>You will provide a valid payment method</li>
            <li>You will be charged for services rendered by Operators</li>
            <li>Tow Naija may charge a service fee for the use of the App</li>
          </ul>
        </section>

        {/* 8. Cancellation Policy */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            8. Cancellation Policy
          </h2>
          <p>
            You may cancel a request for towing services at any time before the Operator arrives.
            However, you may be charged a cancellation fee if you cancel after the Operator has been dispatched.
          </p>
        </section>

        {/* 9. Ratings and Reviews */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            9. Ratings and Reviews
          </h2>
          <p>
            You may rate and review Operators after using their services.
            You agree to provide honest and fair ratings and reviews.
          </p>
        </section>

        {/* 10. Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            10. Intellectual Property
          </h2>
          <p>
            The App, including all software, design, text, images, and other content, is owned by Tow Naija or its licensors.
            You agree not to reproduce, distribute, or display any content from the App without prior written permission.
          </p>
        </section>

        {/* 11. Disclaimer of Warranties */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            11. Disclaimer of Warranties
          </h2>
          <p>
            The App and services provided through it are provided on an "as is" and "as available" basis.
            Tow Naija disclaims all warranties, express or implied, including but not limited to implied warranties
            of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        {/* 12. Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            12. Limitation of Liability
          </h2>
          <p>
            Tow Naija shall not be liable for any damages, including but not limited to incidental, consequential,
            or punitive damages, arising out of or related to the use of the App or services provided through it.
          </p>
        </section>

        {/* 13. Indemnification */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            13. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Tow Naija, its officers, directors, employees, and agents
            from and against any claims, demands, or causes of action arising out of or related to your use of
            the App or services provided through it.
          </p>
        </section>

        {/* 14. Governing Law */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            14. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>
        </section>

        {/* 15. Dispute Resolution */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            15. Dispute Resolution
          </h2>
          <p>
            Any disputes arising out of or related to these Terms shall be resolved through binding arbitration in accordance
            with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria, 2004.
          </p>
        </section>

        {/* 16. Changes to Terms */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            16. Changes to Terms
          </h2>
          <p>
            Tow Naija reserves the right to modify or update these Terms at any time without prior notice.
            Your continued use of the App shall be deemed acceptance of any changes to these Terms.
          </p>
        </section>

        {/* 17. Contact Us */}
        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            17. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at [insert contact email or phone number].
          </p>
        </section>

        <div className="container mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="text-2xl flex items-center gap-2 font-bold">
              {" "}
              <Image
                src="/game-icons_tow-truck.png"
                className="relative z-30"
                height={50}
                width={50}
                alt="call"
              />{" "}
              Tow Naija
            </div>
            <p>Email: Help@TowMe.Com</p>
            <p>Phone: +1 234 456 678 89</p>
            <button className="mt-4 bg-[#FACC15] text-[#0A122A] py-2 px-4 rounded-md shadow-md font-medium">
              Become A Driver
            </button>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay Up To Date</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-[#0A122A] border border-gray-600 rounded-md py-2 px-4 text-gray-300 focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          <p> &copy; 2024 Copyright. All Rights Reserved </p>
          <p>Developed by Didi Technologies</p>
        </div>
      </div>
    </div>
  );
}

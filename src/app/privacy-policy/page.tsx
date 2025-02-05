import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#021639] text-white px-6">
      <Head>
        <title>Privacy Policy - Tow Naija</title>
      </Head>
      <Header />
      <div className="md:px-16 px-6 my-10 mx-auto">
        <h1 className="text-center text-yellow-400 text-3xl font-bold mb-6">
          Privacy Policy of Tow Naija
        </h1>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            1. Introduction
          </h2>
          <p>
            Tow Naija ("App") is a mobile application that connects users ("Users")
            with a network of independent tow vehicle operators ("Operators") for
            towing services in Nigeria. This Privacy Policy explains how we collect,
            use, and protect your data when using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            2. Information We Collect
          </h2>
          <p>
            We collect personal and usage data to provide and improve our services:
          </p>
          <ul className="list-disc ml-6">
            <li>Name, phone number, and email address</li>
            <li>Payment details for transactions</li>
            <li>Vehicle information for service requests</li>
            <li>Real-time location data to connect users with tow operators</li>
            <li>Device and usage information for analytics</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            3. How We Use Your Information
          </h2>
          <p>We use the collected data for the following purposes:</p>
          <ul className="list-disc ml-6">
            <li>To facilitate towing services</li>
            <li>To process payments securely</li>
            <li>To enhance customer support</li>
            <li>To improve security and prevent fraud</li>
            <li>To analyze and enhance app performance</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            4. Data Security & Sharing
          </h2>
          <p>
            We implement strong security measures to protect your data. We do not
            sell your personal information, but we may share it with:
          </p>
          <ul className="list-disc ml-6">
            <li>Operators to facilitate towing requests</li>
            <li>Payment processors for secure transactions</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            5. Your Rights & Choices
          </h2>
          <p>
            You have control over your personal data. You can update your
            information, request account deletion, or adjust location settings via
            your device.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-yellow-400 text-xl border-b border-yellow-400 pb-1">
            6. Contact Us
          </h2>
          <p>If you have any questions, contact us at:</p>
          <p>Email: townaija01@gmail.com</p>
          <p>Phone: +2348050768489</p>
        </section>

        <div className="container mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="text-2xl flex items-center gap-2 font-bold">
              <Image src="/game-icons_tow-truck.png" className="relative z-30" height={50} width={50} alt="Tow Naija Logo" />
              Tow Naija
            </div>
            <button className="mt-4 bg-[#FACC15] text-[#0A122A] py-2 px-4 rounded-md shadow-md font-medium">
              Become A Driver
            </button>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="/terms-and-conditions" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
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
          <p>&copy; 2024 Copyright. All Rights Reserved.</p>
          <p>Developed by Didi Technologies</p>
        </div>
      </div>
    </div>
  );
}

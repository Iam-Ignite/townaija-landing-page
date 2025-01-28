import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TowNaija - Your Roadside Rescue Partner</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Tow Naija - Your trusted roadside assistance partner in Nigeria. Connect with reliable tow truck operators for fast, efficient, and affordable towing services. Available 24/7."
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="TowNaija - Your Roadside Rescue Partner"
        />
        <meta
          property="og:description"
          content="TowNaija connects you with nearby tow truck operators for fast and reliable roadside assistance."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.towme.com" />
        <meta
          name="twitter:title"
          content="TowNaija - Your Roadside Rescue Partner"
        />
        <meta
          name="twitter:description"
          content="TowNaija connects you with nearby tow truck operators for fast and reliable roadside assistance."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Tow Naija",
        "url": "https://www.townaija.com",
        "logo": "https://www.townaija.com/logo.png",
        "description": "Tow Naija offers fast, reliable roadside assistance across Nigeria. Contact us for towing, vehicle recovery, and more.",
        "sameAs": [
          "https://www.facebook.com/TowNaija",
          "https://www.instagram.com/TowNaija",
          "https://www.twitter.com/TowNaija"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234 901 234 5678",
          "contactType": "Customer Service",
          "areaServed": "NG",
          "availableLanguage": "English"
        }
      }
    `
  }}
/>

      </Head>

      {/* Header */}

      <Header />
      {/* Hero Section */}
      <section className="relative back-image flex justify-center py-10 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="flex flex-col md:flex-row items-center w-11/12 md:w-4/5 justify-between space-y-8 md:space-y-0">
          {/* Text Content */}
          <div className="relative md:w-3/5 text-center md:text-left z-30">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              Your Roadside
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
              {" "}
              Rescue Partner
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              TowNaija connects you with nearby tow truck operators for fast and
              reliable roadside assistance.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2">
              {/* App Store Button */}
              <button className="bg-[#FACC15] flex items-center gap-3 text-black px-6 py-2 rounded-md">
                <div className="text-left text-sm md:text-xl">
                  Download on
                  <p className="text-sm md:text-xl font-medium">App Store</p>
                </div>
                <Image
                  src="/apple.png"
                  className="relative z-30"
                  height={20}
                  width={20}
                  alt="apple"
                />
              </button>
              {/* Google Play Button */}
              <button className="bg-[#FACC15] flex items-center gap-3 text-black px-6 py-2 rounded-md">
                <div className="text-left text-sm md:text-xl">
                  Download on
                  <p className="text-base md:text-xl font-medium">
                    Google Play
                  </p>
                </div>
                <Image
                  src="/andriod.png"
                  className="relative z-30"
                  height={20}
                  width={20}
                  alt="andriod"
                />
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/iPhone.png"
              className="relative z-30"
              height={300}
              width={300}
             alt="Tow Naija App - Fast and Reliable Roadside Assistance"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-10 md:py-20 bg-gradient-to-b flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 from-[#021639] to-[#021639]"
      >
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/phone2.png"
            className="relative z-30"
            height={300}
            width={500}
            alt="phone"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-xl">
          <b className="text-[#F1C857] block mb-2 text-lg md:text-xl">
            How it works
          </b>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
            Easy, Convenient, And Fast
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6">
            {/* Step 1 */}
            <div className="text-white p-4 text-left md:p-6 rounded-lg">
              <h3 className="font-bold flex items-center gap-2 text-base md:text-lg mb-2">
                <Image
                  src="/map_search.png"
                  className="relative z-30"
                  height={20}
                  width={20}
                  alt="map"
                />
                Request A Tow
              </h3>
              <p className="text-sm text-left md:text-base">
                Open the app, enter your location, and request a tow.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-white p-4 md:p-6 rounded-lg">
              <h3 className="font-bold flex items-center gap-2 text-base md:text-lg mb-2">
                <Image
                  src="/connect_without_contact.png"
                  className="relative z-30"
                  height={20}
                  width={20}
                  alt="call"
                />
                Get Matched
              </h3>
              <p className="text-sm md:text-base">
                We&apos;ll connect you with nearby tow truck operators.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-white p-4 md:p-6 rounded-lg">
              <h3 className="font-bold flex items-center gap-2 text-base md:text-lg mb-2">
                <Image
                  src="/auto_towing.png"
                  className="relative z-30"
                  height={20}
                  width={20}
                  alt="tow"
                />
                Get Towed
              </h3>
              <p className="text-sm md:text-base">
                Track your tow truck in real-time and get back on the road
                quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="py-10 md:py-20 bg-gradient-to-b flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 from-[#021639] to-[#021639]"
      >
        <div className="md:flex w-4/5">
          <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-4/5 gap-6 md:gap-10">
            {/* Text Section */}
            <div className="text-white p-4 md:p-6 rounded-lg max-w-3xl">
              <b className="text-[#F1C857] block mb-2 text-lg md:text-xl">
                Why Us
              </b>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-5">
                Why Choose TowNaija
              </h2>
              <p className="text-sm md:text-base mb-6 md:mb-12">
                TowNaija provides 24/7 emergency assistance, connecting you with
                nearby, background-checked operators within 30 minutes,
                featuring real-time tracking, transparent pricing, and
                comprehensive national coverage.
              </p>
            </div>

            {/* Image Section */}
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="/phone3.png"
              className="relative z-30"
              height={300}
              width={450}
              alt="phone"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative back-image flex flex-col items-center py-10 md:py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
      >
        {/* Header Section */}
        <div className="text-center text-white relative z-40 mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-medium">Testimonial</h2>
          <h2 className="text-3xl md:text-6xl font-bold">What Our Users</h2>
          <h2 className="text-3xl md:text-6xl font-bold">Say About Us?</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start relative z-30 w-11/12 md:w-4/5 gap-8 md:gap-16">
          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src="/testmonie.png"
              className="relative z-30"
              height={400}
              width={400}
              alt="phone"
            />
          </div>

          {/* Testimonial Text Section */}
          <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
            <div className="text-white p-4 md:p-6 rounded-lg">
              <h2 className="text-2xl md:text-3xl mb-4">
                My Roadside Guardian Angel!
              </h2>
              <p className="text-base md:text-xl font-normal leading-7 md:leading-8">
                I felt helpless when my car broke down on that deserted road in
                the middle of the night. But TowMe&apos;s rapid response
                restored my faith in roadside assistance. Their kindness,
                expertise, and efficiency got me home safely. I&apos;m grateful
                for their exceptional service and highly recommend them!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#021639] text-white py-16">
        {/* Call to Action */}
        <div className="container flex flex-col md:flex-row items-center rounded-lg w-11/12 md:w-4/6 py-10 mx-auto bg-[#F1C857] text-black px-4 md:px-12">
          {/* Text Section */}
          <div className="md:pr-10 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready To Get Started
            </h2>
            <p className="text-base md:text-xl mb-6">
              Get started today! Register for TowNaija roadside assistance and
              download our user-friendly app for easy access to our services.
              Your peace of mind awaits.
            </p>
            {/* Buttons */}
            <div className="flex justify-start  gap-4">
              <button className="bg-[#fff] flex items-center gap-3 text-black px-4 md:px-6 py-2 rounded-md">
                <div className="text-left text-xs md:text-xl ">
                  Download on
                  <p className="text-sm md:text-xl font-medium">App Store</p>
                </div>
                <Image
                  src="/apple.png"
                  className="relative z-30"
                  height={25}
                  width={25}
                  alt="apple"
                />
              </button>
              <button className="bg-[#fff] flex items-center gap-3 text-black px-4 md:px-6 py-2 rounded-md">
                <div className="text-left text-xs md:text-xl ">
                  Download on
                  <p className="text-sm md:text-xl font-medium">Google Play</p>
                </div>
                <Image
                  src="/andriod.png"
                  className="relative z-30"
                  height={25}
                  width={25}
                  alt="android"
                />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className=" hidden md:flex justify-center md:justify-end">
            <Image
              src="/iPhone.png"
              className="relative z-30"
              height={200}
              width={400}
              alt="phone"
            />
          </div>
        </div>

        {/* Footer Content */}
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
                <a href="/terms-and-conditions" className="text-gray-400 hover:text-white">
                  Terms Of Conditions
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
    </>
  );
}

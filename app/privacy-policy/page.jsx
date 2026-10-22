

"use client";

import Link from "next/link";
import {
  FaShieldAlt,
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen  bg-white text-gray-900 dark:bg-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        
        {/* Light mode decoration only */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-red-50 rounded-full blur-3xl pointer-events-none dark:hidden" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-28 md:py-32">

          {/* Back */}
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-gray-500
              hover:text-red-600
              dark:text-gray-400
              dark:hover:text-red-500
              transition-colors
              mb-8
            "
          >
            <FaArrowLeft size={12} />
            Back to Home
          </Link>

          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              mx-1
              md:mx-8
              px-4
              py-2
              rounded-full
              border
              border-red-100
              bg-red-50
              text-red-600
              text-xs
              md:text-sm
              font-medium
              dark:border-red-900
              dark:bg-red-950/30
              dark:text-red-500
            "
          >
            <FaShieldAlt size={12} />
            Privacy & Security
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              tracking-tight
              leading-tight
              text-gray-900
              dark:text-white
            "
          >
            Privacy{" "}
            <span className="text-red-600 dark:text-red-500">
              Policy
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mt-5
              text-base
              md:text-lg
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Your privacy matters to me. This page explains how I collect,
            use and protect information when you contact or use my services.
          </p>

          <p className="mt-4 text-xs text-gray-500 dark:text-white">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20">

        {/* Intro Card */}
        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            p-6
            dark:text-white
            md:p-8
            dark:border-gray-800
            dark:bg-gray-950
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                shrink-0
                w-10
                h-10
                rounded-xl
                bg-red-50
                text-red-600
                flex
                items-center
                justify-center
                dark:bg-red-950/40
                dark:text-red-500
              "
            >
              <FaUserShield size={16} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Your Privacy
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                Sufiyan Web Marketing respects your privacy and is committed
                to protecting the personal information you share through this
                website. I only collect information that is necessary to
                communicate with you and provide requested services.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="mt-10 space-y-10">

          {/* 01 */}
          <PolicySection
            number="01"
            title="Information I Collect"
            icon={<FaDatabase />}
          >
            <p>
              When you contact me through this website, email, phone,
              WhatsApp or enquiry forms, I may collect information such as:
            </p>

            <ul>
              <li>Your name</li>
              <li>Business or company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Website or social media details</li>
              <li>Project requirements and messages</li>
            </ul>
          </PolicySection>

          {/* 02 */}
          <PolicySection
            number="02"
            title="How I Use Your Information"
            icon={<FaUserShield />}
          >
            <p>
              The information you provide may be used to:
            </p>

            <ul>
              <li>Respond to your enquiries and messages</li>
              <li>Understand your project requirements</li>
              <li>Provide website and digital marketing services</li>
              <li>Send project-related communication</li>
              <li>Provide quotations and service information</li>
              <li>Improve my website and services</li>
            </ul>

            <p>
              I do not use your personal information for purposes unrelated
              to the service or enquiry without a valid reason or your
              consent.
            </p>
          </PolicySection>

          {/* 03 */}
          <PolicySection
            number="03"
            title="Cookies & Analytics"
            icon={<FaCookieBite />}
          >
            <p>
              This website may use cookies or analytics technologies to
              understand how visitors use the website and to improve its
              performance.
            </p>

            <p>
              Cookies may help with website functionality, visitor analytics,
              security and user experience.
            </p>
          </PolicySection>

          {/* 04 */}
          <PolicySection
            number="04"
            title="Third-Party Services"
            icon={<FaShieldAlt />}
          >
            <p>
              Some services used on this website may be provided by
              third-party platforms, such as website hosting, analytics,
              advertising platforms, communication tools or embedded
              services.
            </p>

            <p>
              These third-party services may process information according
              to their own privacy policies and terms.
            </p>
          </PolicySection>

          {/* 05 */}
          <PolicySection
            number="05"
            title="Data Protection"
            icon={<FaShieldAlt />}
          >
            <p>
              Reasonable measures are taken to protect information shared
              through this website. However, no method of transmitting or
              storing information online can be guaranteed to be completely
              secure.
            </p>
          </PolicySection>

          {/* 06 */}
          <PolicySection
            number="06"
            title="Sharing of Information"
            icon={<FaUserShield />}
          >
            <p>
              Your personal information is not intentionally sold or rented
              to third parties.
            </p>

            <p>
              Information may only be shared with service providers or
              platforms when reasonably necessary to provide a requested
              service, operate the website or comply with applicable legal
              requirements.
            </p>
          </PolicySection>

          {/* 07 */}
          <PolicySection
            number="07"
            title="External Links"
            icon={<FaArrowLeft />}
          >
            <p>
              This website may contain links to external websites or
              platforms. I am not responsible for the privacy practices,
              content or security of external websites.
            </p>

            <p>
              Visitors are encouraged to review the privacy policies of
              external websites before providing personal information.
            </p>
          </PolicySection>

          {/* 08 */}
          <PolicySection
            number="08"
            title="Your Rights"
            icon={<FaUserShield />}
          >
            <p>
              You may contact me if you want to know about the personal
              information you have shared, request correction of inaccurate
              information, or ask questions regarding the use of your data.
            </p>
          </PolicySection>

          {/* 09 */}
          <PolicySection
            number="09"
            title="Changes to This Policy"
            icon={<FaShieldAlt />}
          >
            <p>
              This Privacy Policy may be updated from time to time to reflect
              changes in services, technology, legal requirements or website
              functionality.
            </p>

            <p>
              Any updated version will be published on this page with a
              revised update date.
            </p>
          </PolicySection>

          {/* ================= CONTACT BOX ================= */}
          <div
            className="
              mt-14
              rounded-2xl
              border
              border-red-100
              bg-red-50
              p-6
              md:p-8
              dark:border-red-900
              dark:bg-red-950/20
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-500">
                  Have a question?
                </p>

                <h2 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                  Need more information about your privacy?
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Feel free to contact me regarding privacy or your
                  information.
                </p>
              </div>

              <a
                href="mailto:info@sufiyanwebmarketing.in"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  shrink-0
                  px-5
                  py-3
                  rounded-full
                  bg-red-600
                  text-white
                  text-sm
                  font-medium
                  hover:bg-red-700
                  transition-colors
                "
              >
                <FaEnvelope size={13} />
                Contact Me
              </a>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

/* ================= POLICY SECTION ================= */

const PolicySection = ({ number, title, icon, children }) => {
  return (
    <article className="group">

      <div className="flex items-start gap-4 md:gap-5">

        {/* Number */}
        <div
          className="
            hidden
            sm:flex
            shrink-0
            w-10
            h-10
            rounded-xl
            border
            border-gray-200
            bg-white
            text-red-600
            items-center
            justify-center
            text-xs
            font-semibold
            dark:border-gray-800
            dark:bg-black
            dark:text-red-500
          "
        >
          {number}
        </div>

        {/* Content */}
        <div className="flex-1">

          <div className="flex items-center gap-3">

            <div className="text-red-600 dark:text-red-500">
              {icon}
            </div>

            <h2
              className="
                text-xl
                md:text-2xl
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              {title}
            </h2>

          </div>

          <div
            className="
              mt-4
              space-y-4
              text-sm
              md:text-base
              leading-7
              text-gray-600
              dark:text-gray-400

              [&_ul]:space-y-2
              [&_ul]:mt-3
              [&_ul]:pl-5
              [&_ul]:list-disc

              [&_li]:pl-1

              [&_strong]:font-semibold
              [&_strong]:text-gray-900
              dark:[&_strong]:text-white
            "
          >
            {children}
          </div>

        </div>
      </div>

    </article>
  );
};

export default PrivacyPolicy;


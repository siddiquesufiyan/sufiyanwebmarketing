
"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaExclamationCircle,
  FaEnvelope,
} from "react-icons/fa";

const TermsAndCondition = () => {
  const sections = [
    {
      number: "01",
      icon: <FaHandshake />,
      title: "Our Working Process",
      content: (
        <p>
          At <strong className="text-gray-900 dark:text-white">Sufiyan Web Marketing</strong>,
          we believe in building trust through our work. Depending on the project,
          we may begin with initial work, design concepts, demos, or agreed project
          milestones before requesting payment.
        </p>
      ),
    },
    {
      number: "02",
      icon: <FaCreditCard />,
      title: "Payment Terms",
      content: (
        <>
          <p>
            Our payment process is designed to make working with us simple and
            comfortable for our clients.
          </p>

          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/20">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-red-600 dark:text-red-500" />

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  No unnecessary advance payment
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  We generally do not ask clients to make a full advance payment
                  before any work is started. Initial work, concepts, or agreed
                  deliverables may be provided first, followed by payment according
                  to the mutually agreed terms.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5">
            For larger projects, custom development, paid advertising budgets,
            third-party services, hosting, domains, software subscriptions, or
            projects involving significant external costs, a partial advance or
            separate payment may be required. Such requirements will be discussed
            with the client before the work begins.
          </p>
        </>
      ),
    },
    {
      number: "03",
      icon: <FaFileContract />,
      title: "Project Scope & Requirements",
      content: (
        <>
          <p>
            The project scope, services, features, number of pages, revisions,
            deadlines, and other requirements should be discussed and agreed upon
            before or during the start of the project.
          </p>

          <p className="mt-4">
            Any major requirement added after the agreed scope may be considered
            additional work and can involve additional charges.
          </p>
        </>
      ),
    },
    {
      number: "04",
      icon: <FaClock />,
      title: "Delivery & Timeline",
      content: (
        <>
          <p>
            We always aim to complete projects within the mutually agreed
            timeframe. However, delivery timelines may change because of delayed
            content, feedback, approvals, access credentials, third-party
            services, hosting issues, or other circumstances outside our control.
          </p>

          <p className="mt-4">
            The client is expected to provide the required information, content,
            images, credentials, and feedback on time to avoid unnecessary delays.
          </p>
        </>
      ),
    },
    {
      number: "05",
      icon: <FaShieldAlt />,
      title: "Client Content & Information",
      content: (
        <p>
          The client is responsible for providing accurate business information,
          logos, images, documents, contact details, product information, and
          other materials required for the project. The client must have the
          necessary rights or permission to use any content provided to us.
        </p>
      ),
    },
    {
      number: "06",
      icon: <FaExclamationCircle />,
      title: "Revisions & Changes",
      content: (
        <>
          <p>
            Reasonable revisions based on the agreed project scope are included
            where applicable.
          </p>

          <p className="mt-4">
            Significant design changes, additional pages, new features, changes
            after final approval, or requirements outside the original scope may
            be charged separately.
          </p>
        </>
      ),
    },
    {
      number: "07",
      icon: <FaCreditCard />,
      title: "Final Payment & Project Handover",
      content: (
        <>
          <p>
            Once the agreed work is completed and the client approves the final
            deliverables, the remaining payment becomes due according to the
            agreed payment terms.
          </p>

          <p className="mt-4">
            Where applicable, final files, source code, website access,
            credentials, deployment, or other project assets may be handed over
            after the agreed payment has been received.
          </p>
        </>
      ),
    },
    {
      number: "08",
      icon: <FaHandshake />,
      title: "Refund & Cancellation",
      content: (
        <p>
          Refunds and cancellations depend on the stage of the project and the
          work already completed. If work has already been started, completed
          services, third-party expenses, paid tools, hosting, domains, or other
          non-refundable costs may not be eligible for a refund.
        </p>
      ),
    },
    {
      number: "09",
      icon: <FaShieldAlt />,
      title: "Third-Party Services",
      content: (
        <p>
          Services such as domain registration, hosting, paid plugins, premium
          themes, advertising platforms, software subscriptions, APIs, stock
          assets, or other third-party services may have their own charges and
          terms. These costs are separate from our service charges unless
          specifically included in the project quotation.
        </p>
      ),
    },
    {
      number: "10",
      icon: <FaFileContract />,
      title: "Changes to These Terms",
      content: (
        <p>
          Sufiyan Web Marketing may update these Terms and Conditions when
          necessary. The latest version published on this page will be considered
          the current version of these terms.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-gray-300 mt-8 md:mt-12">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-900">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">

          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 mt-6  md:mt-0"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-600 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-500 ml-0 md:ml-8">
            <FaFileContract />
            Terms & Conditions
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Terms &
            <span className="text-red-600 dark:text-red-500">
              {" "}Conditions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300">
            These terms explain how we work with our clients, including project
            scope, payments, delivery, revisions, and other important conditions
            for our digital services.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-800">
              Sufiyan Web Marketing
            </span>

            <span className="rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-800">
              Last updated: September 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Intro / Trust Card */}
        <div className="mb-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8 dark:border-gray-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-xl text-white">
              <FaHandshake />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Simple, transparent & client-friendly
              </h2>

              <p className="mt-3 leading-8 text-gray-600 dark:text-gray-300">
                Our goal is to make the process comfortable and transparent for
                every client. We focus on delivering real value through our work
                instead of making clients uncomfortable with unnecessary upfront
                payment demands.
              </p>

              <p className="mt-3 leading-8 text-gray-600 dark:text-gray-300">
                Payment terms can vary depending on the project size, scope,
                duration, and external costs. The final terms agreed with the
                client for a specific project will take priority.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.number}
              className="group rounded-3xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-red-200 sm:p-8 dark:border-gray-800 dark:bg-black dark:hover:border-red-900/60"
            >
              <div className="flex gap-5">

                {/* Number */}
                <div className="hidden shrink-0 sm:block">
                  <span className="text-sm font-bold tracking-widest text-red-600 dark:text-red-500">
                    {section.number}
                  </span>
                </div>

                <div className="min-w-0 flex-1">

                  {/* Heading */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-500">
                      {section.icon}
                    </span>

                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-sm leading-8 text-gray-600 sm:text-base dark:text-gray-300">
                    {section.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Payment Highlight */}
        <div className="mt-12 rounded-3xl bg-red-600 p-7 text-white sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-red-600">
              <FaCreditCard />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Our Payment Philosophy
              </h2>

              <p className="mt-3 max-w-3xl leading-8 text-red-50">
                We believe clients should feel confident about the value they
                are receiving. That is why, wherever practical, we prefer to
                demonstrate our work and build trust before collecting the
                agreed payment.
              </p>

              <p className="mt-3 max-w-3xl leading-8 text-red-50">
                For projects requiring external expenses or significant resources,
                specific payment arrangements may be agreed upon in advance.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-7 text-center sm:p-10 dark:border-gray-800 dark:bg-zinc-950">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl text-white">
            <FaEnvelope />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
            Have a question about our terms?
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600 dark:text-gray-300">
            If you have any questions regarding pricing, payment, project scope,
            delivery, or any other condition, feel free to contact us before
            starting your project.
          </p>

          <a
            href="mailto:info@sufiyanwebmarketing.in"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:bg-red-700"
          >
            <FaEnvelope />
            info@sufiyanwebmarketing.in
          </a>
        </div>

      </section>
    </main>
  );
};

export default TermsAndCondition;


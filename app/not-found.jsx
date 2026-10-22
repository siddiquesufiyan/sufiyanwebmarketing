"use client"
import Link from "next/link";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-300">
      <div className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Error
          </p>

          <h1 className="mt-4 text-[100px] font-black leading-none text-gray-900 dark:text-white sm:text-[150px]">
            404
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 bg-red-600" />

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
            Sorry, the page you are looking for does not exist or may have
            been moved.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <FaHome />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-red-600 hover:text-red-600 dark:border-gray-800 dark:text-gray-300 dark:hover:border-red-500 dark:hover:text-red-500"
            >
              <FaArrowLeft />
              Go Back
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}
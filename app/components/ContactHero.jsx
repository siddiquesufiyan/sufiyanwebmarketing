"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaGlobe,
  FaBullhorn,
  FaSearch,
  FaPalette,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactHero() {
  const services = [
    {
      icon: FaGlobe,
      title: "Website Design",
    },
    {
      icon: FaSearch,
      title: "SEO",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
    },
    {
      icon: FaPalette,
      title: "Design & Content",
    },
  ];

  const fastReveal = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">

      {/* ================= BACKGROUND ================= */}
      {/* Completely disabled in dark mode to prevent haze / blur */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden dark:hidden">

        {/* Main Spotlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{
            opacity: {
              duration: 0.35,
            },
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] bg-red-50 rounded-full blur-3xl"
        />

        {/* Floating Glow */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-[8%] w-20 h-20 bg-red-100/40 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-52 right-[8%] w-24 h-24 bg-red-100/40 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">

        {/* ================= LABEL ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="flex justify-center mb-5"
        >
          <span
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-red-100
              bg-red-50
              text-red-600
              text-xs md:text-sm
              font-medium
              shadow-none
              drop-shadow-none

              dark:border-red-900
              dark:bg-red-950/30
              dark:text-red-500
              dark:shadow-none
              dark:drop-shadow-none
            "
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-60 dark:hidden" />

              <span className="relative w-2 h-2 rounded-full bg-red-600 dark:bg-red-500" />
            </span>

            Let's Work Together
          </span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fastReveal}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-semibold
              tracking-tight
              leading-tight
              text-gray-900
              drop-shadow-none
              shadow-none

              dark:text-white
              dark:drop-shadow-none
              dark:shadow-none
            "
          >
            Let's Talk About Your{" "}

            <span
              className="
                text-red-600
                dark:text-red-500
                drop-shadow-none
                shadow-none
              "
            >
              Next Project
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fastReveal}
            className="
              max-w-2xl mx-auto
              mt-5
              text-sm sm:text-base md:text-lg
              text-gray-600
              leading-7 md:leading-8
              drop-shadow-none
              shadow-none

              dark:text-gray-300
              dark:drop-shadow-none
              dark:shadow-none
            "
          >
            I am a digital marketing freelancer and web designer with 4+
            years of experience helping businesses, startups and professionals
            build their online presence through websites, SEO, advertising,
            social media and creative digital solutions.
          </motion.p>

          {/* Second Description */}
          <motion.p
            variants={fastReveal}
            className="
              max-w-xl mx-auto
              mt-3
              text-sm
              text-gray-500
              leading-6
              drop-shadow-none
              shadow-none

              dark:text-gray-400
              dark:drop-shadow-none
              dark:shadow-none
            "
          >
            Whether you need a website, SEO, Facebook Ads, Google Business
            Profile, social media management, graphic design, video editing or
            any other digital service, feel free to get in touch.
          </motion.p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">

          {/* Phone */}
          <motion.a
            href="tel:9769285713"
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.28,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              flex items-center gap-3
              w-full sm:w-auto
              px-5 py-3
              rounded-xl
              border border-gray-200
              bg-white
              shadow-none
              drop-shadow-none
              hover:border-red-200
              transition-colors duration-200

              dark:border-gray-800
              dark:bg-black
              dark:hover:border-red-800
              dark:shadow-none
              dark:drop-shadow-none
            "
          >
            <span
              className="
                w-9 h-9
                rounded-lg
                bg-red-50
                text-red-600
                flex items-center justify-center
                shadow-none
                drop-shadow-none

                dark:bg-red-950/40
                dark:text-red-500
              "
            >
              <FaPhoneAlt size={13} />
            </span>

            <div className="text-left">
              <p
                className="
                  text-[11px]
                  text-gray-500
                  drop-shadow-none

                  dark:text-gray-400
                "
              >
                Call Me
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  drop-shadow-none

                  dark:text-white
                "
              >
                +91 97692 85713
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@sufiyanwebmarketing.in"
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.34,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              flex items-center gap-3
              w-full sm:w-auto
              px-5 py-3
              rounded-xl
              border border-gray-200
              bg-white
              shadow-none
              drop-shadow-none
              hover:border-red-200
              transition-colors duration-200

              dark:border-gray-800
              dark:bg-black
              dark:hover:border-red-800
              dark:shadow-none
              dark:drop-shadow-none
            "
          >
            <span
              className="
                w-9 h-9
                rounded-lg
                bg-red-50
                text-red-600
                flex items-center justify-center
                shadow-none
                drop-shadow-none

                dark:bg-red-950/40
                dark:text-red-500
              "
            >
              <FaEnvelope size={13} />
            </span>

            <div className="text-left">
              <p
                className="
                  text-[11px]
                  text-gray-500
                  drop-shadow-none

                  dark:text-gray-400
                "
              >
                Email Me
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  break-all
                  drop-shadow-none

                  dark:text-white
                "
              >
                info@sufiyanwebmarketing.in
              </p>
            </div>
          </motion.a>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.42,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="flex justify-center mt-7"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              href="#contact-form"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                gap-2
                px-7 py-3
                rounded-full
                bg-red-600
                text-white
                text-sm
                font-medium
                shadow-none
                drop-shadow-none
                hover:bg-red-700
                transition-colors duration-200
              "
            >
              {/* Shine only in light mode */}
              <motion.span
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-10
                  bg-white/20
                  skew-x-12
                  dark:hidden
                "
              />

              <span className="relative">
                Send Your Enquiry
              </span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <FaArrowRight size={11} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.4,
          }}
          className="max-w-3xl mx-auto mt-10"
        >
          <p
            className="
              text-center
              text-xs
              text-gray-500
              mb-4
              drop-shadow-none

              dark:text-gray-400
            "
          >
            Services I can help you with
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.56 + index * 0.07,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-3 py-3
                    shadow-none
                    drop-shadow-none
                    hover:border-red-200
                    transition-colors duration-200
                    cursor-default

                    dark:border-gray-800
                    dark:bg-black
                    dark:hover:border-red-800
                    dark:shadow-none
                    dark:drop-shadow-none
                  "
                >
                  <Icon
                    className="
                      text-red-600
                      dark:text-red-500
                      text-sm
                      drop-shadow-none
                    "
                  />

                  <span
                    className="
                      text-xs md:text-sm
                      text-gray-700
                      font-medium
                      drop-shadow-none

                      dark:text-gray-300
                    "
                  >
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= TRUST POINTS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.72,
            duration: 0.35,
          }}
          className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-2
            mt-8
          "
        >
          {[
            "4+ Years Experience",
            "Flexible Pricing",
            "Direct Communication",
            "Business-Focused Solutions",
          ].map((item, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.76 + index * 0.06,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                flex
                items-center
                gap-2
                text-xs
                text-gray-500
                drop-shadow-none
                shadow-none

                dark:text-gray-400
                dark:drop-shadow-none
                dark:shadow-none
              "
            >
              <FaCheckCircle
                className="
                  text-red-600
                  dark:text-red-500
                  drop-shadow-none
                "
              />

              {item}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ContactHero;


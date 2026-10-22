
"use client";

import { motion } from "motion/react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-8 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {/* SECTION TITLE */}
      <motion.h4
        className="
          text-center
          mb-2
          text-lg
          text-gray-700
          dark:text-gray-300
        "
        variants={fadeUp}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="
          text-center
          text-5xl
          font-semibold
          text-gray-900
          dark:text-white
        "
        variants={fadeUp}
      >
        About Me
      </motion.h2>

      {/* MAIN ABOUT CONTENT */}
      <div
        className="
          flex
          justify-between
          items-center
          w-full
          flex-col
          lg:flex-row
          gap-20
          my-12
          md:my-16
        "
      >
        {/* IMAGE */}
        <motion.div
          className="w-64 sm:w-90 rounded-3xl max-w-none"
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
        >
          <Image
            src={assets.sufiyan_web_developer}
            alt="Sufiyan as a freelancer"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* DESCRIPTION */}
          <motion.p
            className="
              mb-4
              max-w-2xl
              leading-7
              text-gray-700
              dark:text-gray-300
            "
            variants={fadeUp}
          >
            I am a professional freelancer with 4 years of experience in
            digital marketing and web services. I provide website design, SEO,
            social media management, WhatsApp marketing, Facebook Ads, video
            editing, and GNB creation. I help businesses, startups, B2B and B2C
            clients build a strong online presence, generate leads, and grow
            their business.
          </motion.p>

          {/* INFO CARDS */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                      delay: index * 0.04,
                      ease: "easeOut",
                    },
                  },
                }}
                className="
                  rounded-xl
                  border
                  p-3
                  cursor-pointer

                  bg-white
                  border-gray-300

                  dark:bg-black
                  dark:border-gray-800

                  hover:bg-gray-50
                  dark:hover:bg-[#0d0d0d]

                  hover:border-gray-400
                  dark:hover:border-gray-700

                  shadow-none
                  hover:shadow-none
                  dark:shadow-none
                  dark:hover:shadow-none

                  transition-colors
                  duration-200
                "
              >
                <div className="text-2xl w-7 mt-1">
                  {icon}
                </div>

                <h3
                  className="
                    my-3
                    font-semibold
                    text-sm
                    text-gray-800
                    dark:text-white
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    text-xs
                    leading-5
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* TOOLS */}
          <motion.div
            className="w-full max-w-xl mx-auto text-center mt-6 px-4"
            variants={fadeUp}
          >
            <h4
              className="
                mb-4
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Tools I Used
            </h4>

            <ul className="flex items-center justify-center gap-2.5 flex-wrap">
              {toolsData.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <motion.li
                    key={index}
                    title={tool.name}
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    className="
                      w-9
                      h-9
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      cursor-pointer

                      bg-red-50
                      text-red-600
                      border
                      border-red-100

                      dark:bg-red-950/20
                      dark:text-red-400
                      dark:border-red-900

                      hover:bg-red-600
                      hover:text-white
                      hover:border-red-600

                      dark:hover:bg-red-600
                      dark:hover:text-white
                      dark:hover:border-red-600

                      shadow-none
                      hover:shadow-none
                      dark:shadow-none
                    "
                  >
                    <Icon className="text-[18px]" />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;


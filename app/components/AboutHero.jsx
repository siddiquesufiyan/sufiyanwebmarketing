"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function AboutHero() {
  const trustPoints = [
    "4+ Years Experience",
    "50+ Clients",
    "80+ Projects",
  ];

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Main glow - LIGHT MODE ONLY */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
          }}
          animate={{
            opacity: 0.6,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="
            absolute top-10 left-1/2 -translate-x-1/2
            w-[500px] h-[300px]
            bg-red-50
            rounded-full
            blur-3xl
            dark:hidden
          "
        />

        {/* Moving glow 1 - LIGHT MODE ONLY */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute top-32 left-[8%]
            w-20 h-20
            bg-red-100/40
            rounded-full
            blur-2xl
            dark:hidden
          "
        />

        {/* Moving glow 2 - LIGHT MODE ONLY */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute top-48 right-[8%]
            w-24 h-24
            bg-red-100/40
            rounded-full
            blur-2xl
            dark:hidden
          "
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* ================= LABEL ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "backOut",
          }}
          className="flex justify-center mb-5"
        >
          <motion.span
            whileHover={{
              scale: 1.03,
              y: -1,
            }}
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-red-100 dark:border-red-900
              bg-red-50 dark:bg-red-950/30
              text-red-600 dark:text-red-400
              text-xs md:text-sm
              font-medium
              shadow-none
              dark:shadow-none
            "
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-red-600" />
            </span>

            About Me
          </motion.span>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.08,
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-semibold
              tracking-tight
              leading-tight
              text-gray-900
              dark:text-white
              drop-shadow-none
            "
          >
            Digital Marketing Freelancer &{" "}

            <motion.span
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                inline-block
                text-red-600
                dark:text-red-500
                drop-shadow-none
              "
            >
              Web Designer
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.38,
              duration: 0.4,
            }}
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-sm sm:text-base md:text-lg
              leading-7 md:leading-8
              text-gray-600
              dark:text-gray-300
              drop-shadow-none
            "
          >
            I help businesses, startups and brands build a strong online
            presence through professional website design, SEO, social media
            marketing, Facebook Ads, WhatsApp marketing and other digital
            marketing solutions.
          </motion.p>

          {/* ================= CTA ================= */}
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
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <Link
                href="/contact"
                className="
                  group
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6 py-3
                  rounded-full
                  bg-red-600
                  text-white
                  text-sm
                  font-medium
                  shadow-none
                  hover:shadow-md
                  dark:shadow-none
                  dark:hover:shadow-none
                  transition-shadow
                  duration-300
                "
              >
                {/* Shine */}
                <motion.span
                  initial={{ x: "-120%" }}
                  animate={{ x: "120%" }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-10 bg-white/20 skew-x-12"
                />

                <span className="relative">
                  Let's Work Together
                </span>

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <FaArrowRight size={12} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6 py-3
                  rounded-full
                  border
                  border-gray-300
                  dark:border-gray-700
                  text-gray-700
                  dark:text-gray-300
                  text-sm
                  font-medium
                  hover:border-red-600
                  hover:text-red-600
                  dark:hover:border-red-500
                  dark:hover:text-red-500
                  shadow-none
                  dark:shadow-none
                  transition-all
                  duration-300
                "
              >
                Explore My Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= TRUST POINTS ================= */}
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
            delay: 0.62,
            duration: 0.35,
          }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10"
        >
          {trustPoints.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.68 + index * 0.08,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                flex
                items-center
                gap-2
                text-sm
                text-gray-600
                dark:text-gray-300
                cursor-default
                drop-shadow-none
              "
            >
              <FaCheckCircle className="text-red-600 dark:text-red-500 text-xs" />

              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;

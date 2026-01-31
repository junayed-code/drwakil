"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@components/ui/button";
import heroImg from "@/assets/hero-1.jpg";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative aspect-5/7 sm:aspect-4/5 flex flex-col justify-end md:aspect-auto bg-primary -z-2"
    >
      <div className="container md:py-32 flex items-end md:items-center">
        <motion.div
          className="mb-[18%] md:mb-0 text-center mx-auto max-w-lg md:mx-0 md:text-left text-primary-foreground"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
            variants={itemVariants}
          >
            Restoring Movement, Rebuilding Lives
          </motion.h1>
          <motion.p
            className="mt-2 sm:mt-3 font-medium md:text-lg"
            variants={itemVariants}
          >
            Specialized in joint replacement and sports medicine, we use
            advanced techniques to help you return to the life you love.
          </motion.p>
          <motion.div className="mt-5 sm:mt-6" variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="group text-accent-foreground bg-accent hover:bg-accent/90"
            >
              <Link href="#">
                Book a Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 -z-1 -mt-(--header-height) aspect-9/10 md:aspect-auto max-md:after:absolute max-md:after:w-full max-md:after:h-24 after:bottom-0 after:bg-linear-to-b after:from-transparent after:to-primary after:to-90%"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={heroImg}
          placeholder="blur"
          alt="Hero background image"
          className="object-top md:max-lg:object-top-right object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </section>
  );
}

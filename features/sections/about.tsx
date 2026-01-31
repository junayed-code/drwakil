'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardTitle } from "@components/ui/card";
import { AnimatedCounter } from "@components/animated-counter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import DrWakilAhmedImg from "@/assets/dr._wakil_ahmed_photo.png";

export function About() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="spacer-top-20" ref={ref}>
      <motion.div
        className="container flex flex-col lg:grid lg:grid-cols-12 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.picture className="col-span-5 2xl:col-span-4" variants={imageVariants}>
          <Image
            placeholder="blur"
            src={DrWakilAhmedImg}
            className="rounded-xl object-[center_20%] object-cover aspect-7/5 lg:aspect-5/7 xl:aspect-auto lg:object-center"
            alt="Dr. Wakil Ahmed"
          />
        </motion.picture>

        <motion.div
          className="col-span-6 col-start-7 2xl:col-span-7 2xl:col-start-6 flex flex-col gap-4 py-3"
          variants={contentVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium lg:-ml-1"
            variants={itemVariants}
          >
            Dr. Wakil Ahmed
          </motion.h2>
          <motion.p variants={itemVariants}>
            Dr. Wakil Ahmed is an Orthopedic Surgeon trained at the National
            Institute of Traumatology and Orthopedic Rehabilitation{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://nitor.gov.bd"
            >
              (NITOR)
            </a>
            , Dhaka. He completed advanced training in Sports Medicine, knee and
            shoulder arthroscopy, and hip and knee replacement surgery at
            Singapore General Hospital under renowned specialists, and further
            enhanced his expertise through training in Thailand, South Korea,
            and India.
          </motion.p>
          <motion.p variants={itemVariants}>
            A significant part of his practice focuses on hip and knee joint
            replacement and arthroscopic surgery of the knee and shoulder. He is
            also well trained in trauma surgery and has performed over 5,000
            knee arthroscopic procedures and more than 400 total hip and knee
            replacement surgeries.
          </motion.p>

          <motion.div className="mt-3 lg:mt-auto grid grid-cols-2" variants={itemVariants}>
            <Card className="p-4 sm:p-6 text-center gap-2 shadow-none border-0 rounded-none border-r-2">
              <AnimatedCounter
                to={20}
                suffix="+"
                duration={1000}
                className="text-4xl sm:text-5xl font-bold text-primary"
              />
              <CardTitle className="text-sm sm:text-base font-medium leading-tight">
                Years Experience
              </CardTitle>
            </Card>
            <Card className="p-4 sm:p-6 text-center gap-2 shadow-none border-0 rounded-none">
              <AnimatedCounter
                to={400}
                suffix="+"
                duration={3000}
                className="text-4xl sm:text-5xl font-bold text-primary"
              />
              <CardTitle className="text-sm sm:text-base font-medium leading-tight">
                Hip & Knee Replacement Surgeries Performed
              </CardTitle>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

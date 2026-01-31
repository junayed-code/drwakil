'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import hipImage from "@/assets/hip-replacement.jpg";
import kneeImage from "@/assets/knee-replacement.jpg";

export function Expertise() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section id="expertise" className="spacer-top-20" ref={ref}>
      <motion.div
        className="container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center sm:text-left max-w-xl"
          variants={headerVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary mb-4">
            Areas of Specialization
          </h2>
          <p className="text-muted-foreground">
            Dr. Wakil Ahmed specializes in advanced orthopedic procedures with a
            focus on joint replacement and arthroscopic surgery, utilizing the
            latest surgical techniques and evidence-based practices.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Knee Replacement Card */}
          <motion.div custom={0} variants={cardVariants}>
            <Card className="overflow-hidden py-0 gap-0">
            {/* Image Container */}
            <picture className="relative">
              <Image
                src={kneeImage}
                placeholder="blur"
                alt="Knee replacement surgery illustration"
                className="w-full h-full object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </picture>

            {/* Content */}
            <CardContent className="p-4 sm:p-6 space-y-2">
              <CardTitle className="text-xl font-medium sm:text-2xl">
                Total Knee Replacement
              </CardTitle>
              <CardDescription className="text-base">
                Specialized total knee arthroplasty for degenerative joint
                disease and advanced osteoarthritis. With over 400 successful
                procedures, Dr. Wakil provides personalized surgical solutions
                that prioritize patient outcomes and long-term joint function.
              </CardDescription>
            </CardContent>
            </Card>
          </motion.div>

          {/* Hip Replacement Card */}
          <motion.div custom={1} variants={cardVariants}>
            <Card className="overflow-hidden py-0 lg:flex-col-reverse gap-0">
            {/* Image Container */}
            <picture className="relative">
              <Image
                src={hipImage}
                placeholder="blur"
                alt="Hip replacement surgery illustration"
                className="w-full h-full object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </picture>

            {/* Content */}
            <CardContent className="p-4 sm:p-6 space-y-2">
              <CardTitle className="text-xl font-medium sm:text-2xl">
                Total Hip Replacement
              </CardTitle>
              <CardDescription className="text-base">
                Comprehensive total hip arthroplasty procedures for patients
                with severe osteoarthritis, rheumatoid arthritis, and hip joint
                damage. Dr. Wakil employs cutting-edge implant technology and
                minimally invasive surgical techniques to restore mobility and
                eliminate pain.
              </CardDescription>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

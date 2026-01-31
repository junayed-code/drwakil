'use client';

import { motion } from "framer-motion";
import { InterviewsCarousel } from "@components/interviews-carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Interview() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="interview" className="spacer-top-20 spacer-bottom-20" ref={ref}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.div className="container mb-10 md:mb-14 text-center" variants={headerVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
            Our Television Interviews
          </h2>
        </motion.div>
        <motion.div variants={carouselVariants}>
          <InterviewsCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
}

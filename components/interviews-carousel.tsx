"use client";

import { YouTubeEmbed } from "@next/third-parties/google/youtube";
import ClassNames from "embla-carousel-class-names";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";

const YOUTUBE_VIDEO_IDS = ["iCFLzWjQE_o", "7bBZNh_HPk4"];

export function InterviewsCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[ClassNames()]}
      opts={{ containScroll: false }}
    >
      <CarouselContent className="md:-ml-6 lg:-ml-8 [touch-action:pan-y_pinch-zoom]">
        {YOUTUBE_VIDEO_IDS.map((id) => (
          <CarouselItem
            key={id}
            className="md:pl-6 lg:pl-8 basis-[90vw] sm:max-lg:basis-[85vw] max-w-4xl not-[.is-snapped]:opacity-20 transition-opacity duration-300 ease-in-out"
          >
            <div className="rounded-2xl overflow-hidden [&_lite-youtube]:max-w-full! [&_lite-youtube]:aspect-square sm:[&_lite-youtube]:aspect-auto">
              <YouTubeEmbed videoid={id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

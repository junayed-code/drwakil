import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@components/ui/button";
import heroImg from "@/assets/hero-1.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative aspect-5/7 sm:aspect-4/5 flex flex-col justify-end md:aspect-auto bg-primary -z-2"
    >
      <div className="container md:py-32 flex items-end md:items-center">
        <div className="mb-[18%] md:mb-0 text-center mx-auto max-w-lg md:mx-0 md:text-left text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Restoring Movement, Rebuilding Lives
          </h1>
          <p className="mt-2 sm:mt-3 font-medium md:text-lg">
            Specialized in joint replacement and sports medicine, we use
            advanced techniques to help you return to the life you love.
          </p>
          <div className="mt-5 sm:mt-6">
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
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-1 -mt-(--header-height) aspect-9/10 md:aspect-auto max-md:after:absolute max-md:after:w-full max-md:after:h-24 after:bottom-0 after:bg-linear-to-b after:from-transparent after:to-primary after:to-90%">
        <Image
          src={heroImg}
          alt="Hero background image"
          className="object-top md:max-lg:object-top-right object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}

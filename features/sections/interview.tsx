import { InterviewsCarousel } from "@components/interviews-carousel";

export function Interview() {
  return (
    <section id="interview" className="spacer-top-20 spacer-bottom-20">
      <div>
        <div className="container mb-10 md:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
            Our Television Interviews
          </h2>
        </div>
        <InterviewsCarousel />
      </div>
    </section>
  );
}

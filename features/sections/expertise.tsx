'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Card } from '@components/ui/card';
import { Stethoscope, Zap } from 'lucide-react';
import hipImage from '@/assets/hip-replacement.jpg';
import kneeImage from '@/assets/knee-replacement.jpg';

export function Expertise() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="spacer-top-20 spacer-bottom-20" ref={sectionRef}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .expertise-animate {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .expertise-animate-image {
          animation: scaleIn 0.7s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
      `}</style>

      <div className={`container ${isVisible ? 'expertise-animate' : 'opacity-0'}`}>
        {/* Header */}
        <div className={`mb-12 md:mb-16 ${isVisible ? 'expertise-animate delay-1' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4">
            Areas of Specialization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Dr. Wakil Ahmed specializes in advanced orthopedic procedures with a focus on 
            joint replacement and arthroscopic surgery, utilizing the latest surgical techniques 
            and evidence-based practices.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Hip Replacement Card */}
          <div className={`${isVisible ? 'expertise-animate delay-2' : 'opacity-0'}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border-0 rounded-2xl">
              {/* Image Container */}
              <div
                className={`relative aspect-4/3 bg-secondary overflow-hidden ${
                  isVisible ? 'expertise-animate-image delay-2' : 'opacity-0'
                }`}
              >
                <Image
                  src={hipImage}
                  alt="Hip replacement surgery illustration"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                    Hip Replacement
                  </h3>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  Comprehensive total hip arthroplasty procedures for patients with severe 
                  osteoarthritis, rheumatoid arthritis, and hip joint damage. Dr. Wakil employs 
                  cutting-edge implant technology and minimally invasive surgical techniques to 
                  restore mobility and eliminate pain.
                </p>

                <div className="mt-auto pt-4 border-t border-border">
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Advanced implant materials
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Minimally invasive techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Rapid recovery protocols
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Knee Replacement Card */}
          <div className={`${isVisible ? 'expertise-animate delay-3' : 'opacity-0'}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border-0 rounded-2xl">
              {/* Image Container */}
              <div
                className={`relative aspect-4/3 bg-secondary overflow-hidden ${
                  isVisible ? 'expertise-animate-image delay-3' : 'opacity-0'
                }`}
              >
                <Image
                  src={kneeImage}
                  alt="Knee replacement surgery illustration"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                    Knee Replacement
                  </h3>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  Specialized total knee arthroplasty for degenerative joint disease and advanced 
                  osteoarthritis. With over 400 successful procedures, Dr. Wakil provides personalized 
                  surgical solutions that prioritize patient outcomes and long-term joint function.
                </p>

                <div className="mt-auto pt-4 border-t border-border">
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Precision alignment techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Computer-assisted surgery
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Customized prosthetics
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Specialties */}
        <div className={`mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border ${isVisible ? 'expertise-animate delay-4' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 md:mb-8">
            Additional Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Arthroscopic Surgery',
                description:
                  'Minimally invasive procedures for knee and shoulder joint conditions using advanced endoscopic techniques.',
              },
              {
                title: 'Sports Medicine',
                description:
                  'Specialized care for sports-related injuries with focus on returning athletes to peak performance.',
              },
              {
                title: 'Trauma Surgery',
                description:
                  'Comprehensive treatment of complex orthopedic injuries and fractures with expert surgical intervention.',
              },
            ].map((specialty, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-secondary/50 border border-border hover:bg-secondary transition-colors ${
                  isVisible ? 'expertise-animate' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${0.4 + idx * 0.1}s` : '0s',
                }}
              >
                <h4 className="text-lg font-semibold text-primary mb-3">{specialty.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

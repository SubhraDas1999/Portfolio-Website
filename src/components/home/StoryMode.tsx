'use client';
import { CAREER_MILESTONES } from '@/lib/constants';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const StoryMode = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<Record<string, boolean>>({});
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleMilestones((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      milestoneRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="story" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            My Career Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A visual narrative of key milestones and learnings.
          </p>
        </div>
        
        <div className="space-y-16">
          {CAREER_MILESTONES.map((milestone, index) => (
            <div
              key={milestone.id}
              id={`milestone-${milestone.id}`}
              ref={el => milestoneRefs.current[index] = el}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 ease-out transform",
                visibleMilestones[`milestone-${milestone.id}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index % 2 !== 0 && "md:flex-row-reverse" 
              )}
            >
              <div className="md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={milestone.dataAiHint}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <Card className="bg-card shadow-xl border-none">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <milestone.icon className="h-10 w-10 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-accent">{milestone.year}</p>
                        <CardTitle className="font-headline text-2xl md:text-3xl text-primary">
                          {milestone.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/80 mb-4">
                      {milestone.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground italic">
                      {milestone.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryMode;

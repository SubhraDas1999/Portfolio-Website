'use client';
import { ZYADASHOP_JOURNEY } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ProductJourney = () => {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <SectionWrapper id="journey" title="Zyadashop: 0 to Acquisition" subtitle="Mapping the evolution and key milestones of a startup journey.">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border transform md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-12">
          {ZYADASHOP_JOURNEY.map((item, index) => (
            <div
              key={item.id}
              id={`journey-${item.id}`}
              ref={el => itemRefs.current[index] = el}
              className={cn(
                "relative flex items-start gap-4 md:gap-8 transition-all duration-700 ease-out transform",
                visibleItems[`journey-${item.id}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Icon and Date */}
              <div className={cn(
                "relative z-10 flex flex-col items-center md:w-auto",
                index % 2 === 0 ? "md:ml-[-30px] md:mr-[calc(50%-14px)]" : "md:mr-[-30px] md:ml-[calc(50%-14px)]"
              )}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground whitespace-nowrap">{item.date}</p>
              </div>
              
              {/* Card Content */}
              <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <Badge key={metric} variant="secondary" className="text-xs">{metric}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductJourney;

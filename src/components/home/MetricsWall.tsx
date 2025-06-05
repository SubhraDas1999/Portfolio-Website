
import { METRICS_DATA } from '@/lib/constants';
import SectionWrapper from '@/components/shared/SectionWrapper';
import AnimatedCounter from './AnimatedCounter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MetricsWall = () => {
  return (
    <SectionWrapper id="metrics" title="Key Impact Metrics" subtitle="Quantifiable achievements showcasing value delivered.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {METRICS_DATA.map((metric) => (
          <Card key={metric.id} className="text-center bg-card/60 backdrop-blur-lg border border-border/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-5xl md:text-6xl font-extrabold text-[#2C3E50] dark:text-sky-400">
                <AnimatedCounter endValue={metric.value} suffix={metric.suffix} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-primary">{metric.label}</p>
              {metric.description && (
                <CardDescription className="text-sm text-muted-foreground mt-1">{metric.description}</CardDescription>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MetricsWall;

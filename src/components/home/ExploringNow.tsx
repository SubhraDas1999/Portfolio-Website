import { EXPLORING_NOW_DATA } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Badge } from '@/components/ui/badge';

const ExploringNow = () => {
  return (
    <SectionWrapper id="exploring" title="What I'm Exploring Now" subtitle="Continuous learning and passion projects fueling my growth.">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {EXPLORING_NOW_DATA.map((item) => (
          <Card key={item.id} className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-3">
                <item.icon className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
              </div>
               <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-foreground/80">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExploringNow;

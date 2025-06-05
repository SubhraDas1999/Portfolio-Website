import { CASE_STUDIES_DATA } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Badge } from '@/components/ui/badge';

const CaseStudies = () => {
  return (
    <SectionWrapper id="case-studies" title="Portfolio Case Studies" subtitle="Exploring real-world challenges and product solutions.">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES_DATA.map((study) => (
          <Card key={study.id} className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={study.image}
                alt={study.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={study.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{study.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {study.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-foreground/80">{study.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-2">
                {study.links.map(link => (
                  <Button key={link.label} variant="outline" asChild>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CaseStudies;

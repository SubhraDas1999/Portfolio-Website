import { PM_SKILLS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import SectionWrapper from '@/components/shared/SectionWrapper';

const SkillBoard = () => {
  return (
    <SectionWrapper id="skills" title="PM Skill Board" subtitle="A dashboard of my core competencies and tools I master.">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {PM_SKILLS.map((skill) => (
          <Card key={skill.name} className="text-center bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                <skill.icon className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-md text-foreground">{skill.name}</CardTitle>
            </CardHeader>
            {skill.level && (
            <CardContent className="pt-0">
                <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 [&>div]:bg-accent" />
            </CardContent>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillBoard;

import { ResumeCard } from './ResumeCard';
import { Briefcase, Code, Server, Layers } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <ResumeCard title="Work Experience" icon={<Briefcase className="h-6 w-6" />} delay={300}>
      <div className="glass-card p-6 border border-primary/20">
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-primary mb-2">Web Development Experience</h4>
          <p className="text-muted-foreground text-sm mb-4">Academic & Personal Projects</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h5 className="font-medium text-foreground">Frontend Development</h5>
              <p className="text-sm text-muted-foreground">Built responsive web interfaces using modern technologies and frameworks</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-accent/20">
              <Server className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h5 className="font-medium text-foreground">Cloud Technologies</h5>
              <p className="text-sm text-muted-foreground">Experience with AWS for deploying and managing cloud-based solutions</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h5 className="font-medium text-foreground">Full-Stack Development</h5>
              <p className="text-sm text-muted-foreground">Collaborative work on real-world projects contributing to both frontend and backend development</p>
            </div>
          </div>
        </div>
      </div>
    </ResumeCard>
  );
};
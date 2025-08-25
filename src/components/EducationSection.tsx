import { ResumeCard } from './ResumeCard';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  return (
    <ResumeCard title="Education" icon={<GraduationCap className="h-6 w-6" />} delay={200}>
      <div className="space-y-6">
        <div className="glass-card p-6 border border-primary/20">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-semibold text-primary">Electronics & Computer Science Engineering</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2023-2027</span>
            </div>
          </div>
          <p className="text-foreground font-medium mb-2">KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY</p>
          <p className="text-muted-foreground text-sm">Bachelor's Degree</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">Electronics</span>
            <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">Computer Science</span>
          </div>
        </div>

        <div className="glass-card p-6 border border-accent/20">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2020-2023</span>
            </div>
          </div>
          <p className="text-foreground font-medium mb-2">GURUKUL GRAMMAR SR SECONDARY SCHOOL</p>
          <p className="text-muted-foreground text-sm">Higher Studies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-accent/20 text-accent">CLASS 12</span>
          </div>
        </div>
      </div>
    </ResumeCard>
  );
};
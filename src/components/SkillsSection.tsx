import { ResumeCard } from './ResumeCard';
import { Code2, Database, Cloud, GitBranch, Users, Clock } from 'lucide-react';

export const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Java', level: 85, color: 'primary' },
    { name: 'C Programming', level: 80, color: 'accent' },
    { name: 'SQL', level: 75, color: 'primary' },
    { name: 'AWS', level: 70, color: 'accent' },
    { name: 'Git', level: 85, color: 'primary' },
    { name: 'VLSI Design', level: 60, color: 'accent' }
  ];

  const softSkills = [
    { name: 'Project Management', icon: <Users className="h-5 w-5" /> },
    { name: 'Public Relations', icon: <Users className="h-5 w-5" /> },
    { name: 'Teamwork', icon: <GitBranch className="h-5 w-5" /> },
    { name: 'Time Management', icon: <Clock className="h-5 w-5" /> },
    { name: 'Leadership', icon: <Users className="h-5 w-5" /> },
    { name: 'Communication', icon: <Users className="h-5 w-5" /> }
  ];

  return (
    <ResumeCard title="Skills" icon={<Code2 className="h-6 w-6" />} delay={400}>
      <div className="space-y-8">
        {/* Technical Skills */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <Database className="h-5 w-5" />
            Technical Skills
          </h4>
          <div className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      skill.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h4 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Professional Skills
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-4 text-center border border-accent/20 hover:border-accent/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-accent mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4">Languages</h4>
          <div className="flex flex-wrap gap-3">
            {['English (Fluent)', 'Hindi (Fluent)', 'Assamese (Basic)'].map((language) => (
              <span
                key={language}
                className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ResumeCard>
  );
};
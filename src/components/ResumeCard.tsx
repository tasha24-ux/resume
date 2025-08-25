import { ReactNode, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface ResumeCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
}

export const ResumeCard = ({ title, icon, children, delay = 0 }: ResumeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`glass-card p-8 transition-all duration-500 hover:scale-105 cursor-pointer group animate-fade-in ${
        isHovered ? 'tech-glow' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <ChevronRight 
          className={`ml-auto h-6 w-6 text-primary transition-transform duration-300 ${
            isHovered ? 'translate-x-2' : ''
          }`} 
        />
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </Card>
  );
};
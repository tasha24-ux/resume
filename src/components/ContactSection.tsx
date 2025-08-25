import { ResumeCard } from './ResumeCard';
import { User, MapPin, Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <ResumeCard title="Contact" icon={<User className="h-6 w-6" />} delay={100}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground">+91 7099033440</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-foreground">tazreenrahman024@gmail.com</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground">Guwahat Assam, 781007</span>
          </div>
        </div>
      </div>
    </ResumeCard>
  );
};
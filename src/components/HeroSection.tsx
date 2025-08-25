import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">TAZREEN</span>
            <br />
            <span className="text-foreground">RAHMAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Electronics & Computer Science Student
          </p>
          <p className="text-lg text-primary font-medium">
            Web Developer | Tech Enthusiast | Innovation Seeker
          </p>
        </div>

        <div className="glass-card max-w-2xl mx-auto p-8 mb-12">
          <p className="text-foreground/90 leading-relaxed">
            Aspiring web developer with passion for technology and foundation in programming languages. 
            Exploring various web development technologies with focus on user experience and innovation. 
            Currently developing skills through academic projects and hands-on learning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="tech-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            <Github className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce tech-glow rounded-full p-3 bg-primary/20 hover:bg-primary/30 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};
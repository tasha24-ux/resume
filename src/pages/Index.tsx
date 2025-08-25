import { Scene3D } from '@/components/Scene3D';
import { HeroSection } from '@/components/HeroSection';
import { ContactSection } from '@/components/ContactSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { Suspense } from 'react';

const Index = () => {
  return (
    <div className="min-h-screen dark">
      {/* 3D Background Scene */}
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Scene3D />
      </Suspense>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Professional</span>
                <br />
                <span className="text-foreground">Profile</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore my journey in technology, education, and professional development
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ContactSection />
              <EducationSection />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ExperienceSection />
              <SkillsSection />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Tazreen Rahman. Built with React, Three.js & Modern Web Technologies.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

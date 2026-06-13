import React from 'react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { Sparkles, UserCheck, CalendarDays } from 'lucide-react';

export default function LearnMoreCards() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Take the Next Step"
          title="Begin Your Family Balancing Journey"
          subtitle="Explore the science, evaluate eligibility parameters, and connect with fertility physicians."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 — Learn More */}
          <Card
            title="Learn More"
            description="Hoping for a baby girl? … or perhaps a baby boy? Increase the probability of conceiving a child of your preferred chromosomal sex with the scientifically proven MicroSort® preconception method."
            cta="Find Out More"
            href="/process"
            icon={Sparkles}
          />

          {/* Card 2 — Do I Qualify? */}
          <Card
            title="Do I Qualify?"
            description="You can qualify for MicroSort based on two separate guidelines: seeking family balancing (achieving balanced representation of chromosomal sex in your family) or wishing to reduce the risk of transmitting X-linked genetic conditions."
            cta="Find Out More"
            href="/requirements"
            icon={UserCheck}
          />

          {/* Card 3 — Get Started */}
          <Card
            title="Get Started"
            description="Begin the process that will increase your chances of conceiving a baby of your preferred sex! Your first step is to arrange a consultation with a MicroSort® laboratory or participating physician. After clinical review, you can schedule your specimen sort."
            cta="Find Out More"
            href="/planning"
            icon={CalendarDays}
          />
        </div>
      </div>
    </section>
  );
}

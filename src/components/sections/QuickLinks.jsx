import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, FileSpreadsheet, CalendarDays, Award } from 'lucide-react';

const links = [
  {
    label: "Process",
    href: "/process",
    description: "Learn how flow cytometry separates X and Y sperm.",
    icon: Brain,
  },
  {
    label: "Requirements",
    href: "/requirements",
    description: "See clinical eligibility criteria and required medical tests.",
    icon: FileSpreadsheet,
  },
  {
    label: "Planning",
    href: "/planning",
    description: "Prepare for your laboratory visit and schedule tests.",
    icon: CalendarDays,
  },
  {
    label: "Results",
    href: "/verify",
    description: "Verify your specimen sort and view laboratory reports.",
    icon: Award,
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-6 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.href}
                className="bg-surface border border-border/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl hover:border-primary-light/30 transition-all duration-300 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={20} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-primary mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-primary group-hover:text-primary-light transition-colors">
                  <span>Explore {item.label}</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

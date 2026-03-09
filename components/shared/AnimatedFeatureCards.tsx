import { ReactNode } from 'react';
import { AnimatedFeatureCardsClient } from './AnimatedFeatureCardsClient';

interface Feature {
  iconName: 'sparkles' | 'palette' | 'award' | 'video';
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface AnimatedFeatureCardsProps {
  features: Feature[];
  processSteps: ProcessStep[];
  children: ReactNode;
}

export function AnimatedFeatureCards({
  features,
  processSteps,
  children,
}: AnimatedFeatureCardsProps) {
  return (
    <AnimatedFeatureCardsClient
      features={features}
      processSteps={processSteps}
      children={children}
    />
  );
}

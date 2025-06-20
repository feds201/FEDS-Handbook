// ============================================================================
// FEDS-Handbook Components Library
// ============================================================================
// A comprehensive, parameter-driven components library for creating
// any widget or UI element needed across the FEDS Handbook.
//
// Components are organized into logical categories:
// - Base: Fundamental building blocks (Button, Card, Hero)
// - Core: Essential widgets and containers
// - Layout: Grid systems and layout components
// - Data: Data visualization and stats components
// - Interactive: Interactive elements and timelines
// - Navigation: Navigation and menu components
// ============================================================================

// ============================================================================
// BASE COMPONENTS - Fundamental building blocks
// ============================================================================
export { GenericButton } from './Library/Base/GenericButton';
export { GenericCard } from './Library/Base/GenericCard';
export { GenericHero } from './Library/Base/GenericHero';

// ============================================================================
// CORE COMPONENTS - Essential widgets and containers
// ============================================================================
export { GenericWidget } from './Library/Core/GenericWidget';

// ============================================================================
// LAYOUT COMPONENTS - Grid systems and layout
// ============================================================================
export { GenericGrid } from './Library/Layout/GenericGrid';

// ============================================================================
// DATA COMPONENTS - Data visualization and statistics
// ============================================================================
export { GenericStats } from './Library/Data/GenericStats';

// ============================================================================
// INTERACTIVE COMPONENTS - Interactive elements
// ============================================================================
export { GenericTimeline } from './Library/Interactive/GenericTimeline';

// ============================================================================
// NAVIGATION COMPONENTS - Navigation and menus
// ============================================================================
export { GenericNavigation } from './Library/Navigation/GenericNavigation';

// ============================================================================
// CONVENIENCE EXPORTS - Pre-configured generic components
// ============================================================================
// These are the generic components configured for common use cases

import React from 'react';
import { GenericButton } from './Library/Base/GenericButton';
import { GenericCard } from './Library/Base/GenericCard';
import { GenericHero } from './Library/Base/GenericHero';
import { GenericWidget } from './Library/Core/GenericWidget';
import { GenericGrid } from './Library/Layout/GenericGrid';
import { GenericStats } from './Library/Data/GenericStats';
import { GenericTimeline } from './Library/Interactive/GenericTimeline';
import { GenericNavigation } from './Library/Navigation/GenericNavigation';

// Pre-configured Hero components
export const ProgrammingHero = (props) => (
  <GenericHero
    title="Welcome to Programming Excellence"
    subtitle="Where Code Meets Competition"
    description="Programming in FIRST Robotics isn't just about writing code—it's about bringing mechanical marvels to life."
    backgroundType="gradient"
    backgroundValue="linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #667eea 100%)"
    particles={[
      { symbol: '💻', transform: 'translateX(10px)' },
      { symbol: '🤖', transform: 'translateX(-10px)' },
      { symbol: '⚡', transform: 'translateX(5px)' },
      { symbol: '🚀', transform: 'translateX(-5px)' }
    ]}
    height="lg"
    animation={{ enabled: true }}
    {...props}
  />
);

export const HeroSection = (props) => (
  <GenericHero
    title="FEDS 201 Robotics"
    subtitle="Building Tomorrow's Engineers Today"
    description="Discover innovation, excellence, and championship performance in competitive robotics."
    backgroundType="gradient"
    backgroundValue="linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #7c3aed 50%, #06b6d4 75%, #1e293b 100%)"
    height="lg"
    {...props}
  />
);

// Pre-configured Card components (for backward compatibility)
export const ModernCard = (props) => (
  <GenericCard
    variant="modern"
    size="lg"
    bgPattern='dots'
    interactive={true}
    animation={{ enabled: true, hover: true }}
    {...props}
  />
);

export const ResourceWidget = (props) => (
  <GenericWidget
    variant="card"  
    size="sm"
    interactive={true}
    {...props}
  />
);

// Pre-configured Stats components
export const StatsSection = (props) => (
  <GenericStats
    layout="horizontal"
    variant="gradient"
    countUp={true}
    animation={{ enabled: true, duration: 2000, delay: 100 }}
    stats={[
      { value: 23, label: 'Years of Excellence', icon: '🏆', suffix: '+' },
      { value: 150, label: 'Students Impacted', icon: '👥', suffix: '+' },
      { value: 50, label: 'Competitions Won', icon: '🥇', suffix: '+' },
      { value: 12, label: 'Championship Titles', icon: '🏆' }
    ]}
    {...props}
  />
);

export const SoftwareStats = (props) => (
  <GenericStats
    layout="grid"
    variant="cards"
    countUp={true}
    stats={[
      { value: 15000, label: 'Lines of Code', icon: '💻', suffix: '+' },
      { value: 25, label: 'Web Applications', icon: '🌐', suffix: '+' },
      { value: 8, label: 'Mobile Apps', icon: '📱' },
      { value: 50, label: 'Automated Tests', icon: '🔧', suffix: '+' }
    ]}
    {...props}
  />
);

// Pre-configured Grid components
export const ModernWidgetGrid = (props) => (
  <GenericGrid
    layout="responsive"
    columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
    gap="24px"
    animation={{ enabled: true, stagger: 100 }}
    {...props}
  />
);

export const ProgrammingWingsGrid = (props) => (
  <GenericGrid
    layout="responsive" 
    columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}
    gap="32px"
    animation={{ enabled: true, stagger: 200 }}
    {...props}
  />
);

// Pre-configured Timeline components
export const InteractiveTimeline = (props) => (
  <GenericTimeline
    orientation="vertical"
    variant="cards"
    interactive={true}
    animation={{ enabled: true, stagger: 200 }}
    {...props}
  />
);

// Pre-configured Navigation components
export const TeamStructureGrid = (props) => (
  <GenericNavigation
    layout="grid"
    variant="cards"
    animated={true}
    {...props}
  />
);

// Specialized components that use generic components internally
export const SoftwareBenefitCard = ({ icon, title, description, ...props }) => (
  <GenericCard
    variant="glass"
    size="md"
    interactive={false}
    animation={{ enabled: true, hover: false }}
    {...props}
  >
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
      <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>{description}</p>
    </div>
  </GenericCard>
);

export const SoftwareSkillsMatrix = (props) => (
  <GenericWidget
    title="Technology Stack"
    variant="glass"
    size="lg"
    {...props}
  >
    <GenericGrid
      layout="responsive"
      columns={{ xs: 2, sm: 3, md: 4 }}
      gap="16px"
      items={[
        'React', 'Next.js', 'Node.js', 'Python',
        'Flutter', 'Firebase', 'PostgreSQL', 'Docker'
      ]}
    />
  </GenericWidget>
);

export const SoftwarePath = (props) => (
  <GenericTimeline
    orientation="vertical"
    variant="default"
    interactive={true}
    items={[
      {
        title: 'Web Development Fundamentals',
        description: 'Learn HTML, CSS, JavaScript, and modern frameworks',
        icon: '🌐',
        date: 'Month 1-2'
      },
      {
        title: 'Backend Development', 
        description: 'Master server-side programming and databases',
        icon: '⚙️',
        date: 'Month 3-4'
      },
      {
        title: 'Mobile Development',
        description: 'Build cross-platform mobile applications',
        icon: '📱', 
        date: 'Month 5-6'
      },
      {
        title: 'Data Science & AI',
        description: 'Implement machine learning and analytics',
        icon: '🤖',
        date: 'Month 7+'
      }
    ]}
    {...props}
  />
);

export const SoftwareTechStack = (props) => (
  <GenericGrid
    layout="responsive"
    columns={{ xs: 1, sm: 2, md: 3 }}
    gap="20px"
    items={[
      {
        title: 'Frontend',
        content: 'React, Next.js, TypeScript'
      },
      {
        title: 'Backend', 
        content: 'Node.js, Python, Express'
      },
      {
        title: 'Database',
        content: 'PostgreSQL, Firebase, MongoDB'
      },
      {
        title: 'Mobile',
        content: 'Flutter, React Native'
      },
      {
        title: 'Cloud',
        content: 'AWS, Vercel, Firebase'
      },
      {
        title: 'AI/ML',
        content: 'TensorFlow, PyTorch, scikit-learn'
      }
    ]}
    {...props}
  />
);

export const SoftwareProjectsDemo = (props) => (
  <GenericWidget
    title="Interactive Project Gallery"
    subtitle="Explore our software projects"
    variant="gradient"
    size="xl"
    interactive={true}
    {...props}
  >
    <p>Click to explore our comprehensive software project portfolio...</p>
  </GenericWidget>
);

export const WingComparisonWidget = (props) => (
  <GenericGrid
    layout="responsive"
    columns={{ xs: 1, sm: 1, md: 2 }}
    gap="32px"
    items={[
      {
        title: 'FRC Wing',
        description: 'Robot programming, autonomous systems, real-time control'
      },
      {
        title: 'Software Wing', 
        description: 'Web apps, mobile development, data analytics, AI/ML'
      }
    ]}
    renderItem={(item) => (
      <GenericCard variant="modern" size="lg" interactive={false}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </GenericCard>
    )}
    {...props}
  />
);

export const InteractiveStatsWidget = (props) => (
  <GenericStats
    layout="carousel"
    variant="gradient" 
    countUp={true}
    {...props}
  />
);

// ============================================================================
// EXAMPLE USAGE PATTERNS
// ============================================================================
/*

// Creating a custom hero section:
<GenericHero
  title="My Custom Title"
  subtitle="Custom subtitle"
  backgroundType="gradient"
  backgroundValue="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  buttons={[
    { text: 'Get Started', style: 'primary', onClick: () => {} },
    { text: 'Learn More', style: 'secondary', href: '/learn' }
  ]}
  particles={[
    { symbol: '🚀', transform: 'translateX(10px)' },
    { symbol: '⚡', transform: 'translateX(-10px)' }
  ]}
  height="lg"
/>

// Creating a stats section:
<GenericStats
  layout="horizontal"
  variant="cards"
  countUp={true}
  stats={[
    { value: 100, label: 'Projects', icon: '📊', suffix: '+' },
    { value: 50, label: 'Students', icon: '👥' },
    { value: 25, label: 'Awards', icon: '🏆' }
  ]}
/>

// Creating a timeline:
<GenericTimeline
  orientation="vertical"
  variant="cards"
  interactive={true}
  items={[
    {
      title: 'Event 1',
      date: '2024',
      description: 'Description of event',
      icon: '🎯'
    }
  ]}
/>

// Creating a grid of cards:
<GenericGrid
  layout="responsive"
  columns={{ xs: 1, sm: 2, md: 3 }}
  items={cardData}
  renderItem={(item) => (
    <GenericCard variant="modern" {...item} />
  )}
/>

// Creating a custom widget:
<GenericWidget
  title="Custom Widget"
  icon="🔧"
  variant="glass"
  size="md"
  interactive={true}
  link="/custom-page"
>
  <p>Custom content goes here</p>
</GenericWidget>

*/

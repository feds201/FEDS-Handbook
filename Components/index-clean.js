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

import React from 'react';

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
// These provide backward compatibility while using generic components internally
// ============================================================================

// Pre-configured Cards
export const ModernCard = (props) => <GenericCard {...props} variant="modern" />;
export const ResourceCard = (props) => <GenericCard {...props} variant="glass" />;
export const FeatureCard = (props) => <GenericCard {...props} variant="gradient" />;

// Pre-configured Widgets  
export const ResourceWidget = (props) => <GenericWidget {...props} variant="card" />;
export const StatsSection = (props) => <GenericStats {...props} variant="cards" />;
export const InteractiveTimeline = (props) => <GenericTimeline {...props} variant="vertical" interactive={true} />;

// Pre-configured Buttons
export const PrimaryButton = (props) => <GenericButton {...props} variant="primary" />;
export const SecondaryButton = (props) => <GenericButton {...props} variant="secondary" />;

// Pre-configured Heroes
export const GradientHero = (props) => <GenericHero {...props} variant="gradient" />;
export const MinimalHero = (props) => <GenericHero {...props} variant="minimal" />;

// Pre-configured Grids
export const FeatureGrid = (props) => <GenericGrid {...props} variant="auto-fit" gap="lg" />;
export const CardGrid = (props) => <GenericGrid {...props} columns={3} gap="md" />;

// Legacy component aliases for full backward compatibility
export const WelcomeHero = (props) => <GenericHero {...props} variant="gradient" height="lg" />;
export const StatsWidget = (props) => <GenericStats {...props} variant="minimal" />;
export const TimelineWidget = (props) => <GenericTimeline {...props} variant="vertical" />;
export const NavigationWidget = (props) => <GenericNavigation {...props} variant="horizontal" />;

// Programming-specific pre-configured components
export const ProgrammingHero = (props) => (
  <GenericHero
    title="Programming Excellence"
    subtitle="Where Code Meets Competition"
    description="Master the art of competitive robotics programming. From Java fundamentals to advanced autonomous systems."
    variant="gradient"
    height="lg"
    {...props}
  />
);

// ============================================================================
// COMPONENT IMPORTS FOR JSX ELEMENTS
// Import all generic components for use in pre-configured exports
// ============================================================================
import { GenericButton } from './Library/Base/GenericButton';
import { GenericCard } from './Library/Base/GenericCard';
import { GenericHero } from './Library/Base/GenericHero';
import { GenericWidget } from './Library/Core/GenericWidget';
import { GenericGrid } from './Library/Layout/GenericGrid';
import { GenericStats } from './Library/Data/GenericStats';
import { GenericTimeline } from './Library/Interactive/GenericTimeline';
import { GenericNavigation } from './Library/Navigation/GenericNavigation';

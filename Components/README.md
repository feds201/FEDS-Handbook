# FEDS-Handbook Components Library

A comprehensive, parameter-driven components library for creating virtually any widget or UI element needed across the FEDS Handbook. Built with React, TypeScript support, and modern design principles.

## 🎯 Philosophy

Our components library follows these core principles:

- **Parameter-driven**: Every component is highly configurable through props
- **Responsive**: Works beautifully across all screen sizes
- **Themeable**: Adapts to light and dark themes automatically
- **Animated**: Smooth, professional animations that enhance UX
- **Reusable**: One component, infinite possibilities
- **Accessible**: ARIA labels and keyboard navigation support

## 📁 Component Structure

```
Components/
├── Library/
│   ├── Base/          # Fundamental building blocks
│   │   ├── GenericButton.jsx
│   │   ├── GenericCard.jsx
│   │   └── GenericHero.jsx
│   ├── Core/          # Essential widgets and containers
│   │   └── GenericWidget.jsx
│   ├── Layout/        # Grid systems and layout
│   │   └── GenericGrid.jsx
│   ├── Data/          # Data visualization and statistics
│   │   └── GenericStats.jsx
│   ├── Interactive/   # Interactive elements
│   │   └── GenericTimeline.jsx
│   └── Navigation/    # Navigation and menus
│       └── GenericNavigation.jsx
└── index.js           # Main export file with pre-configured components
```

## 🚀 Quick Start

### Basic Usage

```jsx
import { 
  GenericButton, 
  GenericCard, 
  GenericHero, 
  GenericStats,
  GenericGrid,
  GenericTimeline,
  GenericWidget,
  GenericNavigation 
} from '../Components'

// Basic card
<GenericCard
  title="My Card"
  variant="modern"
  size="md"
  interactive={true}
>
  Card content here
</GenericCard>

// Statistics display
<GenericStats
  layout="horizontal"
  variant="gradient"
  countUp={true}
  stats={[
    { value: 100, label: 'Projects', icon: '📊', suffix: '+' }
  ]}
/>
```

### Pre-configured Components

For common use cases, use pre-configured components:

```jsx
import { 
  ProgrammingHero,
  StatsSection,
  ModernCard,
  ResourceWidget 
} from '../Components'

<ProgrammingHero />
<StatsSection />
```

## 📚 Component Documentation

### GenericButton

Highly configurable button component supporting multiple variants, sizes, and states.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `icon`: Icon element or emoji
- `iconPosition`: 'left' | 'right'
- `loading`: boolean
- `disabled`: boolean
- `href`: string (makes button act as link)
- `fullWidth`: boolean
- `gradient`: string (CSS gradient)
- `onClick`: function
- `customStyles`: object

**Examples:**
```jsx
<GenericButton variant="primary" size="lg" icon="🚀">
  Get Started
</GenericButton>

<GenericButton 
  variant="gradient" 
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  loading={true}
>
  Processing...
</GenericButton>
```

### GenericCard

Flexible card component with multiple variants and interactive capabilities.

**Props:**
- `variant`: 'default' | 'modern' | 'glass' | 'gradient' | 'minimal' | 'elevated'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `interactive`: boolean
- `gradient`: string
- `icon`: React element
- `title`: string
- `subtitle`: string
- `description`: string
- `link`: string
- `onClick`: function
- `animation`: object
- `customStyles`: object

**Examples:**
```jsx
<GenericCard
  variant="glass"
  size="lg"
  interactive={true}
  title="Glass Card"
  subtitle="With blur effects"
  customStyles={{ background: 'rgba(255, 255, 255, 0.1)' }}
>
  Content goes here
</GenericCard>
```

### GenericHero

Comprehensive hero section component with background options and animations.

**Props:**
- `title`: string
- `subtitle`: string
- `description`: string
- `backgroundType`: 'gradient' | 'image' | 'pattern' | 'video'
- `backgroundValue`: string
- `particles`: array of particle objects
- `buttons`: array of button objects
- `height`: 'sm' | 'md' | 'lg' | 'full'
- `textAlign`: 'left' | 'center' | 'right'
- `overlay`: object
- `animation`: object

**Examples:**
```jsx
<GenericHero
  title="Welcome to FEDS201"
  subtitle="Building Tomorrow's Engineers"
  backgroundType="gradient"
  backgroundValue="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  particles={[
    { symbol: '🚀', transform: 'translateX(10px)' },
    { symbol: '⚡', transform: 'translateX(-10px)' }
  ]}
  buttons={[
    { text: 'Get Started', style: 'primary', href: '/start' },
    { text: 'Learn More', style: 'secondary', href: '/learn' }
  ]}
  height="lg"
/>
```

### GenericStats

Statistics display component with count-up animations and multiple layouts.

**Props:**
- `stats`: array of stat objects
- `layout`: 'horizontal' | 'vertical' | 'grid' | 'carousel'
- `variant`: 'default' | 'gradient' | 'minimal' | 'cards'
- `countUp`: boolean
- `animation`: object

**Examples:**
```jsx
<GenericStats
  layout="horizontal"
  variant="gradient"
  countUp={true}
  stats={[
    { value: 23, label: 'Years', icon: '🏆', suffix: '+' },
    { value: 150, label: 'Students', icon: '👥', suffix: '+' },
    { value: 50, label: 'Awards', icon: '🥇', suffix: '+' }
  ]}
/>
```

### GenericGrid

Flexible grid layout component with responsive columns and custom rendering.

**Props:**
- `items`: array
- `layout`: 'auto' | 'fixed' | 'masonry' | 'responsive'
- `columns`: object with breakpoint values
- `gap`: string
- `renderItem`: function
- `animation`: object

**Examples:**
```jsx
<GenericGrid
  layout="responsive"
  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
  gap="24px"
  items={cardData}
  renderItem={(item) => (
    <GenericCard {...item} />
  )}
/>
```

### GenericTimeline

Interactive timeline component with multiple orientations and variants.

**Props:**
- `items`: array of timeline items
- `orientation`: 'vertical' | 'horizontal'
- `variant`: 'default' | 'minimal' | 'cards' | 'dots'
- `interactive`: boolean
- `animation`: object

**Examples:**
```jsx
<GenericTimeline
  orientation="vertical"
  variant="cards"
  interactive={true}
  items={[
    {
      title: 'Event 1',
      date: '2024',
      description: 'Description here',
      icon: '🎯',
      tags: ['Tag1', 'Tag2']
    }
  ]}
/>
```

### GenericWidget

Versatile widget container with multiple variants and interactive features.

**Props:**
- `title`: string
- `subtitle`: string
- `icon`: React element
- `variant`: 'default' | 'card' | 'minimal' | 'glass' | 'gradient'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `interactive`: boolean
- `link`: string
- `onClick`: function
- `animation`: object

**Examples:**
```jsx
<GenericWidget
  title="Resource Widget"
  subtitle="External link"
  icon="🔗"
  variant="glass"
  size="md"
  interactive={true}
  link="https://example.com"
>
  Widget content
</GenericWidget>
```

### GenericWidget - Specialized Variants

The GenericWidget component supports several specialized variants for complex use cases:

#### Comparison Widget
Perfect for side-by-side comparisons:

```jsx
<GenericWidget 
  title="FRC vs Software Wing"
  variant="comparison"
  data={{
    leftSide: {
      title: "FRC Wing",
      icon: "🤖",
      items: [
        "Direct robot control",
        "Real-time performance", 
        "Hardware integration",
        "Competition-focused"
      ]
    },
    rightSide: {
      title: "Software Wing",
      icon: "💻", 
      items: [
        "Strategic advantage",
        "Data-driven insights",
        "Platform development",
        "Year-round projects"
      ]
    }
  }}
/>
```

#### Tech Stack Widget
Display technology stacks and categories:

```jsx
<GenericWidget 
  title="Technology Stack"
  variant="techStack"
  data={{
    categories: [
      {
        name: "Frontend",
        icon: "🎨",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        name: "Backend",
        icon: "⚙️", 
        technologies: ["Node.js", "Express", "Python", "FastAPI"]
      }
    ]
  }}
/>
```

#### Skills Matrix Widget
Show skill progression across different levels:

```jsx
<GenericWidget 
  title="Skills Development Matrix"
  variant="skillsMatrix"
  data={{
    skills: [
      { 
        name: "JavaScript/TypeScript", 
        beginner: "Variables, Functions", 
        intermediate: "React, Async/Await", 
        advanced: "Performance Optimization" 
      },
      {
        name: "Python",
        beginner: "Syntax, Data Types",
        intermediate: "pandas, APIs", 
        advanced: "Machine Learning"
      }
    ]
  }}
/>
```

#### Learning Path Widget
Display structured learning progressions:

```jsx
<GenericWidget 
  title="Your Learning Journey"
  variant="learningPath"
  data={{
    phases: [
      {
        title: "Foundation",
        duration: "2-4 weeks",
        skills: ["Programming fundamentals", "Git version control"],
        projects: ["Personal website", "Simple calculator app"]
      },
      {
        title: "Development", 
        duration: "4-8 weeks",
        skills: ["React development", "API integration"],
        projects: ["Team dashboard", "Data visualization tool"]
      }
    ]
  }}
/>
```

#### Projects Demo Widget
Showcase project portfolios:

```jsx
<GenericWidget 
  title="Software Projects Portfolio"
  variant="projectsDemo"
  data={{
    projects: [
      {
        name: "Scout Ops Suite",
        description: "Comprehensive scouting and match analysis platform",
        tech: ["React", "Supabase", "Python"],
        impact: "95% prediction accuracy",
        status: "Production"
      },
      {
        name: "Team Dashboard",
        description: "Real-time team performance management",
        tech: ["Next.js", "Firebase", "TypeScript"],
        impact: "50% efficiency increase", 
        status: "Active"
      }
    ]
  }}
/>
```

### GenericNavigation

Navigation component with multiple layouts and variants.

**Props:**
- `items`: array of navigation items
- `layout`: 'horizontal' | 'vertical' | 'grid' | 'tabs'
- `variant`: 'default' | 'pills' | 'underline' | 'cards'
- `animated`: boolean
- `activeItem`: string/number
- `onItemClick`: function

**Examples:**
```jsx
<GenericNavigation
  layout="horizontal"
  variant="pills"
  animated={true}
  items={[
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ]}
/>
```

## 🎨 Customization

### Theme Support

All components automatically adapt to light and dark themes using the `useTheme` hook from `nextra-theme-docs`.

### Custom Styles

Override component styles using the `customStyles` prop:

```jsx
<GenericCard
  customStyles={{
    background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
    borderRadius: '20px',
    transform: 'perspective(1000px) rotateX(5deg)'
  }}
>
  Custom styled card
</GenericCard>
```

### Animation Control

Control animations with the `animation` prop:

```jsx
<GenericGrid
  animation={{ 
    enabled: true, 
    stagger: 100,
    duration: 600
  }}
/>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

```jsx
<GenericGrid
  columns={{ 
    xs: 1,    // 1 column on mobile
    sm: 2,    // 2 columns on small tablets
    md: 3,    // 3 columns on tablets
    lg: 4     // 4 columns on desktop
  }}
/>
```

## 🔧 Advanced Usage

### Creating Complex Layouts

Combine multiple components for rich layouts:

```jsx
<GenericHero title="Welcome" height="md" />

<GenericStats 
  layout="horizontal" 
  variant="gradient"
  stats={statsData}
/>

<GenericGrid
  layout="responsive"
  items={cardData}
  renderItem={(item) => (
    <GenericWidget {...item}>
      <GenericButton variant="primary">
        Learn More
      </GenericButton>
    </GenericWidget>
  )}
/>

<GenericTimeline
  items={timelineData}
  interactive={true}
/>
```

### Custom Render Functions

Use render functions for complete control:

```jsx
<GenericGrid
  items={data}
  renderItem={(item, index) => (
    <div style={{ 
      background: `hsl(${index * 30}, 70%, 60%)`,
      padding: '20px',
      borderRadius: '12px'
    }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <GenericButton 
        variant="outline" 
        size="sm"
        onClick={() => handleItemClick(item)}
      >
        Action
      </GenericButton>
    </div>
  )}
/>
```

## 🚀 Migration Guide

### From Legacy Components

Replace old components with generic equivalents:

```jsx
// Old
<ModernCard title="Title" description="Desc" />

// New  
<GenericCard 
  variant="modern" 
  title="Title" 
  subtitle="Desc" 
/>

// Old
<StatsSection />

// New
<GenericStats
  layout="horizontal"
  variant="gradient"
  stats={[...]}
/>
```

## 🛠️ Development

### Adding New Variants

To add a new variant to a component:

1. Add the variant to the `variantConfig` object
2. Define the styling properties
3. Update the component's prop types
4. Add documentation and examples

### Creating New Components

Follow this structure for new generic components:

```jsx
import { useState, useEffect } from 'react';
import { useTheme } from 'nextra-theme-docs';

export const GenericNewComponent = ({
  // Define props with defaults
  variant = 'default',
  size = 'md',
  customStyles = {},
  ...props
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const isDark = theme === 'dark';
  
  // Component logic here
  
  return (
    <div style={componentStyle} {...props}>
      {/* Component JSX */}
    </div>
  );
};
```

## 📖 Examples

Check out the [Components Demo page](/components-demo) for comprehensive examples of all components in action.

## 🤝 Contributing

1. Follow the established patterns for new components
2. Ensure responsive design across all breakpoints
3. Test in both light and dark themes
4. Add comprehensive prop documentation
5. Include usage examples

## 📄 License

This components library is part of the FEDS-Handbook project and follows the same licensing terms.

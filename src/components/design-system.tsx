import type React from 'react';
import { FaArrowRight, FaDownload, FaBook, FaStar } from 'react-icons/fa';

// Consistent spacing and typography scale
export const SPACING = {
  section: 'py-24',
  sectionLarge: 'py-32',
  container: 'container mx-auto px-4',
  gap: 'gap-6',
  gapSmall: 'gap-3',
  gapLarge: 'gap-12',
};

export const TYPOGRAPHY = {
  heroTitle: 'text-5xl md:text-7xl font-extrabold',
  sectionTitle: 'text-4xl md:text-5xl font-bold',
  cardTitle: 'text-2xl font-bold',
  subtitle: 'text-xl',
  description: 'text-lg',
  body: 'text-base',
  small: 'text-sm',
};

export const OPACITY = {
  primary: 'text-base-content',
  secondary: 'text-base-content/80',
  muted: 'text-base-content/70',
  faint: 'text-base-content/60',
};

// Reusable Hero Section Component
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  badgeText?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  primaryButton?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  variant?: 'default' | 'gradient';
}

export function HeroSection({
  title,
  subtitle,
  description,
  badgeText,
  badgeIcon: BadgeIcon = FaStar,
  primaryButton,
  secondaryButton,
  variant = 'default',
}: HeroSectionProps) {
  const backgroundClass = variant === 'gradient' 
    ? 'bg-gradient-to-br from-base-100 via-base-200 to-base-100'
    : 'bg-base-100';

  return (
    <section className={`relative overflow-hidden ${backgroundClass} ${SPACING.sectionLarge}`}>
      <div className={SPACING.container}>
        <div className='max-w-5xl mx-auto text-center flex flex-col items-center'>
          {badgeText && (
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8'>
              <BadgeIcon className='w-4 h-4' />
              <span className='text-sm font-semibold'>{badgeText}</span>
            </div>
          )}
          <h1 className={`${TYPOGRAPHY.heroTitle} mb-6 ${OPACITY.primary}`}>
            {title}
            {subtitle && <span className='block text-primary mt-2'>{subtitle}</span>}
          </h1>
          <p className={`${TYPOGRAPHY.description} ${OPACITY.secondary} mb-10 max-w-3xl leading-relaxed`}>
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className='flex flex-wrap justify-center gap-4'>
              {primaryButton && (
                <Button
                  variant='primary'
                  size='lg'
                  href={primaryButton.href}
                  icon={primaryButton.icon}
                  className='shadow-lg'
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  variant='ghost'
                  size='lg'
                  href={secondaryButton.href}
                  icon={secondaryButton.icon}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10' />
    </section>
  );
}

// Reusable Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'error';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = 'btn gap-2 transition-all duration-300';
  const variantClasses = {
    primary: 'btn-primary !text-primary-content',
    secondary: 'btn-secondary !text-secondary-content',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
    error: 'btn-error !text-error-content',
  };
  
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className='w-4 h-4' />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses}>
      {content}
    </button>
  );
}

// Reusable Card Component
interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  variant?: 'default' | 'featured' | 'glass';
}

export function Card({ children, hover = true, className = '', variant = 'default' }: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-base-200 border border-base-300',
    featured: 'bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20',
    glass: 'bg-base-100/80 backdrop-blur-sm border border-base-300/50',
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}

// Reusable Feature Grid Component
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: string;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function FeatureGrid({ 
  features, 
  title, 
  subtitle, 
  columns = 4 
}: FeatureGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={`${SPACING.section} bg-base-100`}>
      <div className={SPACING.container}>
        {(title || subtitle) && (
          <div className='text-center mb-16 flex flex-col items-center'>
            {title && (
              <h2 className={`${TYPOGRAPHY.sectionTitle} mb-4 ${OPACITY.primary}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`${TYPOGRAPHY.description} ${OPACITY.muted} max-w-2xl`}>{subtitle}</p>
            )}
          </div>
        )}
        <div className={`grid ${gridClasses[columns]} ${SPACING.gap} max-w-7xl mx-auto`}>
          {features.map((feature) => (
            <Card key={feature.title} hover className='p-6'>
              <div className={`${feature.color || 'text-primary'} mb-4`}>
                <feature.icon className='w-12 h-12' />
              </div>
              <h3 className={`${TYPOGRAPHY.cardTitle} mb-2 ${OPACITY.primary}`}>{feature.title}</h3>
              <p className={OPACITY.muted}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  badgeIcon: BadgeIcon = FaStar,
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      {badge && (
        <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4'>
          <BadgeIcon className='w-4 h-4' />
          <span>{badge}</span>
        </div>
      )}
      <h2 className={`${TYPOGRAPHY.sectionTitle} mb-4 ${OPACITY.primary}`}>{title}</h2>
      {subtitle && (
        <p className={`${TYPOGRAPHY.description} ${OPACITY.muted} max-w-2xl`}>{subtitle}</p>
      )}
    </div>
  );
}

// Reusable CTA Section Component
interface CTASectionProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export function CTASection({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton 
}: CTASectionProps) {
  return (
    <section className={`${SPACING.section} bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`}>
      <div className={SPACING.container}>
        <div className='max-w-4xl mx-auto text-center flex flex-col items-center'>
          <h2 className={`${TYPOGRAPHY.sectionTitle} mb-6 ${OPACITY.primary}`}>{title}</h2>
          <p className={`${TYPOGRAPHY.description} ${OPACITY.muted} mb-10`}>
            {description}
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {primaryButton && (
              <Button
                variant='primary'
                size='lg'
                href={primaryButton.href}
                icon={primaryButton.icon || FaDownload}
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant='outline'
                size='lg'
                href={secondaryButton.href}
                icon={secondaryButton.icon || FaBook}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

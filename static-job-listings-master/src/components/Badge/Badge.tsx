import { CSSProperties, ReactNode } from 'react';

type Variants = 'primary' | 'dark';

const baseStyles: CSSProperties = {
  color: 'var(--white)',
  borderRadius: 16,
  padding: '0 10px',
  textTransform: 'uppercase',
  fontSize: 13,
  lineHeight: 2,
};

const styles: { [variant in Variants]: CSSProperties } = {
  primary: {
    ...baseStyles,
    backgroundColor: 'var(--primary)',
  },
  dark: {
    ...baseStyles,
    backgroundColor: 'var(--very-dark-cyan)',
  },
};

interface BadgeProps {
  variant: Variants;
  children: ReactNode;
}

export const Badge = ({ variant, children }: BadgeProps) => {
  const variantStyles = styles[variant];

  return <div style={variantStyles}>{children}</div>;
};

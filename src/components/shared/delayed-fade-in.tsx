import classNames from '@/lib/classNames';
import { useEffect, useState } from 'react';



interface DelayedFadeInProps {
  className?: string;
  delay: number;
  children: React.ReactNode;
  noFadeIn?: boolean;
}

export const DelayedFadeIn: React.FC<DelayedFadeInProps> = ({
  className,
  delay,
  children,
  noFadeIn=true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <span
      className={classNames(
        !noFadeIn && 'animate-fade-in transition-opacity duration-300 ease-in',
        className
      )}
    >
      {children}
    </span>
  );
};

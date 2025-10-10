import * as React from 'react';

interface MotionContextType {
  prefersReducedMotion: boolean;
  toggleMotion: () => void;
}

const MotionContext = React.createContext<MotionContextType | undefined>(undefined);

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(() => {
    // Check user's system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Check localStorage for user preference
    const stored = localStorage.getItem('prefersReducedMotion');
    return stored !== null ? stored === 'true' : mediaQuery.matches;
  });

  React.useEffect(() => {
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('prefersReducedMotion') === null) {
        setPrefersReducedMotion(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    // Apply or remove animation class to body
    if (prefersReducedMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [prefersReducedMotion]);

  const toggleMotion = () => {
    const newValue = !prefersReducedMotion;
    setPrefersReducedMotion(newValue);
    localStorage.setItem('prefersReducedMotion', String(newValue));
  };

  return (
    <MotionContext.Provider value={{ prefersReducedMotion, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => {
  const context = React.useContext(MotionContext);
  if (context === undefined) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

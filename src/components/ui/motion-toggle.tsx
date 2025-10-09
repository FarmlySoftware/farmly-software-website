import { useMotion } from '@/contexts/MotionContext';
import { Button } from '@/components/ui/button';
import { Zap, ZapOff } from 'lucide-react';

const MotionToggle = () => {
  const { prefersReducedMotion, toggleMotion } = useMotion();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMotion}
      aria-label={prefersReducedMotion ? 'Enable animations' : 'Disable animations'}
      title={prefersReducedMotion ? 'Enable animations' : 'Disable animations'}
      className="fixed bottom-4 right-4 z-50 shadow-lg"
    >
      {prefersReducedMotion ? (
        <ZapOff className="h-5 w-5" />
      ) : (
        <Zap className="h-5 w-5" />
      )}
    </Button>
  );
};

export default MotionToggle;

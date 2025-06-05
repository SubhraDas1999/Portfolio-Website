'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000, // 2 seconds
  className,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5,    // Trigger when 50% of the element is in view
  });
  const animationFired = useRef(false);

  useEffect(() => {
    if (inView && !animationFired.current) {
      animationFired.current = true;
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * endValue));
        if (progress < duration) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(endValue); // Ensure it ends exactly on endValue
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, endValue, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;

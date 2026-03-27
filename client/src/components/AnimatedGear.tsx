import React from 'react';

interface AnimatedGearProps {
  size?: number;
  speed?: 'slow' | 'medium' | 'fast';
  color?: string;
  opacity?: number;
  className?: string;
}

export const AnimatedGear: React.FC<AnimatedGearProps> = ({
  size = 100,
  speed = 'medium',
  color = '#00d9ff',
  opacity = 0.3,
  className = '',
}) => {
  const speedClass = {
    slow: 'gear-slow',
    medium: 'gear-medium',
    fast: 'gear-fast',
  }[speed];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${speedClass} ${className}`}
      style={{ opacity }}
    >
      {/* Outer gear teeth */}
      <g fill={color}>
        {/* Center circle */}
        <circle cx="50" cy="50" r="20" fill={color} opacity={opacity * 1.5} />
        
        {/* Gear teeth - 12 teeth */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x1 = 50 + 35 * Math.cos(angle);
          const y1 = 50 + 35 * Math.sin(angle);
          const x2 = 50 + 45 * Math.cos(angle);
          const y2 = 50 + 45 * Math.sin(angle);
          
          return (
            <rect
              key={i}
              x={x1 - 3}
              y={y1 - 3}
              width="6"
              height="15"
              transform={`rotate(${i * 30} 50 50)`}
              fill={color}
              opacity={opacity}
            />
          );
        })}
        
        {/* Inner circle */}
        <circle cx="50" cy="50" r="15" fill="white" opacity={0.1} />
      </g>
    </svg>
  );
};

export default AnimatedGear;

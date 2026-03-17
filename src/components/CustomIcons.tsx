import { Settings, Cog, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

interface IconProps {
  size?: number;
}

export const GearsIcon = ({ size = 64 }: IconProps) => {
  // Use a fixed spacing for the gears to interlock
  const centerShift = size * 0.15;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Primary Gear - Centered at top-left quadrant */}
      <div 
        className="absolute animate-spin" 
        style={{ 
          animationDuration: '10s',
          top: `calc(50% - ${size * 0.35}px - ${centerShift}px)`,
          left: `calc(50% - ${size * 0.35}px - ${centerShift}px)`
        }}
      >
        <Settings size={size * 0.7} strokeWidth={1.5} className="text-[#1d2d45] group-hover:text-white transition-colors duration-500" />
      </div>
      
      {/* Secondary Gear - Centered at bottom-right quadrant */}
      <div 
        className="absolute animate-spin" 
        style={{ 
          animationDirection: 'reverse', 
          animationDuration: '7s',
          top: `calc(50% - ${size * 0.3}px + ${centerShift}px)`,
          left: `calc(50% - ${size * 0.3}px + ${centerShift}px)`
        }}
      >
        <Cog size={size * 0.6} strokeWidth={1.5} className="text-blue-500 group-hover:text-blue-200 transition-colors duration-500" />
      </div>
    </div>
  );
};

export const AnalysisBoardIcon = ({ size = 64 }: IconProps) => {
  return (
    <div className="relative flex items-center justify-center p-2" style={{ width: size, height: size }}>
      {/* Main Bar Chart - Finer than boxes */}
      <BarChart3 
        size={size * 0.7} 
        strokeWidth={1.2} 
        className="text-[#1d2d45] group-hover:text-white transition-colors duration-500" 
      />
      
      {/* The "Finer" Overlay: A sharp trending line upward */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: size * 0.8, height: size * 0.8 }}>
          <TrendingUp 
            size={size * 0.5} 
            strokeWidth={2} 
            className="absolute top-0 right-0 text-blue-500 group-hover:text-blue-200 animate-pulse" 
          />
          
          {/* Subtle sparkles/data points to make it look more premium and 'active' */}
          <Sparkles 
            size={size * 0.25} 
            className="absolute bottom-2 left-2 text-blue-400 opacity-60 group-hover:opacity-100 animate-pulse" 
          />
        </div>
      </div>
    </div>
  );
};

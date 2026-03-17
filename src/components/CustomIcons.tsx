import { Settings, Cog, BarChart3, TrendingUp, Sparkles, MapPin, Globe, Map } from 'lucide-react';

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
        <Settings size={size * 0.7} strokeWidth={1.5} className="text-[#1d2d45] dark:text-white group-hover:text-white transition-colors duration-500" />
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
        <Cog size={size * 0.6} strokeWidth={1.5} className="text-blue-500 dark:text-blue-400 group-hover:text-blue-200 transition-colors duration-500" />
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
        className="text-[#1d2d45] dark:text-white group-hover:text-white transition-colors duration-500" 
      />
      
      {/* The "Finer" Overlay: A sharp trending line upward */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: size * 0.8, height: size * 0.8 }}>
          <TrendingUp 
            size={size * 0.5} 
            strokeWidth={2} 
            className="absolute top-0 right-0 text-blue-500 dark:text-blue-400 group-hover:text-blue-200 animate-pulse" 
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
export const MapLocationIcon = ({ size = 64 }: IconProps) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Perspective Map Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10 transform perspective-1000 rotate-x-30">
        <Map size={size * 0.9} strokeWidth={1} className="text-[#1d2d45] dark:text-blue-200" />
      </div>

      {/* Pulsing Radar Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[30%] h-[30%] bg-blue-500/20 dark:bg-blue-400/20 rounded-full animate-ping shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[15%] h-[15%] bg-blue-500/40 dark:bg-blue-400/40 rounded-full animate-pulse blur-sm" />
      </div>

      {/* Main Map Pin - Elevated slightly */}
      <div className="relative z-10 -translate-y-1 animate-bounce" style={{ animationDuration: '3s' }}>
        <MapPin 
          size={size * 0.7} 
          strokeWidth={1.5} 
          fill="currentColor"
          className="text-[#1d2d45] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 fill-blue-500/10" 
        />
        
        {/* Shine/Reflection effect on the pin head */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full blur-[1px]" />
      </div>

      {/* Subtle floating "location" sparks */}
      <Sparkles 
        size={size * 0.2} 
        className="absolute top-2 right-2 text-blue-400 opacity-60 animate-pulse" 
      />
    </div>
  );
};

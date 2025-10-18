import { useEffect, useState } from 'react';

const getDeviceType = (width) => {
  if (width < 768) return 'mobile';
  if (width >= 768 && width < 1024) return 'tablet';
  return 'desktop';
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(() => {
    // Default value to prevent hydration mismatch in SSR
    if (typeof window === 'undefined') return 'desktop';
    return getDeviceType(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      const currentType = getDeviceType(window.innerWidth);
      setDeviceType(currentType);
    };

    window.addEventListener('resize', handleResize);

    // Set initial value
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;

import { useCallback } from 'react';

const Scroll = () => {
  // Function to scroll to a specific element (with ref)
  const scrollToView = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { scrollToView };
};

export default Scroll;

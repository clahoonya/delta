import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that automatically scrolls to top when route changes
 * This improves UX by ensuring users start at the top of each new page
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

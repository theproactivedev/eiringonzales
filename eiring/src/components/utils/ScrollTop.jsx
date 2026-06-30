import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scrollbar to the very top left of the screen
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}